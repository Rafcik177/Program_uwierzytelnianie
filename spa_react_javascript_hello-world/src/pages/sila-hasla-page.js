import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { Link } from "react-router-dom";
import { MdPassword } from "react-icons/md";
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import * as zxcvbnPlPackage from '@zxcvbn-ts/language-pl'

export const SilaHasla = () => {
  const [komunikat_czas, setkomunikat_czas] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [dlugosc, setdlugosc] = useState('red');
  const [male_litery, setmale_litery] = useState('red');
  const [duze_litery, setduze_litery] = useState('red');
  const [cyfry, setcyfry] = useState('red');
  const [specjalne, setspecjalne] = useState('red');
  const testResult = zxcvbn(password);
  const inputType = showPassword ? 'text' : 'password';

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
  const options = {
    translations: zxcvbnPlPackage.translations,
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnPlPackage.dictionary,
    },
  }
  zxcvbnOptions.setOptions(options)




  const checkPasswordStrength = () => {
    const length = password.length;
    setdlugosc(length > 7 ? 'green' : 'red');
    const hasLowerCase = /[a-z]/.test(password);
    setmale_litery(hasLowerCase ? 'green' : 'red');
    const hasUpperCase = /[A-Z]/.test(password);
    setduze_litery(hasUpperCase ? 'green' : 'red');
    const hasNumber = /\d/.test(password);
    setcyfry(hasNumber ? 'green' : 'red');
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    setspecjalne(hasSpecialChar ? 'green' : 'red');

    console.log(testResult)

    let strength = 0;

    strength += length >= 8 ? 1 : 0;
    strength += length >= 12 ? 1 : 0;
    strength += length >= 15 ? 1 : 0;

    strength += hasLowerCase ? 1 : 0;
    strength += hasUpperCase ? 1 : 0;
    strength += hasNumber ? 1 : 0;
    strength += hasSpecialChar ? 1 : 0;

    if (length > 7 && male_litery === 'green' && duze_litery === 'green' && cyfry === 'green' && specjalne === 'green') {
      setkomunikat_czas(<>Czas na złamanie: Offline Slow Hashing: {testResult.crackTimesDisplay.offlineSlowHashing1e4PerSecond}</>);
    }
    else {
      setkomunikat_czas(<></>);
    }
    return strength;
    

  };
  useEffect(() => {


    const passwordStrength = checkPasswordStrength();
    setPasswordStrength(passwordStrength);

  }, [password]);

  return (
    <PageLayout>
      <div className="pojemnik col-xl-12">

        <h1>
          ***
          Sprawdzanie <span style={{ color: '#5dc72f', fontWeight: '700' }}>SIŁY </span> hasła
          ***
        </h1>
        <div className='opis col-xl-9'>
          <span style={{ fontSize: 40 }}>🔐</span><br /><strong>Jak to działa?</strong><br />
          <p className='tekst_opisu '>Wprowadź swoje hasło w poniższe okienko, a my przeprowadzimy kompleksową analizę jego siły. Ten algorytm uwzględnia różnorodne czynniki, takie jak długość, unikalność, stosowanie wielkich i małych liter, liczby oraz znaki specjalne. Otrzymasz szczegółową ocenę i wskazówki, jak zwiększyć bezpieczeństwo Twojego hasła.</p>
          <span style={{ fontSize: 40 }}>🛡️</span><br /><strong>Dlaczego to ważne?</strong><br />
          <p className='tekst_opisu '>W dobie wzrastających zagrożeń w cyberprzestrzeni, silne hasło jest pierwszą linią obrony przed nieuprawnionym dostępem. Ta aplikacja pomaga Ci świadomie zadbać o bezpieczeństwo swoich danych, umożliwiając dostęp do narzędzi niezbędnych do stworzenia solidnego hasła.</p>

          <span style={{ fontSize: 40 }}>🚀</span><br /><strong>Ochrona Twojej Prywatności</strong><br />
          <p className='tekst_opisu '> Jako platforma, dbamy o Twoją prywatność. Żadne wprowadzone przez Ciebie dane nie są przechowywane, co gwarantuje pełną dyskrecję w procesie sprawdzania siły hasła.</p>

          <p style={{ padding: 20 }}><b>Gotowy na rozpoczęcie? Sprawdź siłę swojego hasła już teraz!</b></p>

        </div>
        <div className='form col-xl-6'>
          <span style={{ fontSize: 30 }}>Podaj hasło</span><br />
          <input type={inputType} value={password} placeholder='Podaj hasło' onChange={handlePasswordChange} maxLength="25" />
          <input type="checkbox" checked={showPassword} onChange={handleCheckboxChange} />
          <span> Pokaż hasło</span><br />
          <div className='sila_hasla_legenda col-xl-8'>
            Siła hasła: {testResult.score}  z 4<br />
            {komunikat_czas}
            <ul>
              {testResult.feedback.suggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <br />
            



            <div className="progress">
              <div className="progress-bar progress-bar-striped" style={{ width: `${testResult.score / 4 * 100}%` }} role="progressbar" aria-valuenow={testResult.score} aria-valuemin="0" aria-valuemax="7"></div>
            </div>
            <span style={{ color: dlugosc }}>Długość hasła: min 8 znaków (wprowadź więcej)</span> <br />
            <span style={{ color: male_litery }}>Hasło zawiera małe litery</span> <br />
            <span style={{ color: duze_litery }}>Hasło zawiera duże litery</span> <br />
            <span style={{ color: cyfry }}>Hasło zawiera cyfry</span> <br />
            <span style={{ color: specjalne }}>Hasło zawiera znaki specjalne</span> <br /><br />
            {testResult.sequence.length !== 0 ? <><strong>Znalezione ciągi</strong></> : ""}
            <ul>
              {testResult.sequence.map((item, index) => (
                 <React.Fragment key={index}>
                {item.pattern==='bruteforce' ? 
                (
                  <li className="listasequence" key={index}>
                  Fragment: "{item.token}" nie należy do żadnego słownika, daty, czy sekwencji, zatem do uzyskania tej części hasła należy użyć metody siłowej.  
                </li>
                )
                :
                (
                  <li className="listasequence" key={index}>
                  Wzór: {item.pattern} <> </> 
                  fragment: {item.token}<br />
                </li>
                )
                }
                </React.Fragment>
              ))}
            </ul>
          </div>
          {testResult.score == 4 &&
            <p style={{ color: 'green' }}>Teraz wiesz, jak tworzyć silne hasła. Zastosuj silne hasła do wszystkich swoich kont.</p>

          }

        </div>
      </div>
    </PageLayout>
  );
};
