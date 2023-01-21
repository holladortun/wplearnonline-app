import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useFetchCourses } from "../swr/useFetchCourses";
import { Course } from "../models/coursesModel";
import axios from "axios";
import CourseCard from "./CourseCard";

const { width } = Dimensions.get("window");
const ITEM_LENGTH = width * 0.8;

const CoursesSlider = () => {
  const { data, error } = useFetchCourses();

  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.9}>
              <View style={{ width: ITEM_LENGTH }} className="mr-4 ">
                <View>
                  <Image
                    source={require("../../assets/images/wordpressimage.jpg")}
                    className="object-cover w-full  h-[200px] rounded-t-md"
                  />
                </View>
                <View className="h-[150px] px-5 py-5 bg-white rounded-b-md flex justify-between">
                  <View>
                    <Text className="font-[ManropeRegular] text-[#BF00B9]">
                      {item.category}
                    </Text>
                    <Text className="font-[ManropeBold] mt-2 text-[18px]">
                      {item.title}
                    </Text>
                  </View>

                  <View className="flex flex-row items-center justify-between">
                    <Text className="font-[ManropeRegular] text-black/40">
                      {item.lessons} Lessons
                    </Text>
                    <Text className="font-[ManropeRegular]">By: {item.author}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CoursesSlider;
