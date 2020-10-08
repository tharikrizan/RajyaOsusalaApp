import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonGrid,
  IonIcon,
  IonLabel,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

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
import HomePage from "./pages/HomePage";
import CHAT from "./components/MR/Chat";
import EditProfile from "./components/MR/Profile/EditProfile";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/chat" component={CHAT} exact={true} />
        <Route path="/editProfile" component={EditProfile} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
