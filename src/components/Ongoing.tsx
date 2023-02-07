import { ScrollView, Text } from 'react-native';
import CourseCard from './CourseCard';

function Ongoing() {
	return (
		<ScrollView className="px-5" showsVerticalScrollIndicator={false}>
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
			<CourseCard />
		</ScrollView>
	);
}

export default Ongoing;
