import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import CoursesSlider from "../components/CoursesSlider";

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="h-full px-4 py-4 bg-[#F4F5F9]">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <View>
              <Image
                source={require("../../assets/userimage.jpg")}
                className="object-contain w-12 h-12 rounded-md "
              />
            </View>
            <View className="flex justify-center">
              <Text
                className=" font-[ManropeBold] text-xl
              "
              >
                Hi, Dotun
              </Text>
              <Text className="text-black/60 font-[ManropeRegular]">
                Let's start learning!
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9}>
            <View className="bg-[#BF00B9] flex items-center justify-center rounded-md p-1">
              <Ionicons name="notifications-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex gap-2 mt-4">
          <Text className="font-[ManropeBold] text-2xl">
            What do you want to learn?
          </Text>
          <View className="flex flex-row items-center gap-2 pb-2 bg-white rounded-md shadow-md">
            <EvilIcons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search now.."
              className="font-[ManropeRegular] w-[80%]"
            />
          </View>
        </View>
        <View className="mt-8">
          <Text className="font-[ManropeRegular] text-[18px] mb-4 tracking-widest">
            Courses
          </Text>
          <CoursesSlider />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
