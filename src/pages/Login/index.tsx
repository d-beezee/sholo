import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  return (
    <GoogleLogin
      clientId={
        "382646625928-oqhsndfjtldionu5kgo6fhmj7bnml03r.apps.googleusercontent.com"
      }
      render={(renderProps) => (
        <IonButton
          className="google-button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Google Signin
        </IonButton>
      )}
      onSuccess={(response) => {
        const responseIsValid = (
          res: typeof response
        ): res is GoogleLoginResponse => res.hasOwnProperty("profileObj");
        if (responseIsValid(response)) {
          history.push("/tab/home");
        }
      }}
      onFailure={(error) => {
        console.log(error);
      }}
      cookiePolicy="single_host_origin"
      scope={"profile"}
      isSignedIn={true}
    />
  );
};
export default Login;
