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
import { menu, options, arrowBackOutline, trashBin } from "ionicons/icons";
import { menuController } from "@ionic/core";
import "../MR/Chatt.page.scss";
import { Link } from "react-router-dom";
import ChatForm from "./ChatForm";
import Message from "./Message";
import Sidebar from "../../pages/vishwa/Sidebar";
import { MessageInt, Messages } from "../../Database";

const Chatt: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState(Messages);
  const handleclick = () => {
    menuController.open();
  };

  useEffect(() => {
    setMessages(Messages);
  });



  const submitForm = (message:MessageInt) => {
    Messages.unshift({
        time: `${new Date().toLocaleString('default', { month: 'short' })}  ${(new Date()).getDate()}`,
        msgs: message.msgs,
    });
    setMessages([...Messages,{
      time: `${new Date().toLocaleString('default', { month: 'short' })}  ${(new Date()).getDate()}`,
      msgs: message.msgs,
  }]);

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
    <div className="chattt-page">
      <IonHeader className="ion-no-border">
        <IonItem lines="none">
          <IonAvatar slot="end">
            <img src="img/profile.jpg" />
          </IonAvatar>
          <Link
            to="/homenew"
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
              <h2>Chat</h2>
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
                >
                  <IonIcon icon={trashBin} />
                </IonButton>
              </IonCol>
            </IonRow>
          </div>
        </IonItem>
        <Sidebar />
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

        <Message  messages={messages}/>

        <ChatForm  submitForm={submitForm}/>
      </IonContent>
    </div>
  );
};

export default Chatt;
