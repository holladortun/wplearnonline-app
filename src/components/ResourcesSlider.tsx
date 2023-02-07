import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import useFetchArticles from '../swr/useFetchArticles';
import ResourcesCard from './ResourcesCard';

function ResourcesSlider() {
	const { data } = useFetchArticles();
	console.log(data);
	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return <ResourcesCard {...item} />;
				}}
				keyExtractor={(item) => item.id}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}
export default ResourcesSlider;
