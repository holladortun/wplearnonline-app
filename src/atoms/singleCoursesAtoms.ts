import { atom } from 'recoil';
import { Course } from '../models/coursesModel';

const singleCourseState = atom({
	key: 'singleCourseState',
	default: {} as Course,
});

export default singleCourseState;
