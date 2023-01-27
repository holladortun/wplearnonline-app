/* eslint-disable global-require */
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Course } from '../models/coursesModel';

interface CoursePreviewProps {
	handleNavigateToDetails: (id: string | undefined) => void;
	clickedCourse: Course;
}

function CoursePreview({
	handleNavigateToDetails,
	clickedCourse,
}: CoursePreviewProps) {
	return (
		<View className="px-5 py-4">
			<View className="flex flex-row justify-between">
				<View className="flex flex-row gap-4 w-[70%] items-center">
					<View>
						<Image
							source={{ uri: clickedCourse.featuredImage }}
							className="w-[70px] h-[70px] rounded-md object-contain"
						/>
					</View>
					<View>
						<Text className="font-[ManropeBold] text-[18px]">
							{clickedCourse.title}
						</Text>
					</View>
				</View>
				<View className="w-[30%] flex flex-row justify-end">
					<Feather name="bookmark" size={24} color="black" />
				</View>
			</View>
			<View className="mt-6">
				<Text className="font-[ManropeMedium] text-[20px]">Overview</Text>
				<Text className="font-[ManropeRegular] text-[16px] mt-2">
					{clickedCourse.overview?.substring(0, 200)}...
				</Text>
				<View className="flex flex-row gap-2 mt-2">
					<Text className="font-[ManropeRegular] px-2 bg-[#F4F1F9] py-2 rounded-md text-[#BF00B9]">
						{clickedCourse.level}
					</Text>
					<Text className="font-[ManropeRegular] px-2 bg-[#F4F1F9] py-2 rounded-md text-[#BF00B9]">
						{clickedCourse.category}
					</Text>
				</View>
			</View>
			<View className="mt-12">
				<TouchableOpacity
					onPress={() => {
						handleNavigateToDetails(clickedCourse.id);
					}}
					activeOpacity={0.6}
					className="bg-[#BF00B9] rounded-md flex justify-center items-center py-3"
				>
					<Text className="text-white font-[ManropeBold] text-[18px]">
						View Course
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default CoursePreview;
