import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Prescription, prescriptions } from "../../Database";
import { trashBin, pencil, car } from "ionicons/icons";

interface Props {
  quotedPrescriptionsProp: Prescription[];
  deletePrescription: (id: number) => void;
  delivery: (id: number) => void;
  color: String;
}
const QuotedPrescriptionContent: React.FC<Props> = ({
  quotedPrescriptionsProp,
  deletePrescription,
  delivery,
  color,
}) => {
  const [quotedPrescription, setQuotedPrescription] = useState<Prescription[]>(
    quotedPrescriptionsProp
  );
  useEffect(() => {
    setQuotedPrescription(quotedPrescriptionsProp);
  });

  return (
    <>
      <IonList>
        {quotedPrescription.map((pres, index) => {
          let realPath =
            pres.photo.webviewPath === undefined
              ? `assets/${pres.path}`
              : pres.photo.webviewPath;

          let DeliverButton = pres.deliveryStatus ? (
            <IonButton>
              <IonIcon
                style={{ size: "small", color: "green" }}
                icon={car}
              ></IonIcon>
            </IonButton>
          ) : (
            <IonButton
              onClick={() => {
                delivery(pres.id);
              }}
            >
              <IonIcon
                style={{ size: "small", color: color }}
                icon={car}
              ></IonIcon>
            </IonButton>
          );
          return (
            <IonItem key={index}>
              <IonAvatar slot="start">
                <IonImg src={realPath} />
              </IonAvatar>
              <IonRow>
                <IonCol>
                  <IonLabel>
                    <h2>#{pres.id}</h2>
                    <p>{pres.cost}</p>
                    <h3>{pres.time}</h3>
                  </IonLabel>
                </IonCol>
                <IonCol>
                  <IonButtons>
                    <IonButton
                      onClick={() => {
                        deletePrescription(pres.id);
                        console.log(quotedPrescriptionsProp);
                        setQuotedPrescription(quotedPrescriptionsProp);
                      }}
                    >
                      <IonIcon
                        style={{ size: "small", color: "red" }}
                        icon={trashBin}
                      ></IonIcon>
                    </IonButton>
                    {DeliverButton}
                  </IonButtons>
                </IonCol>
              </IonRow>
            </IonItem>
          );
        })}
      </IonList>
    </>
  );
};

export default QuotedPrescriptionContent;
