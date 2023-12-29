import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { Link } from "react-router-dom";
import fingerprint from '../img/finger.png';
import pin from '../img/pin.png';
import mbank from '../img/mbank_odcisk_palca.png';
import orange from '../img/orange_odcisk_palca.png';
import { IoMdFingerPrint } from "react-icons/io";
export const Biometria = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Wykorzystaj <span style={{ color: "lightgreen" }}>biometrię</span>!
        </h1>
        <div className="content__body">


          <p className="poradnik_akapit">
            Stosowanie zabezpieczeń biometrycznych to nie tylko zwiększenie bezpieczeństwa swoich danych i kont, ale także wygoda uwierzytelniania, ponieważ nie trzeba niczego zapamiętywać. Jest to o tyle przyjemniejsze, że w przypadku, gdy zapomnimy swojego hasła, to mamy coś, z czym się nigdy nie rozstajemy. <strong>Nas samych!</strong>
          </p>
          <div className="bio_img_flex">
            <figure>
              <img className="bio_img" src={mbank} alt="Logowanie biometryczne do mBanku" />
              <figcaption>Logowanie biometryczne do mBanku</figcaption>
            </figure>
            
            <figure>
              <img className="bio_img" src={orange} alt="Logowanie biometryczne do Mój Orange" />
              <figcaption>Logowanie biometryczne do Mój Orange</figcaption>
            </figure>
          </div>

          <p className="poradnik_akapit">
            Współcześnie najpopularniejszym sposobem uwierzytelniania się na urządzeniach mobilnych jest odcisk palca, gdyż znaczna większość smartfonów posiada odpowiedni czytnik. <strong>Przykładasz palec i już.</strong> Nie ma znaczenia, że ktoś widział Ciebie, jak logujesz się do swojego konta. Wie tylko tyle, że nie jest w stanie podrobić Twojego odcisku palca, zatem jesteś bezpieczny. Podobnie sprawa ma się ze skanerem twarzy, czy siatkówki oka. Obecne urządzenia z łatwością odróżnią, czy Ty to na pewno Ty.
          </p>
          <p className="poradnik_akapit" style={{ textAlign: "center", background:"white", padding: "100px", color:"black", borderRadius:"40px", marginTop: "90px", marginBottom: "90px" }}> 
              <span style={{ fontSize: 40 }}><IoMdFingerPrint className="icon-IoMdFingerPrint" /><br /></span>
              Skorzystaj z uwierzytelniania biometrycznego wszędzie tam, gdzie jest to możliwe! <br />
              <strong >
                <span style={{ color: "green" }}>Bądź bezpieczny i nie daj się hakerom!</span>
                </strong> 
            </p>
          <section className="section_poradnik">
          <p className="poradnik_akapit">
            Na <strong>Be Safe Warrior</strong> możesz korzystać z biometrii. Jeżeli twoje urządzenie posiada czytniki biometryczne takie jak: czytnik linii papilarnych, skaner twarzy, skaner siatkówki oka czy jakikolwiek inny, to możesz śmiało to wdrożyć, by być bezpiecznym! Przy rejestracji określ czy chcesz korzystać z biometrii, a jeśli tego nie zrobiłeś, to podczas logowania zostaniesz zapytany, czy chcesz do tego przystąpić.
          </p>
          <div className="bio_img_flex">
          <figure>
              <img className="bio_img" src={fingerprint} alt="Logowanie biometryczne do Be Safe Warrior" />
              <figcaption>Logowanie biometryczne do Be Safe Warrior</figcaption>
            </figure>
            <figure>
            <img className="bio_img" src={pin} alt="Logowanie PINem do Be Safe Warrior" />
              <figcaption>Logowanie PINem do Be Safe Warrior</figcaption>
            </figure>
            </div>
            <p className="poradnik_akapit">
            Jeżeli Twoje urządzenie nie posiada skanerów biometrycznych, to nic nie szkodzi. Możesz wykorzystać zabezpieczenia jakie stosujesz np. w systemie Windows. Podasz swój kod PIN i zostaniesz pozytywnie uwierzytelniony.
          </p>
          <section>Główne zalety biometrii: </section>
              <dl className="lista-good">

                <dt>
                Każda osoba ma unikalne cechy biometryczne, co sprawia, że biometria jest skutecznym narzędziem do identyfikacji jednostek.
                </dt>
                <dt>
                Nie ma potrzeby zapamiętywania haseł czy numerów PIN.
                </dt>
                <dt>
                Biometria oferuje wysoki poziom bezpieczeństwa, ponieważ trudno jest podrabiać czy kopiować unikalne cechy fizyczne.
                </dt>
                <dt>
                W przeciwieństwie do haseł czy kart magnetycznych, cechy biometryczne są trudne do zgubienia lub zapomnienia, ponieważ są integralną częścią każdego człowieka.
                </dt>
                <dt>
                Trudności w kradzieży czy udostępnianiu informacji biometrycznych bez zgody właściciela, co wpływa na ograniczenie potencjalnych zagrożeń związanych z kradzieżą tożsamości.
                </dt>
                
              </dl>
          </section>


        </div>
      </div>
    </PageLayout>
  );
};
