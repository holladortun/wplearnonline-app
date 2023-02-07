import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => {
	const res = await axios.get(url);
	return res.data;
};
const useFetchArticles = () => {
	const { data, error, mutate } = useSWR(
		`http://192.168.130.227:19001/articles`,
		fetcher
	);
	return { data, error, mutate };
};

export default useFetchArticles;
