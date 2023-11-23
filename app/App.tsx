import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/main/HomeScreen";
import IssueScreen from "@screens/main/IssueScreen";
import MypageScreen from "@screens/main/MypageScreen";

import HomeIcon from "@assets/images/Icon_Home.svg";
import IssueIcon from "@assets/images/Icon_Issue.svg";
import MypageIcon from "@assets/images/Icon_Mypage.svg";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={{
					tabBarActiveTintColor: "#FFB800",
					tabBarInactiveTintColor: "#BDBDBD",
					headerShown: false,
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
		</NavigationContainer>
	);
};

export default App;
