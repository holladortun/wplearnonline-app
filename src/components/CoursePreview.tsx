import { View, Text } from 'react-native';

import { Course } from '../models/coursesModel';

function CoursePreview({ ...clickedCourse }: Course) {
	return (
		<View>
			<Text>{clickedCourse.title}</Text>
		</View>
	);
}

export default CoursePreview;
