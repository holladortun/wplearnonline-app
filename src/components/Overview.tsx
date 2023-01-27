import { View, Text, ScrollView, Image } from 'react-native';
import { useRecoilValue } from 'recoil';
import singleCourseState from '../atoms/singleCoursesAtoms';

function Overview() {
	const singleCourse = useRecoilValue(singleCourseState);
	return (
		<ScrollView>
			<Text className="font-[ManropeRegular]">{singleCourse.overview}</Text>

			<Text className="font-[ManropeBold] text-xl mt-8">Author</Text>
			<View className="flex flex-row gap-2 mt-1">
				<Image
					// eslint-disable-next-line global-require
					source={require('../../assets/userimage.jpg')}
					className="w-[70px] h-[70px] object-fill rounded-md"
					resizeMode="contain"
				/>
				<Text className="font-[ManropeRegular]">{singleCourse.author}</Text>
			</View>
		</ScrollView>
	);
}

export default Overview;
