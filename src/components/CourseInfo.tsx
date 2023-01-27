import { useState } from 'react';
import { Text, useWindowDimensions, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Content from './Content';

import Overview from './Overview';
import QA from './QA';

function FirstRoute() {
	return <Overview />;
}

function SecondRoute() {
	return <Content />;
}

function ThirdRoute() {
	return <QA />;
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
		renderLabel={({ route }) => (
			<Text
				style={{
					color: 'black',

					fontFamily: 'ManropeMedium',
					paddingVertical: 0,
				}}
			>
				{route.title}
			</Text>
		)}
		indicatorStyle={{ backgroundColor: '#BF00B9' }}
		style={{
			backgroundColor: 'transparent',
			shadowOpacity: 0,
			marginBottom: 10,
			paddingBottom: 0,
		}}
	/>
);

function CourseInfo() {
	const layout = useWindowDimensions();
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: 'Overview' },
		{ key: 'second', title: 'Content' },
		{ key: 'third', title: 'Q & A' },
	]);

	const { height } = Dimensions.get('window');

	return (
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
			//	style={{ height: ITEM_HEIGHT }}
		/>
	);
}

export default CourseInfo;
