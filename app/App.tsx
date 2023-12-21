import React, { useState, useEffect } from "react";
import SplashScreen from "@screens/auth/SplashScreen";
import LoginScreen from "@screens/auth/LoginScreen";
import NavigationManager from "@screens/NativationManager";

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 4000);
	}, []);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		checkLoginStatus();
	// 	}, 2000);
	// }, []);

	const loginChangeToTrue = () => {
		setIsLoggedIn(true);
	};
	// const checkLoginStatus = async () => {
	// 	try {
	// 		console.log(isLoggedIn);
	// 		setIsLoggedIn(isLoggedIn === "true");
	// 		setIsLoading(false);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setIsLoading(false);
	// 	}
	// };

	if (isLoading) {
		return <SplashScreen />;
	} else if (isLoggedIn) {
		return <NavigationManager />;
	} else {
		return <LoginScreen onLogin={loginChangeToTrue} />;
	}
};

export default App;
