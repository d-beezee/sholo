import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";
import { heart } from "ionicons/icons";
import useGoogleProfile from "../../../hooks/useGoogleProfile";
import useHandleMessages from "../../../features/handleMessages";
import { publish } from "../../../slices/connection";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

const Tab1: React.FC = () => {
  const { profile, loaded } = useGoogleProfile();
  const dispatch = useAppDispatch();
  const { message } = useAppSelector((state) => state.connection);
  useHandleMessages();
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
            <IonButton
              onClick={() => {
                dispatch(publish("ciao"));
              }}
            >
              Love
            </IonButton>
            <p>{message}</p>
          </div>
        ) : (
          <>loading</>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
