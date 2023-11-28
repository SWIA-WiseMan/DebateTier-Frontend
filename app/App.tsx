import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "@screens/main/HomeScreen";
import IssueScreen from "@screens/main/IssueScreen";
import MypageScreen from "@screens/main/MypageScreen";
import CommunityScreen from "@screens/issue/CommunityScreen";

import HomeIcon from "@assets/images/Icon_Home.svg";
import IssueIcon from "@assets/images/Icon_Issue.svg";
import MypageIcon from "@assets/images/Icon_Mypage.svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: "#FFB800",
				tabBarInactiveTintColor: "#BDBDBD",
				headerShown: false,
				tabBarStyle: {
					height: 70,
					paddingBottom: 15,
					paddingTop: 10,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="Issue"
				component={IssueScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <IssueIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="Mypage"
				component={MypageScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <MypageIcon color={color} />,
				})}
			/>
		</Tab.Navigator>
	);
};

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Tabs" component={TabNavigator} />
				<Stack.Screen
					name="CommunityScreen"
					component={CommunityScreen}
					options={{
						headerShown: false, // 헤더 숨기기
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
