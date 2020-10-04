import React from "react";

import {
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";

const PrescriptionHeader: React.FC = () => {
  return (
    <IonHeader>
      <IonTabBar slot="top">
        <IonTabButton tab="tab1" href="/Prescription/Pending">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/Prescription/Quoted">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonHeader>
  );
};

export default PrescriptionHeader;
