import { useEffect, useState } from "react";
import { GoogleLoginResponse, useGoogleLogin } from "react-google-login";

const useGoogleProfile = () => {
  const [profile, setProfile] = useState<any>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { loaded } = useGoogleLogin({
    clientId:
      "382646625928-oqhsndfjtldionu5kgo6fhmj7bnml03r.apps.googleusercontent.com",
    isSignedIn: true,
    onSuccess: (response) => {
      const responseIsValid = (
        res: typeof response
      ): res is GoogleLoginResponse => res.hasOwnProperty("profileObj");
      console.log(response);
      if (responseIsValid(response)) {
        setProfile(response.profileObj);
      }
    },
  });
  useEffect(() => {
    if (loaded) {
      setIsLoaded(true);
    }
  }, [loaded]);

  return { profile, loggedIn: !!profile, loaded: isLoaded };
};
export default useGoogleProfile;
