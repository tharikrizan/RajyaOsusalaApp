import React, { useState, useEffect } from "react";
import { camera } from "ionicons/icons";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonBackButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItemDivider,
  IonButton,
  IonAlert,
} from "@ionic/react";

import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { Photo, Prescription, prescriptions } from "../../Database";
import { useParams } from "react-router";

export interface IUserPublicProfileRouteParams {
  id: string;
}
const EditPrescription: React.FC = () => {
  const { id } = useParams<IUserPublicProfileRouteParams>();
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const { photos, takePhoto } = usePhotoGallery();
  const [time, setTime] = useState<string>(
    prescriptions.filter((x) => x.id === +id)[0].time
  );
  const [photo, setPhoto] = useState<Photo>(
    prescriptions.filter((x) => x.id === +id)[0].photo
  );
  const [orderType, setOrderType] = useState<string>(
    prescriptions.filter((x) => x.id === +id)[0].orderType
  );

  const [prescription, setPrescription] = useState<Prescription>(
    prescriptions.filter((x) => x.id === +id)[0]
  );

  useEffect(() => {
    setPrescription(prescriptions.filter((x) => x.id === +id)[0]);
  }, [prescription]);
  useEffect(() => {
    setPrescription({
      ...prescription,
      photo: photo,
      time: time,
      orderType: orderType,
    });
  }, [photo, time, orderType]);

  const tookPhoto = () => {
    setPhoto(photos[0]);
  };
  const submitForm = () => {
    setSuccessAlert(true);
  };
  console.log("prescription", prescription);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow className="ion-justify-content-start">
            <IonBackButton defaultHref="/" />
            <IonTitle>Edit Prescription</IonTitle>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonAlert
          isOpen={successAlert}
          onDidDismiss={() => setSuccessAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Form Submission"}
          message={"Edited Successfuly"}
          buttons={["OK"]}
        />
        <IonAlert
          isOpen={alert}
          onDidDismiss={() => setAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Form Submission"}
          message={"Edit not success"}
          buttons={["OK"]}
        />

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6">
              <IonImg
                style={{ height: "300px", width: "100%" }}
                src={
                  prescription.photo !== undefined
                    ? prescription.photo.hasOwnProperty("webviewPath")
                      ? prescription.photo.webviewPath
                      : `assets/${prescription.path}`
                    : ""
                }
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-float-right">
              <IonFab>
                <IonFabButton
                  onClick={() => {
                    takePhoto();

                    tookPhoto();
                  }}
                >
                  <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
              </IonFab>
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonItem>
              <IonLabel>Prescription For</IonLabel>
              <IonSelect
                value={time}
                placeholder="Select One"
                onIonChange={(e) => setTime(e.detail.value)}
              >
                <IonSelectOption value="Per Week">Per Week</IonSelectOption>
                <IonSelectOption value="Per Month">Per Month</IonSelectOption>
                <IonSelectOption value="As Prescribed">
                  As Prescribed
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonItem>
              <IonLabel>Order Type</IonLabel>
              <IonSelect
                value={orderType}
                okText="Okay"
                cancelText="Dismiss"
                onIonChange={(e) => setOrderType(e.detail.value)}
              >
                <IonSelectOption value="Delivery">Delivery</IonSelectOption>
                <IonSelectOption value="Pick UP">Pick Up</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonRow>
          <IonItemDivider>Your Selections</IonItemDivider>
          <IonRow className="ion-justify-content-center">
            <IonItem>Time: {time ?? "(none selected)"}</IonItem>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonItem>Order Type: {orderType}</IonItem>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonItem>
              <IonButton
                color="success"
                onClick={() => {
                  if (time == "" || orderType == "" || photos.length == 0) {
                    setAlert(true);
                  } else {
                    submitForm();
                  }
                }}
              >
                Save
              </IonButton>
            </IonItem>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EditPrescription;
