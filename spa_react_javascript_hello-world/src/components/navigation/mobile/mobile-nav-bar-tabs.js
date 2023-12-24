import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/sila-hasla"
        label="Siła Hasła"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/poradnik"
        label="Poradnik"
        handleClick={handleClick}
      />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
            path="/panel"
            label="Panel"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/profil"
            label="Profil"
            handleClick={handleClick}
          />
        </>
      )}
      
      
    
      
    </div>
  );
};
