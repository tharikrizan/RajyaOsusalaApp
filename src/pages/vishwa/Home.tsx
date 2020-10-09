import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IonAvatar,
  IonBadge,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonSearchbar,
  IonSegment,
  IonSlide,
  IonSlides,
  IonToast,
} from "@ionic/react";
import { menu, options } from "ionicons/icons";
import "../vishwa/Home.page.scss";
import "../vishwa/Homee.page.scss";
import "../vishwa/Offers.page.scss";
import "../vishwa/Homecolor.page.scss";

const Maps = (props: any) => {
  const optioons = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  // check if the user has logged in
  useEffect(() => {
    if (!props.isLoggedIn) {
      props.history.push("/login");
    }
  }, [props.isLoggedIn]);

  return (
    <div className="home-color">
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
                <h2>Home</h2>
              </IonLabel>

              <IonRow className="ion-align-items-center">
                <IonCol size="10">
                  <IonSearchbar
                    placeholder="Search for service"
                    searchIcon="location-outline"
                  ></IonSearchbar>
                </IonCol>
                <IonCol size="2"></IonCol>
              </IonRow>
            </div>
          </IonItem>
        </IonHeader>
      </div>

      <IonContent fullscreen={true}>
        <div className="homee-page">
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol size="12">
                <IonSlides options={optioons}>
                  <IonSlide>
                    <IonCard className="card">
                      <IonCardContent className="ion-text-left">
                        <div className="img-wrapper">
                          <IonImg src="img/banner.jpg"></IonImg>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonSlide>

                  <IonSlide>
                    <IonCard className="card">
                      <IonCardContent className="ion-text-left">
                        <div className="img-wrapper">
                          <IonImg src="img/offer1.png"></IonImg>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonSlide>
                </IonSlides>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <div className="">
          <IonGrid className="">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Our Services</h4>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="home-page">
          <div className="ion-padding">
            <IonRow>
              <IonCard>
                <IonCardContent>
                  <div className="img-wrapper">
                    <IonImg src="img/pres.png"></IonImg>
                  </div>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Upload</IonCardTitle>
                      <IonCardSubtitle>Prescription</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

              <IonCard href="/maps">
                <IonCardContent>
                  <IonImg src="img/locationn.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Location</IonCardTitle>
                      <IonCardSubtitle>Service</IonCardSubtitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonRow>

            <IonRow>
              <IonCard href="/category">
                <IonCardContent>
                  <IonImg src="img/pro3.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Products</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

              <IonCard href="/offers">
                <IonCardContent>
                  <IonImg src="img/offerr.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Offers</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonRow>

            <IonRow>
              <IonCard href="/chat">
                <IonCardContent>
                  <IonImg src="img/chat.svg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Chat</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>

              <IonCard href="/editProfile">
                <IonCardContent>
                  <IonImg src="img/profile.jpg"></IonImg>

                  <IonRow>
                    <IonCol size="">
                      <IonCardTitle>Profile</IonCardTitle>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </div>
  );
};

export default Maps;
