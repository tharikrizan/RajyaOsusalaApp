import React, {useState} from 'react';
import { IonAvatar, IonModal, IonBadge,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options, arrowBackOutline } from 'ionicons/icons';
import "../vishwa/Offers.page.scss";
import { Link } from "react-router-dom"



const Productoffers: React.FC = () => {

    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
    <Link to="/offers"  style={{
            textDecoration: "none",
          }} >
    <IonButton fill="clear" color="light">
     <IonIcon icon={arrowBackOutline} />
    </IonButton>
    </Link>
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
          <IonButton color="light" fill="clear" onClick={() => setShowModal(true)}>
          <IonIcon icon={options} />
          </IonButton>
        </IonCol>
      </IonRow>

    </div>
  </IonItem>
</IonHeader>

        <IonContent fullscreen={true}>


        <IonModal isOpen={showModal} cssClass='my-modal'>


<div style={{

    top: "1px",
    color: "white",

    backgroundColor: "#316dd0",
    width: "100%",

  }}><h2 style={{
      marginLeft: "20px"
  }}>Filter Offers  By</h2></div>

<div style={{
    marginTop: "1px",
    textAlign: "center",
    fontSize: "20px",
  }}>

    <IonButton color= "secondary" href="/prodise">Discount</IonButton>

  <br />
  <br />


  <IonButton color= "secondary">Discount End date</IonButton>
  <br />
  <br />


  <IonButton color= "secondary" href="/offers">Reset All</IonButton>


  </div>
      <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
    </IonModal>


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
                        <IonImg src="img/ayuu.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Ayurveda 20% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 10th Oct</IonCardSubtitle>
                      <IonCardSubtitle>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>

      <br />
      <br />

      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>


            <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/ayu2.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Ayurveda 50% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 20th Oct</IonCardSubtitle>
                      <IonCardSubtitle></IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>

      <br />
      <br />

      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>

            <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/fruit.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Fruits 20% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 25th Oct</IonCardSubtitle>
                      <IonCardSubtitle>
                      </IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>



            </IonSlides>
          </IonCol>
        </IonRow>
      </IonGrid>

      <br />
      <br />

      <IonGrid class="ion-no-padding">
        <IonRow>
          <IonCol size="12">
            <IonSlides options={optioons}>

            <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="img/health.jpg"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Health Drink 40% Discount
                      </IonCardTitle>
                      <IonCardSubtitle>Ends 30th Oct</IonCardSubtitle>
                      <IonCardSubtitle></IonCardSubtitle>
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