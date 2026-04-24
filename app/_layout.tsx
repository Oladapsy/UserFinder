import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// removed tanstack and the wrap app with provider and pass store to it from the configured store:
import { Provider } from "react-redux";
import { store } from "@/api/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Axiforma-Black": require("@/assets/fonts/Axiforma/Axiforma-Black.ttf"),
    "Axiforma-Bold": require("@/assets/fonts/Axiforma/Axiforma-Bold.ttf"),
    "Axiforma-ExtraBold": require("@/assets/fonts/Axiforma/Axiforma-ExtraBold.ttf"),
    "Axiforma-Light": require("@/assets/fonts/Axiforma/Axiforma-Light.ttf"),
    "Axiforma-Medium": require("@/assets/fonts/Axiforma/Axiforma-Medium.ttf"),
    "Axiforma-Regular": require("@/assets/fonts/Axiforma/Axiforma-Regular.ttf"),
    "Axiforma-SemiBold": require("@/assets/fonts/Axiforma/Axiforma-SemiBold.ttf"),
    "Axiforma-Thin": require("@/assets/fonts/Axiforma/Axiforma-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="user/[id]/index" options={{ headerShown: false }} />
      </Stack>
      </Provider>
  );
}
