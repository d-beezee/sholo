import { Route } from "react-router-dom";
import { images, square, triangle } from "ionicons/icons";

import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import Home from "./Home";
import Tab2 from "../Tab2";
import Settings from "./Settings";

const tabs = [
  {
    component: Home,
    name: "home",
    path: "/tab/home",
    label: "Home",
    icon: triangle,
  },
  {
    component: Tab2,
    name: "photos",
    path: "/tab/photos",
    label: "Photos",
    icon: images,
  },
  {
    component: Settings,
    name: "Settings",
    path: "/tab/settings",
    label: "Settings",
    icon: square,
  },
];

const AppTabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        {tabs.map((tab) => (
          <Route key={tab.path} path={tab.path} component={tab.component} />
        ))}
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((tab) => (
          <IonTabButton key={tab.path} tab={tab.name} href={tab.path}>
            <IonIcon icon={tab.icon} />
            <IonLabel>{tab.label}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};
export default AppTabs;
