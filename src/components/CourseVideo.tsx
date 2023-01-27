import { ResizeMode } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { Dimensions } from 'react-native';
import { useRef, useState } from 'react';
import { setStatusBarHidden } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';

function CourseVideo() {
	const [inFullscreen2, setInFullsreen2] = useState(false);

	const refVideo2 = useRef(null);

	const { width } = Dimensions.get('window');
	const ITEM_LENGTH = width * 0.9;

	return (
		<VideoPlayer
			videoProps={{
				shouldPlay: false,
				resizeMode: ResizeMode.CONTAIN,

				source: {
					uri: 'https://wplearnonline.com/wp-content/uploads/2022/10/How%20to%20Install%20Xammp.mp4',
				},
				ref: refVideo2,
			}}
			fullscreen={{
				inFullscreen: inFullscreen2,
				enterFullscreen: async () => {
					setStatusBarHidden(true, 'fade');
					setInFullsreen2(!inFullscreen2);
					await ScreenOrientation.lockAsync(
						ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
					);
					refVideo2.current.setStatusAsync({
						shouldPlay: true,
					});
				},
				exitFullscreen: async () => {
					setStatusBarHidden(false, 'fade');
					setInFullsreen2(!inFullscreen2);
					await ScreenOrientation.lockAsync(
						ScreenOrientation.OrientationLock.DEFAULT
					);
				},
			}}
			style={{
				height: inFullscreen2 ? Dimensions.get('window').width : 200,
				width: inFullscreen2 ? Dimensions.get('window').height : ITEM_LENGTH,
			}}
		/>
	);
}

export default CourseVideo;
