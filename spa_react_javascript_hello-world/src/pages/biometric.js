import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { Link } from "react-router-dom";
import fingerprint from '../img/finger.png';
import pin from '../img/pin.png';
export const Biometria = () => {
  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Wykorzystaj <span style={{ color: "lightgreen" }}>biometrię</span>!
        </h1>
        <div className="content__body">

          <span>
            <p className="poradnik_akapit">
              
            </p>
      
            <section className="section_poradnik">
              <img className="bio_img" src={fingerprint} alt="zdjecie_hasla" />
              <img className="bio_img" src={pin} alt="zdjecie_hasla" />
              
            </section>

          </span>
        </div>
      </div>
    </PageLayout>
  );
};
