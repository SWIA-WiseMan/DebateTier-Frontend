import React, { useState, useEffect } from "react";
import SplashScreen from "@screens/auth/SplashScreen";
import LoginScreen from "@screens/auth/LoginScreen";
import NavigationManager from "@screens/NativationManager";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppRegistry } from "react-native";

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	AppRegistry.registerComponent("torontier", () => App);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			setLoggedInToFalse;
		}, 4000);
	}, []);
	useEffect(() => {
		setTimeout(() => {
			checkLoginStatus();
		}, 2000);
	}, []);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setIsLoggedIn(true);
	// 	}, 20000);
	// }, []);

	const setLoggedInToFalse = async () => {
		try {
			await AsyncStorage.setItem("isLoggedIn", "false");
		} catch (e) {
			console.log(e);
		}
	};

	const checkLoginStatus = async () => {
		try {
			const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
			console.log(isLoggedIn);
			setIsLoggedIn(isLoggedIn === "true");
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <SplashScreen />;
	} else if (isLoggedIn) {
		return <NavigationManager />;
	} else {
		return <LoginScreen />;
	}
};

export default App;
