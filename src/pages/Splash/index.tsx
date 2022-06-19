import { useHistory } from "react-router-dom";
import useGoogleProfile from "../../hooks/useGoogleProfile";
import heart from "./heart.gif";
import styled from "styled-components";

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #84c6ff;
`;
const Splash = () => {
  const history = useHistory();
  const { loggedIn, loaded } = useGoogleProfile();

  if (loaded) {
    if (loggedIn) {
      history.push("/tab/home");
    } else {
      history.push("/login");
    }
  }
  return (
    <SplashContainer>
      <img src={heart} alt="Splash screen" />
    </SplashContainer>
  );
};
export default Splash;
