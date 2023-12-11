import { useAuth0 } from "@auth0/auth0-react";
import React, {useState,useEffect} from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { SilaHasla } from "./pages/sila-hasla-page";
import { BeSafe } from "./pages/be-safe";
import { Panel } from "./pages/panel-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/panel"
        element={<AuthenticationGuard component={Panel} />}
      />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={Panel} />}
      />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/poradnik" element={<BeSafe />} />
      <Route
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
      <Route
        path="/admin"
        element={<AuthenticationGuard component={AdminPage} />}
      />
      
      <Route
        path="/callback"
        element={<AuthenticationGuard component={CallbackPage} />}
      />
      <Route path="/sila-hasla" element={<SilaHasla />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
