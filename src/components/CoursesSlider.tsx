/* eslint-disable global-require */
import {
	View,
	Text,
	FlatList,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { useMemo, useRef, useState } from 'react';
import {
	BottomSheetModal,
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import useFetchCourses from '../swr/useFetchCourses';
import { Course } from '../models/coursesModel';
import CoursePreview from './CoursePreview';

const { width } = Dimensions.get('window');
const ITEM_LENGTH = width * 0.8;

function CoursesSlider() {
	const { data } = useFetchCourses();
	const [clickedCourse, setClickedCourse] = useState<Course>({});
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	// variables
	const snapPoints = useMemo(() => ['50%', '75%'], []);
	const renderBackdrop = (props: BottomSheetBackdropProps) => (
		<BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
	);

	// callbacks
	const handlePresentModalPress = (item: Course) => {
		bottomSheetModalRef.current?.present();
		setClickedCourse(item);
	};

	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return (
						<>
							<TouchableOpacity
								activeOpacity={0.9}
								onPress={() => handlePresentModalPress(item)}
							>
								<View style={{ width: ITEM_LENGTH }} className="mr-4 ">
									<View>
										<Image
											source={require('../../assets/images/wordpressimage.jpg')}
											className="object-cover w-full  h-[200px] rounded-t-md"
										/>
									</View>
									<View className="h-[150px] px-5 py-5 bg-white rounded-b-md flex justify-between">
										<View>
											<Text className="font-[ManropeRegular] text-[#BF00B9]">
												{item.category}
											</Text>
											<Text className="font-[ManropeBold] mt-2 text-[18px]">
												{item.title}
											</Text>
										</View>

										<View className="flex flex-row items-center justify-between">
											<Text className="font-[ManropeRegular] text-black/40">
												{item.lessons} Lessons
											</Text>
											<Text className="font-[ManropeRegular]">
												By: {item.author}
											</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
							<BottomSheetModal
								ref={bottomSheetModalRef}
								index={0}
								snapPoints={snapPoints}
								backdropComponent={renderBackdrop}
							>
								<CoursePreview {...clickedCourse} />
							</BottomSheetModal>
						</>
					);
				}}
				horizontal
				keyExtractor={item => item.id}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}

export default CoursesSlider;
