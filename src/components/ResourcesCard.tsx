/* eslint-disable global-require */
import { View, Text, Image, Dimensions } from 'react-native';

interface RCProps {
	id: 'string';
	title: 'string';
	Image: 'string';
}

const { width } = Dimensions.get('window');
const ITEM_LENGTH = width * 0.8;

function ResourcesCard({ ...item }: RCProps) {
	return (
		<View style={{ width: ITEM_LENGTH }} className="mr-4 h-[250px] relative">
			<View className="absolute z-10 w-full h-full rounded-md bg-black/50" />
			<Image
				source={{ uri: item.Image }}
				className="object-cover w-full  h-[250px] rounded-md"
			/>
			<View className="absolute bottom-0 z-20 px-4 pb-4">
				<Text className="font-[ManropeBold]  text-white ">{item.title}</Text>
			</View>
		</View>
	);
}

export default ResourcesCard;
