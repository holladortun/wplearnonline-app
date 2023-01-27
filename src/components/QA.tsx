import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function QA() {
	return (
		<View className="relative h-full ">
			<View className="absolute right-0 bottom-[5%] z-10 ">
				<TouchableOpacity className="bg-[#bf00b9] flex flex-row items-center gap-3 justify-center pr-8 pl-4 pb-2 rounded-md">
					<Ionicons
						name="md-chatbox-ellipses-outline"
						size={24}
						color="white"
					/>
					<Text className="text-white font-[ManropeRegular]">Ask</Text>
				</TouchableOpacity>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
				<Text className="font-[ManropeRegular] text-[14px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed plane
					dicit quod intellegit. Non semper, inquam; Quodsi ipsam honestatem
					undique pertectam atque absolutam. Beatus sibi videtur esse moriens.
				</Text>
			</ScrollView>
		</View>
	);
}

export default QA;
