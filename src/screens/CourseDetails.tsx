/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Dimensions,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';

import useFetchCourses from '../swr/useFetchCourses';
import { Course } from '../models/coursesModel';
import CourseInfo from '../components/CourseInfo';
import singleCourseState from '../atoms/singleCoursesAtoms';
import CourseVideo from '../components/CourseVideo';

function CourseDetails({ route }) {
	const navigation = useNavigation();
	const [singleCourse, setSingleCourse] = useRecoilState(singleCourseState);
	const { height } = Dimensions.get('window');
	const ITEM_HEIGHT = height * 1;

	/* 	const [index, setIndex] = useState(0); */
	const { id } = route.params;

	const { data } = useFetchCourses();

	useLayoutEffect(() => {
		setSingleCourse(
			data.find(
				// eslint-disable-next-line prettier/prettier, eqeqeq
				(course: Course) => course.id == id
			)
		);
	}, []);

	return (
		<SafeAreaView>
			<View className="flex flex-row items-center justify-between px-5 mt-5">
				<View>
					<TouchableOpacity
						onPress={() => {
							navigation.goBack();
						}}
						activeOpacity={0.8}
					>
						<View className="bg-[#bf00b9] rounded-md py-1">
							<EvilIcons name="chevron-left" size={34} color="white" />
						</View>
					</TouchableOpacity>
				</View>

				<View>
					<Text className="font-[ManropeBold] text-[20px]">Course Details</Text>
				</View>

				<View className="bg-[#bf00b9] rounded-md py-2 px-2">
					<SimpleLineIcons name="share" size={16} color="white" />
				</View>
			</View>

			<View className="relative flex " style={{ height: ITEM_HEIGHT }}>
				<View className="px-5 pt-4 h-[85%]">
					<CourseVideo />
					<Text className="font-[ManropeBold] mt-4 text-[20px]">
						{singleCourse.title}
					</Text>
					<CourseInfo />
				</View>

				<View className="flex flex-row items-center justify-center px-5 py-3 bg-white shadow-xl ]">
					<TouchableOpacity
						activeOpacity={0.6}
						className="bg-[#BF00B9] rounded-md flex justify-center items-center py-3 min-w-[90%] px-20"
					>
						<Text className="text-white font-[ManropeBold] text-[18px]">
							Enroll Now
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default CourseDetails;
