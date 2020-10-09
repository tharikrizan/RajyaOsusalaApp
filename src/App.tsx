import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
import { ellipse, square, triangle } from "ionicons/icons";
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

import EditPrescription from "./pages/Tharik/EditPrescription";

import Products from "./pages/vishwa/Products";
import Productsnew from "./pages/vishwa/Productsnew";
import Category from "./pages/vishwa/Category";
import Offers from "./pages/vishwa/Offers";
import Limitedoffers from "./pages/vishwa/Limitedoffers";
import Productoffers from "./pages/vishwa/Productoffers";
import Home from "./pages/vishwa/Home";
import Maps from "./pages/Lakshan/Pages/Maps";
import LoginPage from "./pages/Lakshan/Pages/LoginPage";
import RegisterPage from "./pages/Lakshan/Pages/RegisterPage";
import Logout from "./pages/Lakshan/Pages/Logout";
import ForgotPassword from "./pages/Lakshan/Pages/ForgotPassword";
import Chat from "./components/MR/Chat";
import EditProfile from "./components/MR/Profile/EditProfile";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const setLoggedInStatus = (value: boolean) => {
    setIsLoggedIn(value);
    console.log("New Value: ", value);
  };
  const guestRoutes = (
    <>
      <Switch>
        <Route
          path="/"
          render={(props) => <Home {...props} isLoggedIn={isLoggedIn} />}
          exact={true}
        />
        <Route
          path="/offers"
          render={(props) => <Offers {...props} isLoggedIn={isLoggedIn} />}
          exact={true}
        />
        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setLoggedInStatus={setLoggedInStatus} />
          )}
          exact={true}
        />
        <Route
          path="/prescriptions"
          component={PendingPrescription}
          exact={true}
        />
        <Route path="/products" component={Products} exact={true} />
        <Route path="/pro" component={Productsnew} exact={true} />
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

        <Route path="/category" component={Category} exact={true} />
        <Route path="/limitedoffers" component={Limitedoffers} exact={true} />
        <Route path="/productoffers" component={Productoffers} exact={true} />
        <Route path="/maps" component={Maps} exact={true} />
        <Route
          path="/register"
          render={(props) => (
            <RegisterPage {...props} setLoggedInStatus={setLoggedInStatus} />
          )}
          exact={true}
        />
        <Route
          path="/forgot"
          render={(props) => (
            <ForgotPassword {...props} setLoggedInStatus={setLoggedInStatus} />
          )}
          exact={true}
        />
        <Route
          path="/login"
          exact={true}
          render={(props) => (
            <LoginPage {...props} setLoggedInStatus={setLoggedInStatus} />
          )}
        />
        <Route
          path="/prescriptions/edit/:id"
          component={EditPrescription}
          exact={true}
        />

        //added chat and profile paths
        <Route
          path="/chat"
          component={Chat}
          exact={true}
        />
        <Route
          path="/editProfile"
          component={EditProfile}
          exact={true}
        />

      </Switch>
    </>
  );

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>{guestRoutes}</IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
