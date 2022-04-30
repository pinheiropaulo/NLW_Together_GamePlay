import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./app.routes";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={navTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
