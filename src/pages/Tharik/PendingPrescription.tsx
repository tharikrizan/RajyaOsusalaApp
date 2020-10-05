import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import React from "react";
import PrescriptionHeader from "../../components/Tharik/PrescriptionHeader";

const PendingPrescription: React.FC = () => {
  return (
    <IonPage>
      <PrescriptionHeader />
      <IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default PendingPrescription;
