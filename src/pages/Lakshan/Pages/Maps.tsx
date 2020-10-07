import React, {useState} from 'react';
import { IonAvatar, IonBadge,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options } from 'ionicons/icons';
import "../Pages/Maps.page.scss";



const Maps: React.FC = () => {
    return ( <div className='map-page'>

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
        <h2>Maps</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="10">
          <IonSearchbar placeholder="Search for location" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">

        </IonCol>
      </IonRow>

    </div>
  </IonItem>
</IonHeader>

    </div> );
}

export default Maps;