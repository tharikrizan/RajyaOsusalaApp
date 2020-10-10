import React, {useState} from 'react';
import { IonAvatar, IonModal, IonBadge,IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonRow, IonSearchbar, IonSegment, IonSlide, IonSlides, IonToast } from '@ionic/react';
import { menu, options } from 'ionicons/icons';
import { menuController } from "@ionic/core";
import "../vishwa/Category.page.scss";
import Sidebar from "../vishwa/Sidebar";
import { Link } from "react-router-dom";


const Category: React.FC = () => {

    const [showToast, setShowToast] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleclick = () => {
        menuController.open();
      };

    const optioons = {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: -60,
      }

    const categories = {
        slidesPerView: 2.5,
      }

    return (

        <div className='category-page'>
 <IonHeader className="ion-no-border">
  <IonItem lines="none">
    <IonAvatar slot="end">
      <img src="img/profile.jpg" />
    </IonAvatar>
    <IonButton fill="clear" color="light" onClick={() => handleclick()}>
     <IonIcon icon={menu}/>
    </IonButton>
  </IonItem>
  <IonItem lines="none">
    <div className="ion-padding-start ion-padding-bottom">
      <IonLabel>
        <h2>Categories</h2>
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

<Sidebar />

        <IonContent fullscreen={true}>

        <IonModal isOpen={showModal} cssClass="my-modal">
          <div
            style={{
              top: "1px",
              color: "white",

              backgroundColor: "#316dd0",
              width: "100%",
            }}
          >
            <h2
              style={{
                marginLeft: "20px",
              }}
            >
              Filter Categories By
            </h2>
          </div>

          <div
            style={{
              marginTop: "1px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
              <Link to="/allcat">
            <IonButton color="secondary">
              All product categories
            </IonButton>
            </Link>
            <br />
            <br />

            <IonButton color="secondary" href="/productoffers">
              Essentials
            </IonButton>
          </div>
          <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
        </IonModal>

<div className="ion-padding wrapper">



  <IonGrid className="ion-no-padding">
    <IonRow className="ion-align-items-baseline">
      <IonCol size="6">
        <h4 className="title">
          Popular Categories
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
                  <IonImg src="img/ayurvedaimg.jpg"></IonImg>
                </div>

                <IonCardTitle className="title">Ayurveda</IonCardTitle>
                <IonCardSubtitle>Popular Category</IonCardSubtitle>
                <IonCardSubtitle>
                </IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
              <IonCardContent className="ion-text-left">

                <div className="img-wrapper">
                  <IonImg src="img/healthfood.jpg"></IonImg>
                </div>

                <IonCardTitle className="title">Health Food</IonCardTitle>
                <IonCardSubtitle>Popular Category</IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          </IonSlide>

          <IonSlide>
            <IonCard className="card">
              <IonCardContent className="ion-text-left">

                <div className="img-wrapper">
                  <IonImg src="img/dairy.jpg"></IonImg>
                </div>

                <IonCardTitle className="title">Dairy Products</IonCardTitle>
                <IonCardSubtitle>Popular Category</IonCardSubtitle>
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
            Explore Categories
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
              <IonCard className="category" color="danger" href="/products">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/ayurvedic.svg"></IonIcon>
                  <IonCardTitle>Ayurvedic</IonCardTitle>
                  <IonCardSubtitle>Category</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="primary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/skin-care.svg"></IonIcon>
                  <IonCardTitle>Skin</IonCardTitle>
                  <IonCardSubtitle>Care</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="category" color="success">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/supplement.svg"></IonIcon>
                  <IonCardTitle>Vitamins</IonCardTitle>
                  <IonCardSubtitle>Supplements</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>


            <IonSlide>
              <IonCard className="category" color="warning">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/diabetes.svg"></IonIcon>
                  <IonCardTitle>Diabetes</IonCardTitle>
                  <IonCardSubtitle>Care</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonSlide>


            <IonSlide>
              <IonCard className="category" color="tertiary">
                <IonCardHeader className="ion-text-center">
                  <IonIcon src="img/food.svg"></IonIcon>
                  <IonCardTitle>Food</IonCardTitle>
                  <IonCardSubtitle>Drinks</IonCardSubtitle>
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
            Other Essentials
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

                    <IonCardTitle className="title">Category 1</IonCardTitle>
                    <IonCardSubtitle>Some description here</IonCardSubtitle>
                  </IonCardContent>
                </IonCard>
              </IonSlide>

              <IonSlide>
                <IonCard className="card">
                  <IonCardContent className="ion-text-left">

                    <div className="img-wrapper">
                      <IonImg src="https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                    </div>

                    <IonCardTitle className="title">Category 2</IonCardTitle>
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

                    <IonCardTitle className="title">Category 3</IonCardTitle>
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

export default Category;