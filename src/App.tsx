import { Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AppTabs from "./pages/AppTabs";
import Splash from "./pages/Splash";

import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { changeChannel } from "./slices/connection";
setupIonicReact();
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeChannel("general/"));
  });
  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/tab*">
          <AppTabs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
