import React, { useEffect, useState } from "react";
import {
  IonAvatar,
  IonModal,
  IonFooter,
  IonBadge,
  IonLabel,
  IonToolbar,
  IonTitle,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSlide,
  IonSlides,
  IonToast,
} from "@ionic/react";
import { menu, options, arrowBackOutline } from "ionicons/icons";
import "../MR/Chatt.page.scss";
import { Link } from "react-router-dom";
import ChatForm from "./ChatForm";
import Message from "./Message";

const Chatt: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleclick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  const optioons = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  const categories = {
    slidesPerView: 2,
  };

  return (
    <div className="offer-page">
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" />
          </IonAvatar>
          <Link
            to="/offers"
            style={{
              textDecoration: "none",
            }}
          >
            <IonButton fill="clear" color="light">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </Link>
        </IonItem>
        <IonItem lines="none">
          <div className="ion-padding-start ion-padding-bottom">
            <IonLabel>
              <h2>Offers</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Search for category"
                  searchIcon="location-outline"
                ></IonSearchbar>
              </IonCol>
              <IonCol size="2">
                <IonButton
                  color="light"
                  fill="clear"
                  onClick={() => setShowModal(true)}
                >
                  <IonIcon icon={options} />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonItem>
      </IonHeader>

      <IonContent fullscreen={true}>

        <div className="ion-padding-horizontal wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Chat</h4>
              </IonCol>
              <IonCol size="6"></IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <Message />

        <ChatForm />




      </IonContent>
    </div>
  );
};

export default Chatt;
