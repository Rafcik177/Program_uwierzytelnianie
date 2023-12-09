<?php

namespace App\Providers;

use App\Exceptions\ApiException;
use App\Services\JWTService;
use App\Services\JWTServiceInterface;
use App\Services\MessageService;
use App\Services\MessageServiceInterface;
use Illuminate\Support\ServiceProvider;
use Http\Adapter\Guzzle7\Client as GuzzleAdapter;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (!isset($_ENV['VALIDATE_ENV']) || $_ENV['VALIDATE_ENV']) {
            $required = ['PORT', 'CLIENT_ORIGIN_URL', 'AUTH0_DOMAIN', 'AUTH0_AUDIENCE'];
            foreach ($required as $name) {
                $value = env($name);
                if (empty($value)) {
                    throw new ApiException('The required environment variables are missing. Please check the .env file.');
                }
            }
        }

        $this->app->bind(MessageServiceInterface::class, MessageService::class);
        $this->app->bind(JWTServiceInterface::class, JWTService::class);
        $this->app->singleton('httpClient', function () {
            return GuzzleAdapter::createWithConfig([]);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
