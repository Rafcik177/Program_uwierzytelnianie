<?php

namespace App\Providers;

use App\Services\JWTServiceInterface;
use Auth0\SDK\Auth0;
use Auth0\SDK\Configuration\SdkConfiguration;
use Illuminate\Auth\GenericUser;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Request;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Auth0::class, function () {
            $config = array_merge(config('auth0'), [
                'httpClient' => $this->app->make('httpClient'),
                'strategy' => 'api'
            ]);

            if (isset($config['useCache']) && $config['useCache']) {
                $cacheStore = is_bool($config['useCache']) ? config('cache.default') : $config['useCache'];
                $cache = Cache::store($cacheStore);

                $config['tokenCache'] = new \Symfony\Component\Cache\Adapter\Psr16Adapter($cache);
                unset($config['useCache']);
            }

            $configuration = new SdkConfiguration($config);

            return new Auth0($configuration);
        });
    }

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot(JWTServiceInterface  $jwtService)
    {
        $this->registerPolicies();

        $this->app['auth']->viaRequest('auth0-token', function (Request  $request) use ($jwtService) {
            if (!$request->headers->has('authorization')) {
                return null;
            }

            $bearerToken = $jwtService->extractBearerTokenFromRequest($request);
            $data = $jwtService->decodeBearerToken($bearerToken);

            return new GenericUser($data);
        });
    }
}
