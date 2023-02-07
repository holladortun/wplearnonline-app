/* eslint-disable global-require */
import { View, Text, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

function CourseCard() {
	return (
		<View className="flex flex-row gap-2 px-2 pt-2 pb-4 mt-2 bg-white rounded-md w-[100%] mx-auto">
			<View className="w-[30%]">
				<Image
					source={require('../../assets/images/wordpressimage.jpg')}
					className="w-[100%] h-[90px] rounded-md"
					resizeMode="cover"
				/>
			</View>
			<View className="w-[60%] flex ">
				<Text className="text-[#bf00b9] font-[ManropeRegular]">Web Design</Text>
				<Text className="font-[ManropeMedium] text-[17px] mt-2 ">
					Wordpress for Beginners
				</Text>
				<View className="flex ">
					<Text className="font-[ManropeMedium] text-black/40 mt-2">
						By: WP Learnonline
					</Text>
				</View>
			</View>
		</View>
	);
}

export default CourseCard;
