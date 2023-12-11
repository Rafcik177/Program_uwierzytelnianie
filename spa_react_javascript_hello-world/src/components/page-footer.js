import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import { NavBarBrand } from "./navigation/desktop/nav-bar-brand";
export const PageFooter = () => {

  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
        screen_hint: "signup",
      },
    });
  };
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
    
            Dołącz do społeczności Be Safe Warrior już teraz 
          </div>
          <div className="page-footer-info__button">
            <button className="button button--secondary" onClick={handleSignUp}>
             Dołącz 
            </button>
          </div>
          <div className="page-footer-info__resource-list">
            
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
          <NavBarBrand />
          </div>
        </div>
      </div>
    </footer>
  );
};
