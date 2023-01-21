/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Quizzes from '../screens/Quizzes';
import Articles from '../screens/Articles';

const Tab = createBottomTabNavigator();

function MainNavigation() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#bf00b9',
				tabBarInactiveTintColor: 'gray',
				tabBarLabelStyle: {
					fontSize: 10,
					fontFamily: 'ManropeRegular',
					marginTop: -10,
				},
				tabBarStyle: { height: 60, paddingBottom: 9 },
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<SimpleLineIcons name="home" size={20} color="#bf00b9" />
						) : (
							<SimpleLineIcons name="home" size={20} color="gray" />
						),
				}}
			/>

			<Tab.Screen
				name="Quizzes"
				component={Quizzes}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<SimpleLineIcons name="question" size={20} color="#bf00b9" />
						) : (
							<SimpleLineIcons name="question" size={20} color="grey" />
						),
				}}
			/>
			<Tab.Screen
				name="Articles"
				component={Articles}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Feather name="book" size={20} color="#bf00b9" />
						) : (
							<Feather name="book" size={20} color="gray" />
						),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<SimpleLineIcons name="user" size={20} color="#bf00b9" />
						) : (
							<SimpleLineIcons name="user" size={20} color="gray" />
						),
				}}
			/>
		</Tab.Navigator>
	);
}

export default MainNavigation;
