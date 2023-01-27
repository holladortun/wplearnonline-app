/* eslint-disable react/destructuring-assignment */
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import CourseDetails from '../screens/CourseDetails';

import Home from '../screens/Home';

function HomeStackNavigation(params) {
	useLayoutEffect(() => {
		// OR (1.b) Hide the tabBar on the screens, which satisfy a certain condition
		const routeName = getFocusedRouteNameFromRoute(params.route);
		if (routeName === 'CourseDetails') {
			// the screen, which you want to hide the tabBar on
			params.navigation.setOptions({ tabBarStyle: { display: 'none' } });
		} else {
			params.navigation.setOptions({
				tabBarStyle: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
			});
		}
	}, [params.navigation, params.route]);
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
				animationTypeForReplace: 'pop',
				gestureEnabled: true,
			}}
		>
			<Stack.Screen name="Homescreen" component={Home} />
			<Stack.Screen name="CourseDetails" component={CourseDetails} />
		</Stack.Navigator>
	);
}

export default HomeStackNavigation;
