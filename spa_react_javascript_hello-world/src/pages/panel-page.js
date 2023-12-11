import { useAuth0 } from "@auth0/auth0-react";
import { PageLayout } from "../components/page-layout";
import React from 'react';
import { createRef, useState } from "react";
import { AiFillSafetyCertificate, AiOutlineCaretRight } from 'react-icons/ai';
import { LuSword } from 'react-icons/lu';
import { MdPassword } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { IoHappyOutline } from "react-icons/io5";
import { IoMdFingerPrint } from "react-icons/io";
import { Link } from "react-router-dom";
export const Panel = () => {
    
    return (
      <PageLayout>
        <div className="container col-xl-12">

<h1>Dostępne po zalogowaniu <AiFillSafetyCertificate className="icon-certyfikat" /></h1>
<div className='panel_kafelki'>
  <Link to="/poradnik" className="kafelek">
    <div className='zawartosc_kafelka'>
      <LuSword className="icon-LuSword" /><br />
      Naucz się być bezpiecznym wojownikiem w internecie
    </div>
  </Link>
  <Link to="/sila-hasla" className="kafelek">
    <div className='zawartosc_kafelka'>
      <MdPassword className="icon-MdPassword" /><br />
      Twórz silne hasła
    </div>
  </Link>
  <Link to="/biometria" className="kafelek">
    <div className='zawartosc_kafelka'>
      <IoMdFingerPrint className="icon-IoMdFingerPrint" /><br />
      Użyj biometrii
    </div>
  </Link>
</div>
<div className='panel_kafelki'>
  <Link to="/wieloetapowe" className="kafelek">
    <div className='zawartosc_kafelka'>
      Krok 1 <AiOutlineCaretRight className="icon-caret-right" />
      Krok 2 <AiOutlineCaretRight className="icon-caret-right" />
      Krok 3 <AiOutlineCaretRight className="icon-caret-right" />
      Uwierzytelnianie wieloetapowe
    </div>
  </Link>
  <Link to="/wdrazanie" className="kafelek">
    <div className='zawartosc_kafelka'>
      <FaGears className="icon-FaGears" /><br />
      Wdróż zdobytą wiedzę
    </div>
  </Link>
  <Link to="/konto" className="kafelek">
    <div className='zawartosc_kafelka'>
      <IoHappyOutline className="icon-IoHappyOutline " /><br />
      Twoje konto
    </div>
  </Link>
</div>
</div>
      </PageLayout>
    );
};
