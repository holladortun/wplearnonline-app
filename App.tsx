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
	});
	return (
		<SWRConfig value={{ provider: () => new Map() }}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<SafeAreaProvider>
					<BottomSheetModalProvider>
						<NavigationContainer>
							<MainNavigation />
						</NavigationContainer>
					</BottomSheetModalProvider>
				</SafeAreaProvider>
			</GestureHandlerRootView>
		</SWRConfig>
	);
}
