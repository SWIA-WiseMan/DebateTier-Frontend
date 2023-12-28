import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import HomeScreen from "@screens/main/HomeScreen";
import IssueScreen from "@screens/main/IssueScreen";
import CommunityScreen from "@screens/issue/CommunityScreen";

import HomeIcon from "@assets/images/navigation/Icon_Home.svg";
import IssueIcon from "@assets/images/navigation/Icon_Issue.svg";
import DebateIcon from "@assets/images/navigation/Icon_Debate.svg";
import DocumentIcon from "@assets/images/navigation/Icon_Document.svg";
import ScrapIcon from "@assets/images/navigation/Icon_Scrap.svg";
import DebateScreen from "./main/DebateScreen";
import DocumentScreen from "./main/DocumentScreen";
import ScrapScreen from "./main/ScrapScreen";

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
				name="홈"
				component={HomeScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <HomeIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="이슈"
				component={IssueScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <IssueIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="토론"
				component={DebateScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <DebateIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="자료"
				component={DocumentScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <DocumentIcon color={color} />,
				})}
			/>
			<Tab.Screen
				name="찜목록"
				component={ScrapScreen}
				options={() => ({
					tabBarIcon: ({ color }) => <ScrapIcon color={color} />,
				})}
			/>
		</Tab.Navigator>
	);
};

const NavigationManager: React.FC = () => {
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

export default NavigationManager;
