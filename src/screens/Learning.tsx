import { Ionicons, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	useWindowDimensions,
	Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Content from '../components/Content';
import Ongoing from '../components/Ongoing';
import Overview from '../components/Overview';
import QA from '../components/QA';

const { width } = Dimensions.get('window');
const ITEM_LENGTH = width * 0.42;

function FirstRoute() {
	return <Ongoing />;
}

function SecondRoute() {
	return (
		<View>
			<Text>Hello</Text>
		</View>
	);
}
function ThirdRoute() {
	return (
		<View>
			<Text>Hello</Text>
		</View>
	);
}

const renderScene = ({ route }) => {
	switch (route.key) {
		case 'first':
			return <FirstRoute />;
		case 'second':
			return <SecondRoute />;
		case 'third':
			return <ThirdRoute />;
		default:
			return null;
	}
};
const renderTabBar = (props) => (
	<TabBar
		{...props}
		renderLabel={({ route, focused }) =>
			focused ? (
				<Text
					style={{
						color: 'white',
						backgroundColor: '#bf00b9',
						fontFamily: 'ManropeMedium',
						paddingVertical: 10,
						borderRadius: 6,
						fontSize: 15,
						width: ITEM_LENGTH,
						textAlign: 'center',
					}}
				>
					{route.title}
				</Text>
			) : (
				<Text
					style={{
						color: 'black',
						backgroundColor: '#DBDBDB',
						fontFamily: 'ManropeMedium',
						paddingVertical: 10,
						textAlign: 'center',
						borderRadius: 6,
						fontSize: 15,
						width: ITEM_LENGTH,
					}}
				>
					{route.title}
				</Text>
			)
		}
		indicatorStyle={{ backgroundColor: 'transparent' }}
		style={{
			backgroundColor: 'transparent',
			shadowColor: 'transparent',
			marginBottom: 10,
			paddingBottom: 0,
		}}
		pressColor="transparent"
		/* tabStyle={{ width: 'auto' }} */
	/>
);
function Learning() {
	const navigation = useNavigation();
	const layout = useWindowDimensions();
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: 'Ongoing' },
		{ key: 'second', title: 'Bookmarks' },
	]);
	return (
		<SafeAreaView>
			<View className="flex h-full bg-[#F4F1F9]">
				<View className="flex flex-row items-center justify-between px-5 mt-5">
					<View>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Homescreen');
							}}
							activeOpacity={0.8}
						>
							<View className="bg-[#bf00b9] rounded-md py-1">
								<EvilIcons name="chevron-left" size={34} color="white" />
							</View>
						</TouchableOpacity>
					</View>

					<View>
						<Text className="font-[ManropeBold] text-[20px]">My Learning</Text>
					</View>

					<View className="bg-[#bf00b9] rounded-md py-2 px-2">
						<SimpleLineIcons name="share" size={16} color="white" />
					</View>
				</View>
				<View style={{ flex: 1, marginTop: 19 }}>
					<TabView
						renderTabBar={renderTabBar}
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						initialLayout={{ width: layout.width }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Learning;
