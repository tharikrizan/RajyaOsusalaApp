import React, {useState} from 'react';
import { IonAvatar,IonModal,IonActionSheet, IonBadge,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options, trash, share, caretForwardCircle, heart, close, person, logIn, lockOpen  } from 'ionicons/icons';
import "../vishwa/Offers.page.scss";
import "../vishwa/modell.page.scss";
import { Link } from "react-router-dom";


const Offer: React.FC = () => {

    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showActionSheet, setShowActionSheet] = useState(false);
    const handleclick = () => {

        setShowToast(true);
        setTimeout(() => setShowToast(false), 1500);
    }

    const PURPLE_COLOR = "#B04CEF";

    const optioons = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
      }

    const categories = {
        slidesPerView: 2.5,
      }

    return (

        <div className="offer-page">
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
        <h2>Offers</h2>
      </IonLabel>

      <IonRow className="ion-align-items-center">
        <IonCol size="10">
          <IonSearchbar placeholder="Search for offers" searchIcon="location-outline"></IonSearchbar>
        </IonCol>
        <IonCol size="2">
          <IonButton color="light" fill="clear"  onClick={() => setShowModal(true)}>
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
            <IonButton color= "secondary" href="/limitedoffers">Limited Offers</IonButton>
          <br />
          <br />


          <IonButton color= "secondary" href="/productoffers">Product Offers</IonButton>

          </div>
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
            </IonModal>

<div className="ion-padding wrapper">



  <IonGrid className="ion-no-padding">
    <IonRow className="ion-align-items-baseline">
      <IonCol size="6">
        <h4 className="title">
          Popular Offers
        </h4>
      </IonCol>

    </IonRow>
  </IonGrid>

  </div>




  <IonGrid className="ion-no-padding">
    <IonRow>
      <IonCol size="12">
        <IonSlides options={optioons}>

          <IonSlide>
            <IonCard className="card">
              <IonCardContent className="ion-text-left">

                <div className="img-wrapper">
                  <IonImg src="img/offer.jpeg"></IonImg>
                </div>

                <IonCardTitle className="title">Awesome Offer</IonCardTitle>
                <IonCardSubtitle>Some description here</IonCardSubtitle>
                <IonCardSubtitle>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star-outline"></IonIcon>
                </IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
              <IonCardContent className="ion-text-left">

                <div className="img-wrapper">
                  <IonImg src="img/offer1.png"></IonImg>
                </div>

                <IonCardTitle className="title">Awesome offer 2</IonCardTitle>
                <IonCardSubtitle>Some description here</IonCardSubtitle>
                <IonCardSubtitle>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star"></IonIcon>
                  <IonIcon name="star-half"></IonIcon>
                </IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonSlide>


        </IonSlides>
      </IonCol>
    </IonRow>
  </IonGrid>


  <div className="ion-padding-horizontal wrapper">

    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-baseline">
        <IonCol size="6">
          <h4 className="title">
            Limited Offers
          </h4>
        </IonCol>
        <IonCol size="6">
        <h4 className="more ion-text-end">
          View All
        </h4>
      </IonCol>
      </IonRow>
    </IonGrid>

    </div>

    <IonGrid className="ion-no-padding">
      <IonRow>
        <IonCol size="12">
          <IonSlides options={categories}>

            <IonSlide>
              <IonCard className="category" color="danger" href="/category">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/man.svg"></IonIcon>
                  <IonCardTitle>Senior Discount</IonCardTitle>
                  <IonCardSubtitle>Something here</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="primary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/free.svg"></IonIcon>
                  <IonCardTitle>Buy 2 Get 1 Free</IonCardTitle>
                  <IonCardSubtitle>Ends 20th Sept</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="success">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/discount.svg"></IonIcon>
                  <IonCardTitle>20% discount</IonCardTitle>
                  <IonCardSubtitle>Ends 1st Oct</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="tertiary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/discount.svg"></IonIcon>
                  <IonCardTitle>30% discount</IonCardTitle>
                  <IonCardSubtitle>Ends 5th Oct</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>



          </IonSlides>
        </IonCol>
      </IonRow>
    </IonGrid>


    <div className="ion-padding-horizontal wrapper">

    <IonGrid className="ion-no-padding">
      <IonRow className="ion-align-items-baseline">
        <IonCol size="6">
          <h4 className="title">
            Product Offers
          </h4>
        </IonCol>
        <IonCol size="6">
        <h4 className="more ion-text-end">
          View All
        </h4>
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

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
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

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
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

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
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

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
                    </IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Product Discount</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                    <IonCardSubtitle>
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

export default Offer;