import {
    IonBackButton,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonNav,
    IonPage,
    IonRow,
    IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import { Icon } from "ionicons/dist/types/components/icon/icon";
import { ellipse, square, triangle } from "ionicons/icons";
import React from "react";
import ChatTitle from "./ChatTitle";
import './Chat.css';
import Message from "./Message";
import ChatForm from "./ChatForm";
  export interface Chat {}

  const Chat: React.FC = () => {
    return (
      <IonPage>
          <IonGrid id='chat-container'>
                <ChatTitle/>
                <Message/>
                <ChatForm/>
          </IonGrid>
      </IonPage>
    );
  };

export default Chat;
