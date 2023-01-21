import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View, SafeAreaView } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { SWRConfig } from "swr";

export default function App() {
  const [fontsLoaded] = useFonts({
    ManropeRegular: require("./assets/fonts/Manrope-Regular.ttf"),
    ManropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
  });
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </SWRConfig>
  );
}
