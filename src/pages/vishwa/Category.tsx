import React, { useState, useEffect } from "react";
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
import "../vishwa/Category.page.scss";

const Category: React.FC = (props: any) => {
  useEffect(() => {
    console.log("Category");
    return () => {};
  }, [props]);

  const [showToast, setShowToast] = useState(false);
  const handleclick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  const optioons = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  const categories = {
    slidesPerView: 2.5,
  };

  return (
    <div className="category-page">
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
              <h2>Categories</h2>
            </IonLabel>

            <IonRow className="ion-align-items-center">
              <IonCol size="10">
                <IonSearchbar
                  placeholder="Search for category"
                  searchIcon="location-outline"
                ></IonSearchbar>
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
        <div className="ion-padding wrapper">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-baseline">
              <IonCol size="6">
                <h4 className="title">Popular Categories</h4>
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
                        <IonImg src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Popular Category
                      </IonCardTitle>
                      <IonCardSubtitle>Some description here</IonCardSubtitle>
                      <IonCardSubtitle></IonCardSubtitle>
                    </IonCardContent>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="card">
                    <IonCardContent className="ion-text-left">
                      <div className="img-wrapper">
                        <IonImg src="https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></IonImg>
                      </div>

                      <IonCardTitle className="title">
                        Popular Category
                      </IonCardTitle>
                      <IonCardSubtitle>Some description here</IonCardSubtitle>
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
                <h4 className="title">Explore Categories</h4>
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
                      <IonIcon src="img/dish.svg"></IonIcon>
                      <IonCardTitle>Category 1</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="primary">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/cocktail.svg"></IonIcon>
                      <IonCardTitle>Category 2</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="warning">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/burger.svg"></IonIcon>
                      <IonCardTitle>Category 3</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="success">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/burger.svg"></IonIcon>
                      <IonCardTitle>Category 4</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonSlide>

                <IonSlide>
                  <IonCard className="category" color="tertiary">
                    <IonCardHeader className="ion-text-center">
                      <IonIcon src="img/burger.svg"></IonIcon>
                      <IonCardTitle>Category 5</IonCardTitle>
                      <IonCardSubtitle>Something here</IonCardSubtitle>
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
                <h4 className="title">Trending Categories</h4>
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
                      <IonCardSubtitle></IonCardSubtitle>
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
};

export default Category;
