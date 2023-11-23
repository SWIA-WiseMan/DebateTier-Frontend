import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@screens/main/HomeScreen";
import IssueScreen from "@screens/main/IssueScreen";
import MypageScreen from "@screens/main/MypageScreen";

export type RootStackParamList = {
	Home: undefined;
	Issue: undefined;
	Mypage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Issue" component={IssueScreen} />
				<Stack.Screen name="Mypage" component={MypageScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
