import {
  IonButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonNav,
  IonPage,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import React from "react";
import Chat from "../components/MR/Chat";
export interface HomePage {}

const HomePage: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
           <IonButton href='/chat'> Chat </IonButton>
           <IonButton href='/editProfile'> Edit </IonButton>
        </IonHeader>
    </IonPage>
  );
};

export default HomePage;
