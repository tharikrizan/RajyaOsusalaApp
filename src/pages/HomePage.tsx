import {
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import React from "react";
export interface HomePage {}

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTabs>
          <IonTabBar slot="top">
            <IonTabButton tab="tab1" href="/">
              <IonIcon icon={triangle} />
              <IonLabel>Home Page</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/prescriptions">
              <IonIcon icon={ellipse} />
              <IonLabel>Prescriptions</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/products">
              <IonIcon icon={square} />
              <IonLabel> Products</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonHeader>
    </IonPage>
  );
};

export default HomePage;
