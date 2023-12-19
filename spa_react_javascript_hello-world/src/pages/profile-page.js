import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const UserProfile = () => {
  
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const fetchUserMetadata = async () => {
      if (isAuthenticated) {
        try {
          const idTokenClaims = await getIdTokenClaims();
          setUserMetadata(idTokenClaims['https://dev-rafcik.eu.auth0.com/user_metadata']);
        } catch (error) {
          console.error('Błąd podczas pobierania danych użytkownika:', error);
        }
      }
    };

    fetchUserMetadata();
  }, [isAuthenticated, getIdTokenClaims]);

  if (!isAuthenticated) {
    return <div>Użytkownik nieuwierzytelniony</div>;
  }

  return (
    <PageLayout>
      <div className="content-layout">
     
        <h1 id="page-title" className="content__title">
        <img src={user.picture} alt="Profile" className="profile__avatar"/> <br />Twój Profil  {user.preferred_username}
        </h1>
       
        <div className="content__body">
          <p id="page-description">
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            
          </p>
          <CodeSnippet title="user" code={<pre>{JSON.stringify(user, null, 2)}</pre>} />
        </div>
      </div>
    </PageLayout>
  );
};
