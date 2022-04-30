import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

import { AuthRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer theme={navTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
