import { IonButton, IonIcon } from '@ionic/react';
import { camera, triangle } from 'ionicons/icons';
import React from 'react';

import './ChatForm.css';

const ChatForm: React.FC = () => {
    return (
        <div id="chat-form">
            <input type="text" placeholder="type a message"/>
            <img src={triangle} className="img" alt="Send Message" />
        </div>
    );
  };

export default ChatForm;
