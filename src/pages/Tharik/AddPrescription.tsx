import React, { useState } from "react";
import { camera, trash, close } from "ionicons/icons";
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
import PrescriptionContent from "../../components/Tharik/PrescriptionContent";
import { usePhotoGallery } from "../../hooks/usePhotoGallery";
import { prescriptions } from "../../Database";
import { useHistory } from "react-router";
export interface AddPrescriptionProps {}

const AddPrescription: React.FC = (props) => {
  const { photos, takePhoto } = usePhotoGallery();
  const [time, setTime] = useState<string>("");
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [orderType, setOrderType] = useState<string>("Pick Up");
  const history = useHistory();
  const submitForm = () => {
    console.log(photos[0]);

    prescriptions.push({
      id: 12457 + prescriptions.length,
      orderType: orderType,
      time: time,
      cost: "Rs 5210.00",
      quoted: false,
      deliveryStatus: true,
      photo: photos[0],
      path: "s",
    });

    setSuccessAlert(true);
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
          subHeader={"Form Submission"}
          message={"Please Complete All details"}
          buttons={["OK"]}
        />
        <IonAlert
          isOpen={successAlert}
          onDidDismiss={() => setSuccessAlert(false)}
          cssClass="my-custom-class"
          header={`Rajya Osusala`}
          subHeader={"Form Submission"}
          message={"Successfully added"}
          buttons={[
            {
              text: "Okay",
              handler: () => {
                setTime("");
                setOrderType("");
                history.push("/prescriptions");
              },
            },
          ]}
        />
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  style={{ height: "300px", width: "100%" }}
                  src={photo.webviewPath}
                />
              </IonCol>
            ))}
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" className="ion-float-right">
              <IonFab>
                <IonFabButton onClick={() => takePhoto()}>
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

export default AddPrescription;
