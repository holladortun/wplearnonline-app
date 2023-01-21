import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => {
	const res = await axios.get(url);
	return res.data;
};
const useFetchCourses = () => {
	const { data, error, mutate } = useSWR(
		`http://192.168.106.227:19001/courses`,
		fetcher,
	);
	return { data, error, mutate };
};

export default useFetchCourses;
