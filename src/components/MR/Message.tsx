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
import React from 'react';
import './Message.css';

const Message: React.FC = () => {
    return (
        
        <div id="chat-message-list">
            <div className="message-row other-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey mate what's up?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey Daryl?
                    </div>
                    <div className="message-time">Apr 13</div>
                </div>
            </div>
        </div>
    );
  };

export default Message;
