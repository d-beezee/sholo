import { GoogleLogout } from "react-google-login";
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

const LogoutButton = () => {
  const history = useHistory();

  return (
    <GoogleLogout
      clientId={
        "382646625928-oqhsndfjtldionu5kgo6fhmj7bnml03r.apps.googleusercontent.com"
      }
      render={(renderProps) => (
        <IonButton
          className="google-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Google Logout
        </IonButton>
      )}
      onLogoutSuccess={() => {
        history.push("/login");
      }}
    />
  );
};
export default LogoutButton;
