/* eslint-disable @typescript-eslint/ban-types */
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();
type LiteralUnion<T extends U, U = string> = T | (U & {});

const useStorage = (
	key: LiteralUnion<'user' | 'password'>,
	defaultValue?: string | boolean
) => {
	const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
	return [value, setValue];
};

export default useStorage;
