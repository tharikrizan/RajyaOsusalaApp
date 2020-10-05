import React from "react";

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from "@ionic/react";

const PrescriptionHeader: React.FC = () => {
  return (
    <IonToolbar slot="top">
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" />
        <IonButton href="/prescriptions">
          <IonLabel>Pending</IonLabel>
        </IonButton>
        <IonButton href="/prescriptions/quoted">
          <IonLabel>Quoted</IonLabel>
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default PrescriptionHeader;
