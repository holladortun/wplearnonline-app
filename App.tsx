/* eslint-disable import/no-absolute-path */
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { SWRConfig } from 'swr';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [fontsLoaded] = useFonts({
		// eslint-disable-next-line global-require
		ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
		// eslint-disable-next-line global-require
		ManropeBold: require('./assets/fonts/Manrope-Bold.ttf'),
		// eslint-disable-next-line global-require
		ManropeMedium: require('./assets/fonts/Manrope-Medium.ttf'),
		// eslint-disable-next-line global-require
		ManropeLight: require('./assets/fonts/Manrope-Light.ttf'),
	});
	return (
		<SWRConfig value={{ provider: () => new Map() }}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<SafeAreaProvider>
					<NavigationContainer>
						<BottomSheetModalProvider>
							<MainNavigation />
						</BottomSheetModalProvider>
					</NavigationContainer>
				</SafeAreaProvider>
			</GestureHandlerRootView>
		</SWRConfig>
	);
}
