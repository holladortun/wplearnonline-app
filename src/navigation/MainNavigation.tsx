import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Quizzes from "../screens/Quizzes";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="user" size={20} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Quizzes"
        component={Quizzes}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="user" size={20} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
