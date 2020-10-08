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
import { trashBin } from "ionicons/icons";
import React, { useState } from "react";
import PrescriptionContent from "../../components/Tharik/PrescriptionContent";
import PrescriptionHeader from "../../components/Tharik/PrescriptionHeader";
import QuotedPrescriptionContent from "../../components/Tharik/QuotedPrescriptionContent";
import { Prescription, prescriptions } from "../../Database";

const QuotedPrescription: React.FC = () => {
  const [alert, setAlert] = useState(false);
  const [alertAD, setAlertAD] = useState(false);
  const [alertD, setDAlert] = useState(false);
  const [id, setId] = useState(1);
  const [color, setColor] = useState("red");
  const [idD, setDId] = useState(1);
  const [quotedPrescription, setQuotedPrescription] = useState<Prescription[]>(
    prescriptions.filter((x) => x.quoted)
  );
  const deletePrescription = (id: number) => {
    console.log("id", id);
    setId(id);
    setAlert(true);
  };
  const delivery = (id: number) => {
    console.log("id", id);
    setDId(id);
    setDAlert(true);
  };
  const deleteAllPrescription = () => {
    setAlertAD(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-justify-content-start">
            <IonBackButton defaultHref="/" />
            <IonTitle>Quoted Prescriptions</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => setAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Confirm Clear"}
          message={"Are you sure to clear prescription ?"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                setQuotedPrescription(
                  quotedPrescription.filter((x) => x.id !== id)
                );
              },
            },
            {
              text: "Cancel",
            },
          ]}
        />
        <IonAlert
          isOpen={alertD}
          onDidDismiss={() => setDAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Confirm Delivery"}
          message={"Do you want to deliver?"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                setColor("green");
                setQuotedPrescription(
                  quotedPrescription.map((x) => {
                    if (x.id === idD) {
                      x.deliveryStatus = true;
                    }
                    return x;
                  })
                );
              },
            },
            {
              text: "Cancel",
            },
          ]}
        />
        <IonAlert
          isOpen={alertAD}
          onDidDismiss={() => setAlertAD(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Form Submission"}
          message={"Are you sure to Clear All"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                let filteredPrescriptions = quotedPrescription.filter(
                  (x) => x.id === 58
                );
                setQuotedPrescription(filteredPrescriptions);
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
            <QuotedPrescriptionContent
              quotedPrescriptionsProp={quotedPrescription}
              deletePrescription={deletePrescription}
              delivery={delivery}
              color={color}
            />
          </IonRow>
          <IonRow>
            <IonFab vertical="bottom" horizontal="center">
              <IonFabButton
                onClick={() => {
                  deleteAllPrescription();
                }}
              >
                <IonIcon
                  style={{ size: "large", color: "red" }}
                  icon={trashBin}
                ></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default QuotedPrescription;
