import type { ConfigContext, ExpoConfig } from "@expo/config";
import { ClientEnv } from "./env";
import pkg from "./package.json";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: pkg.name,
  slug: "comic-pulse",
  version: pkg.version,
  owner: "inalegwurealcode",
  scheme: `com.${pkg.name.toLowerCase()}`,
  userInterfaceStyle: "light",
  newArchEnabled: true,
  orientation: "portrait",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
    imageWidth: 60,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: "com.comicpulse.app",
  },
  extra: {
    ...ClientEnv,
    eas: {
      projectId: "2edeb7cb-7c1f-4d74-b3ac-04a22c9a6c2f",
    },
  },
  plugins: ["expo-font", "expo-router"],
});
