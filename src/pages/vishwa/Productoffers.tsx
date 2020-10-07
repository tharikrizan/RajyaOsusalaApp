import React, {useState} from 'react';
import { IonAvatar, IonBadge,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options } from 'ionicons/icons';
import "../vishwa/Offers.page.scss";



const Productoffers: React.FC = () => {

    const [showToast, setShowToast] = useState(false);
    const handleclick = () => {

        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    }

    const optioons = {

        slidesPerView: 1,
        spaceBetween: -60,
      }

    const categories = {
        slidesPerView: 2,
      }

    return (

        <div className="offer-page">
 <IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
      <img src="img/profile.jpg" />
    </IonAvatar>
    <IonButton fill="clear" color="light" href="/offers">
     <IonIcon icon={menu} />
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Offers</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="10">
          <IonSearchbar placeholder="Search for category" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">
          <IonButton color="light" fill="clear">
          <IonIcon icon={options} />
          </IonButton>
        </IonCol>
      </IonRow>

    </div>
  </IonItem>
</IonHeader>

        <IonContent fullscreen={true}>


  <div className="ion-padding-horizontal wrapper">

    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-baseline">
        <IonCol size="6">
          <h4 className="title">
            Product Offers
          </h4>
        </IonCol>
        <IonCol size="6">
      </IonCol>
      </IonRow>
    </IonGrid>

    </div>

    <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Some Awesome Title</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Some Awesome Title</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Some Awesome Title</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                      <IonIcon name="star"></IonIcon>
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>



  </IonContent>

  </div>

     );
}

export default Productoffers;