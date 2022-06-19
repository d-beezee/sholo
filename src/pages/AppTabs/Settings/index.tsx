import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import LogoutButton from "./LogoutButton";
import { heart } from "ionicons/icons";
import QRCode from "react-qr-code";
import useGoogleProfile from "../../../hooks/useGoogleProfile";

const Tab3: React.FC = () => {
  const { profile, loggedIn } = useGoogleProfile();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loggedIn ? (
          <div>
            Fai connettere il tuo <IonIcon icon={heart} />
            <QRCode value={"shololist" + profile.googleId} size={200} />
          </div>
        ) : null}
        <LogoutButton />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
