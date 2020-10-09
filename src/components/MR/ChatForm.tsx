import { IonButton, IonIcon } from '@ionic/react';
import { camera, triangle } from 'ionicons/icons';
import React, { useState } from 'react';
import { Messages } from "../../Database";
import './ChatForm.css';
export interface ChatForm {}

const ChatForm: React.FC = (props) => {
    const [msgs, setMsgs] = useState<string>("");
    const submitForm = () => {
        Messages.push({
            time: String(Date.now()),
            msgs: msgs,
        });
        console.log(Messages);
      };
    return (
        <div id="chat-form">
            <input type="text"
             placeholder="type a message"
             value={msgs}
             onChange={(e) => setMsgs(e.target.value)}/>
            <img src={triangle} className="img" alt="Send Message" onClick={submitForm} />
        </div>
    );
  };

export default ChatForm;
