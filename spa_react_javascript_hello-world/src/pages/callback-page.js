import { useAuth0 } from "@auth0/auth0-react";
import React,{ useEffect, useState }  from "react";
import { NavBar } from "../components/navigation/desktop/nav-bar";
import { MobileNavBar } from "../components/navigation/mobile/mobile-nav-bar";
import { PageLayout } from "../components/page-layout";
import { useNavigate } from 'react-router-dom';



export const CallbackPage = () => {
  
  const {user , error } = useAuth0();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!error) {
      const timeoutId = setTimeout(() => {
        navigate('/panel');
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [error, navigate]);

  if (error) {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Error
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>{error.message}</span>
            </p>
          </div>
        </div>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" style={{ color: "lightgreen" }} className="content__title">
            Poprawnie zalogowano
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span style={{ textAlign: "center" }}>Zostałeś/aś poprawnie zalogowany. Za chwilę zostaniesz przeniesiony do Panelu użytkownika</span>
              
            </p>
          </div>
        </div>
      </PageLayout>
    );
  }
};
