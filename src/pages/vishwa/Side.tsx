import React, {useState} from 'react';
import { IonAvatar, IonBadge, IonLabel, IonModal, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast, IonApp, IonMenu } from '@ionic/react';
import { menu, options } from 'ionicons/icons';
import "../vishwa/Productsnew.page.scss";



const Maps: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    return (

        <IonApp>
            <IonMenu menuId="main-menu" contentId="main">
                <IonContent>
                    <h1>Main</h1>
                </IonContent>
            </IonMenu>
        </IonApp>
     );
}

export default Maps;