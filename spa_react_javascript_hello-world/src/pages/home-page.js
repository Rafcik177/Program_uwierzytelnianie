import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
export const HomePage = () => (
  <PageLayout>
    <div>
            <div className="container col-xl-12">
                <div className="landing-container col-xl-12">
                    <div className="welcome-container col-xl-7">
                        <h1>Witaj, Wojowniku Bezpieczeństwa!</h1>

                        <section>Czy zastanawiałeś się kiedyś, jak efektywnie zabezpieczyć swoje dane online? W świecie, gdzie cyberzagrożenia są rzeczywistością, potrzebujemy odpowiednich narzędzi i wiedzy, aby bronić naszą prywatność.</section>
                    </div>
                </div>
                <h1>Dlaczego <span style={{ color: "red" }}>Be</span> Safe Warrior?</h1>
                <div className="why_be_safe_warrior col-xl-11">

                    <div className="why_first_row">
                        <p><span className="emoji">✅</span> <b>Edukacja Bezpieczeństwa Online: </b>Dowiedz się, jak skutecznie chronić swoje dane przed atakami hakerskimi i zagrożeniami online.</p>
                        <p><span className="emoji">✅</span><b>Uwierzytelnianie Wieloetapowe:</b><br /> Odkryj różne metody uwierzytelniania i naucz się, dlaczego systemy wieloskładnikowe są kluczowe dla bezpieczeństwa.</p>

                    </div>
                    <div className="why_second_row">
                        <p><span className="emoji">✅</span> <b>Poradniki i Praktyczne Wskazówki:</b><br /> Znajdź praktyczne poradniki, jak skonfigurować bezpieczne hasła, korzystać z narzędzi uwierzytelniania i unikać pułapek online.</p>
                        <p><span className="emoji">✅</span> <b>Bezpieczeństwo Danych na Wyciągnięcie Ręki:</b><br /> Oferujemy narzędzia do sprawdzania siły hasła, porady dotyczące bezpiecznego korzystania z Internetu i wiele więcej.</p>
                    </div>
                </div>
                <div className="how_start_be_safe_warrior col-xl-11">
                    <h1>Jak Zacząć?</h1>
                    <p><span className="emoji2">🚀</span><br /> Zarejestruj Się na <b><span style={{ color: "red" }}>Be</span> Safe Warrior:</b> Twórz swoje konto, aby uzyskać dostęp do ekskluzywnych treści i narzędzi bezpieczeństwa.</p>
                    <p><span className="emoji2">🛡️</span><br /> Skonfiguruj Profil Bezpieczeństwa: Dodawaj metody uwierzytelniania i dostosuj swoje ustawienia bezpieczeństwa.</p>
                    <p><span className="emoji2">📚</span><br /> Dowiedz Się Więcej: Przeglądaj nasze poradniki i artykuły, aby stać się ekspertem w dziedzinie bezpieczeństwa online.</p>

                </div>

                <div className="join_to_be_safe_warrior col-xl-11">
                    <h1>Dołącz do Społeczności <span style={{ color: "red" }}>Be</span> Safe Warrior</h1>
                    <div className="join_to_be_safe_warrior_one">
                        Nie zostawiaj swojej prywatności przypadkowi. Dołącz do <span style={{ color: "red" }}>Be</span> Safe Warrior już dziś i weź sprawy w swoje ręce.

                        Zapewnij sobie spokojny sen, wiedząc, że jesteś gotów na każde wyzwanie, jakie stawia przed Tobą świat online. Razem możemy stworzyć bezpieczne środowisko online dla nas wszystkich.<br />
                        <b>🛡️ Bezpieczeństwo zaczyna się tutaj! 🛡️</b>
                    </div>


                
                </div>

            </div>
            
        </div>
  </PageLayout>
);
