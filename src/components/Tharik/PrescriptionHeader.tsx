import React from "react";

import {
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";

const PrescriptionHeader: React.FC = () => {
  return (
    <IonHeader>
      <IonTabBar slot="top">
        <IonTabButton tab="tab1" href="/prescriptions">
          <IonLabel>Pending</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/prescriptions/quoted">
          <IonLabel>Quoted</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonHeader>
  );
};

export default PrescriptionHeader;
