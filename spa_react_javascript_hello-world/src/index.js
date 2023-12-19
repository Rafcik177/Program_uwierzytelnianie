import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./styles/styles.css";
import "./styles/App.css";
import "./styles/panel.css";
import ScrollToTop from "react-scroll-to-top";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop top />
      <Auth0ProviderWithNavigate
        domain="dev-rafcik.eu.auth0.com"
        clientId="k9ZnHuqIcUum0dkbcnnoHxXH5Ya3NjB0"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://dev-rafcik.eu.auth0.com/api/v2/",
          scope: "read:current_user update:current_user_metadata"
        }}
      >
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode >
);
