import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { FaFingerprint } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3, TbSquareRoundedNumber4 } from "react-icons/tb";
import { Link } from "react-router-dom";
export const BeSafe = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Naucz się być <span style={{ color: "lightgreen" }}>bezpiecznym</span> w internecie
        </h1>
        <div className="content__body">

          <span>
            <p className="poradnik_akapit">
              We współczesnym świecie należy być przygotowanym na <strong style={{ color: "red" }}>różne zagrożenia</strong> ze strony hakerów. Jedno - i w dodatku słabe - hasło nie jest najlepszą rzeczą jeśli chodzi o zabezpieczenie swoich danych. Dlatego należy stosować silne sposoby uwierzytelniania w sieci.
            </p>
            <p className="poradnik_akapit">
              Klasyczne metody uwierzytelniania, takie jak hasło czy kod PIN, są jednym z najstarszych i wciąż jednymi z najpopularniejszych metod potwierdzania naszej tożsamości. Uwierzytelnianie w najprostszej formie polega na podaniu loginu i hasła. Zastosowanie tylko jednego składnika podczas logowania jest w dzisiejszych czasach <strong style={{ color: "red" }}>niewystarczalne</strong>, dlatego nie jest dobrą metodą opierać się wyłącznie na tym sposobie uwierzytelniania.
            </p>
            <section className="section_poradnik">
              <img className="pass_img" src='https://securityintelligence.com/wp-content/uploads/2018/10/si-eight-character-password-feature.jpg' alt="zdjecie_hasla" />
              <h2 className="section_title"><span className="emoji2"><MdOutlinePassword /></span> Hasła</h2>
              <p className="poradnik_akapit">Tworzenie haseł to <strong>ważna</strong> czynność i dlatego użytkownik powinien przemyśleć, czy zastosowanie danego hasła przełoży się na większe bezpieczeństwo swojego konta.
              </p>
              <section className="naglowek_section">Największe wady stosowania haseł:</section>
              <dl className="lista-bad">

                <dt>Hasła się starzeją i czas potrzebny na ich złamanie również, dlatego trzeba je często zmieniać i zadbać o to by były skomplikowane.
                </dt>
                <dt>Hasło można odgadnąć za pomocą prób i błędów.
                </dt>
                <dt>Wymyślanie nowych haseł i posiadanie ich sporo w swojej głowie powoduje, że z czasem można zapomnieć hasła do logowania.
                </dt>
                <dt>Jeżeli hasło jest przesyłane w sposób źle zabezpieczony, lub co gorsza w sposób jawny, takie hasło można podsłuchać podczas transmisji a następnie odszyfrować i wykorzystać.
                </dt>
                <dt>Użytkownicy powinni być ostrożni wobec prób phishingu, czyli prób oszustwa polegających na przekonaniu ich do podania swoich haseł. Ważne jest, aby weryfikować strony internetowe i źródła, z których pochodzą żądania podania hasła.
                </dt>
              </dl>
              <section>Sposoby zwiększenia siły hasła:</section>
              <dl className="lista-good">

                <dt>
                  Hasło powinno być dłuższe niż 8-10 znaków, im dłuższe hasło tym lepiej.
                </dt>
                <dt>
                  Powinno składać się z małych, dużych liter, a także z liczb i znaków specjalnych.
                </dt>
                <dt>
                  Hasło nie może być takie same jak login, ani jak twoje imię czy nazwisko.
                </dt>
                <dt>
                  Można stosować zamianę liter na znaki specjalne: zamiast litery „a” można użyć „@”, analogicznie litera „i” lub „l” na „!”, literę „s” na „$”. Lub losowo np.: „H” na „*”.
                </dt>
                <dt>
                  Jedno hasło do jednego konta. Nie używaj tego samego hasła do kilku kont stosując lekką modyfikację oryginału.
                </dt>
                <dt>
                  Korzystaj z menadżera haseł, który za Ciebie zapamięta wszystkie hasła.
                </dt>
              </dl>
              <p className="poradnik_akapit" style={{ textAlign: "center", background:"white", padding: "100px", color:"black", borderRadius:"40px", marginTop: "90px", marginBottom: "90px" }}> 
              <span style={{ fontSize: 40 }}>🔐</span><br />
              Skorzystaj z narzędzia do tworzenia silnych haseł i sprawdzania swojego bezpieczeństwa! <br /><strong >
                <Link to="/sila-hasla" style={{ color: "green" }}>  &gt; &gt; Siła hasła &lt; &lt;</Link></strong> 
            </p>
           
            </section>
            <section className="section_poradnik">
              <h2 className="section_title"> Piny <br /><span className="emoji2"><TbSquareRoundedNumber1 /><TbSquareRoundedNumber2 /><TbSquareRoundedNumber3 /><TbSquareRoundedNumber4 /></span></h2>
              <section className="naglowek_section">Największe wady stosowania kodów PIN:</section>
              <dl className="lista-bad">
                <dt>PIN-y składają się z cyfr, co ułatwia złamanie kodu za pomocą brute force, w których atakujący próbują wszystkie możliwe kombinacje, aby odgadnąć PIN.
                </dt>
                <dt>Zazwyczaj składają się z 4 lub 6 cyfr. Dzięki temu są stosunkowo łatwe do zapamiętania przez osoby „podglądające”.
                </dt>
                <dt>Brak różnorodności w znakach, co ogranicza różnorodność. W przeciwieństwie do haseł, PIN-y nie zawierają liter ani znaków specjalnych.
                </dt>
              </dl>
            </section>
            <section className="section_poradnik">
              <img className="bio_img" src='https://images.ctfassets.net/23aumh6u8s0i/6MQMwDdaUKU1w1uTWkkRZc/faca51a20b078f6bdb75b73502a92b15/cybersecurity_finger' alt="zdjecie_biometria" />

              <h2 className="section_title"><FaFingerprint /> Stosowanie biometrii</h2>
              <p className="poradnik_akapit">Jednym z powszechnie stosowanych rodzajów uwierzytelniania opartego na biometrii jest rozpoznawanie odcisku palca. Obecnie znaczna większość urządzeń mobilnych posiada skaner linii papilarnych i to uwierzytelnianie jest stosowane jako jedne z podstawowych. Użytkownik po prostu umieszcza swój palec na czytniku, a system dokładnie analizuje odczytany unikalny wzór linii papilarnych, z tym zapisanym w pamięci urządzenia. </p>
              <dl className="lista-good">
                <dt><strong>Wysoka precyzja:</strong><br /> Biometria umożliwia identyfikację osób z wysokim stopniem precyzji, ponieważ opiera się na unikalnych cechach, takich jak odciski palców, wzór siatkówki czy cechy twarzy.
                </dt>
                <dt><strong>Trudność fałszowania:</strong><br /> W porównaniu do tradycyjnych metod identyfikacji, biometria jest trudniejsza do sfałszowania. Unikalność cech biometrycznych utrudnia podrabianie.
                </dt>
                <dt>
                  <strong>Bezpieczeństwo: </strong><br />
                  Biometria zapewnia wysoki poziom bezpieczeństwa, ponieważ wymaga fizycznej obecności osoby.
                </dt>
                <dt>
                  <strong>Bezpieczeństwo psychiczne: </strong><br />
                  Ludzie nie muszą pamiętać haseł czy nosić przy sobie kart identyfikacyjnych.
                </dt>
                <dt>
                  <strong>Szybkość: </strong><br />
                  Proces identyfikacji przy użyciu biometrii może być szybki i wygodny. Wystarczy krótka chwila na zeskanowanie odcisku palca czy twarzy.
                </dt>
                <dt>
                  <strong>Odporność na zapomnienie czy utratę:</strong><br />
                  W przeciwieństwie do haseł, które mogą zostać zapomniane, biometryczne cechy są trudne do utraty, ponieważ są integralną częścią osoby.
                </dt>
              </dl>
            </section>
            <section className="section_poradnik">
              <h2 className="section_title">
                Uwierzytelnianie Dwuskładnikowe
              </h2>
              <p className="poradnik_akapit">
                Włącz uwierzytelnianie dwuskładnikowe tam, gdzie to możliwe. To dodatkowy poziom ochrony, który wymaga potwierdzenia tożsamości za pomocą dodatkowego kodu. Uwierzytelnianie wieloskładnikowe jest jedną z metod zabezpieczania dostępu do systemów, kont użytkowników czy danych poprzez wykorzystanie co najmniej dwóch różnych czynników uwierzytelniania. W ten sposób można bardziej zabezpieczyć nasze dane czy konta, ponieważ bezpieczeństwo nie opiera się wyłącznie na jednym składniku, lecz na co najmniej dwóch, a co za tym idzie szanse, by osoba podszywająca się pod nas miała uzyskać dostęp są coraz niższe, w zależności od wzrostu stopnia zabezpieczeń.
              </p>
              <p className="poradnik_akapit">
                Włączając uwierzytelnianie dwuskładnikowe, znacznie podniesiesz poziom bezpieczeństwa swojego konta online. Pamiętaj, że inwestycja w bezpieczeństwo internetowe to inwestycja w bezpieczeństwo Twoich danych i prywatności.
              </p>



              <section className="naglowek_section">Dlaczego Warto Włączyć Uwierzytelnianie Dwuskładnikowe?</section>
              <dl className="lista-good2">
                <dt>
                  <strong>Dodatkowa Warstwa Bezpieczeństwa:</strong><br />
                  Uwierzytelnianie dwuskładnikowe sprawia, że nawet jeśli ktoś otrzymałby Twoje hasło, bez drugiego elementu (na przykład kodu generowanego na urządzeniu mobilnym), nie będzie w stanie uzyskać dostępu do konta.
                </dt>
                <dt>
                  <strong>Zabezpieczenie Przed Phishingiem:</strong><br />
                  Nawet jeśli wpadniesz w sidła phishingu i podasz swoje hasło, atakujący nie będzie miał dostępu do Twojego konta bez drugiego czynnika uwierzytelniającego.


                </dt>
                <dt>
                  <strong>Bezpieczeństwo w Przypadku Wycieku Hasła:</strong><br />
                  W przypadku wycieku bazy danych lub haseł, uwierzytelnianie dwuskładnikowe zapewnia dodatkową ochronę, ponieważ atakujący potrzebuje więcej niż samego hasła.


                </dt>
                <dt>
                  <strong>Szybka Reakcja na Nieprawidłowości:</strong><br />
                  W razie podejrzeń o nieprawidłowości, szybkie zmienienie drugiego czynnika uwierzytelniającego (na przykład wygenerowanego kodu) może pomóc zabezpieczyć konto.


                </dt>
              </dl>
            </section>

          </span>



        </div>
      </div>
    </PageLayout>
  );
};
