import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import categories from '../../categories';

function CategoriesSlider() {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{categories.map(category => (
				<TouchableOpacity activeOpacity={0.7} key={category.id}>
					<View className="px-2 py-2 mr-4 bg-white rounded-md">
						<Text className="font-[ManropeRegular] text-[12px]">
							{category.title}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

export default CategoriesSlider;
