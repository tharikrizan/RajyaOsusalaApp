import {
  IonAlert,
  IonBackButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState, useEffect } from "react";
import PrescriptionContent from "../../components/Tharik/PrescriptionContent";
import PrescriptionHeader from "../../components/Tharik/PrescriptionHeader";
import { Prescription, prescriptions } from "../../Database";

const PendingPrescription: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const [id, setId] = useState(1);

  const [pendingPrescription, setPendingPrescription] = useState<
    Prescription[]
  >(prescriptions.filter((x) => !x.quoted));
  const deletePrescription = (id: number) => {
    setId(id);
    setAlert(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-justify-content-start">
            <IonBackButton defaultHref="/" />
            <IonTitle>Pending Prescriptions</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => setAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Confirm Delete"}
          message={"Are you sure to delete ?"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                setPendingPrescription(
                  pendingPrescription.filter((x) => x.id !== id)
                );
              },
            },
            {
              text: "Cancel",
            },
          ]}
        />
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12">
              <PrescriptionHeader />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <PrescriptionContent
              pendingPrescriptionsProp={pendingPrescription}
              deletePrescription={deletePrescription}
            />
          </IonRow>
          <IonRow>
            <IonFab vertical="bottom" horizontal="center">
              <IonFabButton href="/prescriptions/add">
                <IonIcon icon={add}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PendingPrescription;
