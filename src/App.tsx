import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle, exit } from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import PendingPrescription from "./pages/Tharik/PendingPrescription";
import QuotedPrescription from "./pages/Tharik/QuotedPrescription";
import AddPrescription from "./pages/Tharik/AddPrescription";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Lakshan/Pages/LoginPage";
import RegisterPage from "./pages/Lakshan/Pages/RegisterPage";
import Logout from "./pages/Lakshan/Pages/Logout";
import ForgotPassword from "./pages/Lakshan/Pages/ForgotPassword";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInRoutes = (
    <>
      <IonRouterOutlet>
        <Route path="/" component={HomePage} exact={true} />
        <Route
          path="/prescriptions"
          component={PendingPrescription}
          exact={true}
        />
        <Route
          path="/prescriptions/quoted"
          component={QuotedPrescription}
          exact={true}
        />
        <Route
          path="/prescriptions/add"
          component={AddPrescription}
          exact={true}
        />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setLoggedInStatus={setIsLoggedIn} />
          )}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/">
          <IonIcon icon={triangle} />
          <IonLabel>Home Page</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/prescriptions">
          <IonIcon icon={ellipse} />
          <IonLabel>Prescriptions</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/products">
          <IonIcon icon={square} />
          <IonLabel> Products</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab4" href="/logout">
          <IonIcon icon={exit} />
          <IonLabel> Logout</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </>
  );

  const notLogged = (
    <>
      <Route
        path="/"
        render={(props) => (
          <LoginPage {...props} setLoggedInStatus={setIsLoggedIn} />
        )}
        exact={true}
      />
      <Route
        path="/register"
        render={(props) => (
          <RegisterPage {...props} setLoggedInStatus={setIsLoggedIn} />
        )}
        exact={true}
      />
      <Route
        path="/forgot"
        render={(props) => (
          <ForgotPassword {...props} setLoggedInStatus={setIsLoggedIn} />
        )}
        exact={true}
      />
    </>
  );

  return (
    <IonApp>
      <IonReactRouter>{isLoggedIn ? loggedInRoutes : notLogged}</IonReactRouter>
    </IonApp>
  );
};

export default App;
