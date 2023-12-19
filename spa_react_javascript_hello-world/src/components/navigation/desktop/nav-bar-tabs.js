import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/sila-hasla" label="Siła Hasła" />
      <NavBarTab path="/poradnik" label="Poradnik" />
      {isAuthenticated && (
        <>
               <NavBarTab path="/profil" label="Profil" />
               <NavBarTab path="/panel" label="Panel" />
          
        </>
      )}
  
      
    </div>
  );
};
//GZ8LEJRLKNRZVGBFUGRSV7CJ