/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Tab, TabView } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import useFetchCourses from '../swr/useFetchCourses';
import { Course } from '../models/coursesModel';

function CourseDetails({ route }) {
	const navigation = useNavigation();
	const [index, setIndex] = useState(0);
	const { id } = route.params;

	const { data } = useFetchCourses();

	const singleCourse: Course = data.find(
		// eslint-disable-next-line prettier/prettier, eqeqeq
		(course: Course) => course.id == id
	);

	return (
		<SafeAreaView>
			<View className="h-full pt-4 bg-[#F4F5F9] ">
				<View className="flex flex-row items-center justify-between px-5">
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
						<Text className="font-[ManropeBold] text-[20px]">
							Course Details
						</Text>
					</View>

					<View className="bg-[#bf00b9] rounded-md py-2 px-2">
						<SimpleLineIcons name="share" size={16} color="white" />
					</View>
				</View>

				<View className="px-5">
					<Image
						// eslint-disable-next-line import/extensions
						source={require('../../assets/images/ecommerceimage.jpg')}
						className="w-full h-[30vh] mt-6 rounded-md "
					/>
					<Text className="font-[ManropeBold] mt-4 text-[20px]">
						{singleCourse.title}
					</Text>
				</View>
				<>
					<Tab
						value={index}
						onChange={(e) => setIndex(e)}
						indicatorStyle={{
							backgroundColor: '#bf00b9',
							height: 3,
						}}
						variant="default"
						style={{ marginHorizontal: 20, marginTop: 10 }}
					>
						<Tab.Item
							title="Overview"
							titleStyle={{
								fontSize: 16,
								fontFamily: 'ManropeRegular',
								color: 'black',
								paddingVertical: 0,
								paddingHorizontal: 0,
							}}
						/>
						<Tab.Item
							title="Content"
							titleStyle={{
								fontSize: 16,
								fontFamily: 'ManropeRegular',
								color: 'black',
								paddingVertical: 0,
								paddingHorizontal: 0,
							}}
						/>
						<Tab.Item
							title="Q & A"
							titleStyle={{
								fontSize: 16,
								fontFamily: 'ManropeRegular',
								color: 'black',
								paddingVertical: 0,
								paddingHorizontal: 0,
							}}
						/>
					</Tab>

					<TabView value={index} onChange={setIndex} animationType="spring">
						<TabView.Item className=" w-[100%] px-5 py-4 ">
							<ScrollView>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
								<Text>{singleCourse.overview}</Text>
							</ScrollView>
						</TabView.Item>
						<TabView.Item>
							<Text>Favorite</Text>
						</TabView.Item>
						<TabView.Item>
							<Text>Cart</Text>
						</TabView.Item>
					</TabView>
				</>
				<View>
					<Text>Enroll</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default CourseDetails;
