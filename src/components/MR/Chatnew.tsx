import React, {useState} from 'react';
import { IonAvatar, IonBadge, IonLabel, IonModal, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options, trashBin } from 'ionicons/icons';
import "../MR/Chatnew.page.scss";



const Maps: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    return ( <div className='pronew-page'>

<IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
      <img src="img/profile.jpg" />
    </IonAvatar>
    <IonButton fill="clear" color="light">
     <IonIcon icon={menu} />
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Chat</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="10">
          <IonSearchbar placeholder="Search for products" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">
          <IonButton color="light" fill="clear" onClick={() => setShowModal(true)}>
          <IonIcon icon={trashBin} />
          </IonButton>
        </IonCol>
      </IonRow>

    </div>
  </IonItem>
</IonHeader>




<IonContent fullscreen={true}>

<h1>Hello</h1>

</IonContent>

    </div> );
}

export default Maps;