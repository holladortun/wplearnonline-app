/* eslint-disable import/no-absolute-path */
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { Provider as PaperProvider } from 'react-native-paper';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
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

	useEffect(() => {
		if (Platform.OS === 'android') {
			if (UIManager.setLayoutAnimationEnabledExperimental) {
				UIManager.setLayoutAnimationEnabledExperimental(true);
			}
		}
	}, []);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<RecoilRoot>
				<SWRConfig value={{ provider: () => new Map() }}>
					<SafeAreaProvider>
						<NavigationContainer>
							<BottomSheetModalProvider>
								<PaperProvider>
									<MainNavigation />
								</PaperProvider>
							</BottomSheetModalProvider>
						</NavigationContainer>
					</SafeAreaProvider>
				</SWRConfig>
			</RecoilRoot>
		</GestureHandlerRootView>
	);
}
