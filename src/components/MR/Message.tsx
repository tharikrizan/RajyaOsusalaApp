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
    IonList,
  } from "@ionic/react";
import React, {useState, useEffect} from 'react';
import './Message.css';
import { Messages } from "../../Database";

const Message: React.FC = () => {
    const [messages, setMessages] = useState(Messages);

    useEffect(() => {
        setMessages(Messages)
    });

    console.log(messages);
    return (
        <div id="chat-message-list">
            { messages.map( (M,index) =>
            <div className="message-row you-message" key={index}>
                <div className="message-content">
                    <div className="message-text">
                        {M.msgs}
                    </div>
                    <div className="message-time">
                        {M.time}
                    </div>
                </div>
            </div>
            )}
        </div>

    );
  };

export default Message;
