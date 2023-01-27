/* eslint-disable global-require */
import { View, Text, Image } from 'react-native';
import useFetchCourses from '../swr/useFetchCourses';

function CourseCard() {
	return (
		<View className="flex flex-row px-4 py-4 bg-white rounded-md">
			<View>
				<Image
					source={require('../../assets/images/wordpressimage.jpg')}
					className="w-[100px] h-[100px] rounded-md"
					resizeMode="cover"
				/>
			</View>
			<View></View>
		</View>
	);
}

export default CourseCard;
