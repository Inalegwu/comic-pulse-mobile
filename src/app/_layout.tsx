import qClient from "@/api/config";
import { StatusBar } from "@components";
import { ThemeProvider } from "@shopify/restyle";
import { QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@theme";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Geist: require("../assets/fonts/geist.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={qClient}>
        <StatusBar backgroundColor="black" style="light" />
        <Slot />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
