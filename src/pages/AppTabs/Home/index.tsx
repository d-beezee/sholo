import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { heart } from "ionicons/icons";
import useGoogleProfile from "../../../hooks/useGoogleProfile";

const Tab1: React.FC = () => {
  const { profile, loaded } = useGoogleProfile();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loaded ? (
          <div className="container">
            <strong>Hello {profile.name}!</strong>
            <p>
              Share some <IonIcon icon={heart} />
            </p>
          </div>
        ) : (
          <>loading</>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
