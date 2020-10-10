import React, {useState} from 'react';
import { IonAvatar, IonBadge, IonLabel, IonModal, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options, trashBin, logOutOutline } from 'ionicons/icons';
import { menuController } from "@ionic/core";
import Sidebar from "../../../pages/vishwa/Sidebar";
import "../../Tharik/PrescriptionContent.page.scss";
import "../Profile/Profilenew.page.scss";


const Maps: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const handleclick = () => {
        menuController.open();
      };
    return (

    <div>
    <div className='pronew-page'>

<IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
    <IonButton fill="clear" color="light" href="/logout">
     <IonIcon icon={logOutOutline} />
    </IonButton>
    </IonAvatar>
    <IonButton fill="clear" color="light" onClick={() => handleclick()}>
     <IonIcon icon={menu} />
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Edit Profile</h2>
      </IonLabel>
    </div>
  </IonItem>
</IonHeader>
<Sidebar />
</div>

<div className="profile-pagenew">
<IonContent fullscreen={true}>
  <h1>Profile</h1>

  <form id="form">
    <input placeholder="Your Name" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />

    <input placeholder="Email" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
    <input type="password" placeholder="Password" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
            <input type="password" placeholder="Password" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
            <input type="password" placeholder="Password" style={{
              borderWidth: "1px",
              borderRadius: "20px",
              margin: "auto",
              width: "100%",
              fontSize: "25px",
              paddingLeft: "35px",
            }}></input>
            <br />
            <br />
    <IonButton expand="block" shape="round">Edit</IonButton>
    <IonButton expand="block" shape="round">Delete Profile</IonButton>
  </form>

  <p>By pressing 'Delete Profile' your profile <br />will be permanently deleted</p>
</IonContent>

</div>

    </div>

    );
}

export default Maps;