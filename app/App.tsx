import NavigationManager from "@screens/NativationManager";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";

import ToronTierIcon_1 from "@assets/images/splash/Icon_Torontier_1.svg";
import ToronTierIcon_2 from "@assets/images/splash/Icon_Torontier_2.svg";

const App: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isFirstIconVisible, setIsFirstIconVisible] = useState(true);
	const [isSecondIconVisible, setIsSecondIconVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFirstIconVisible(false);
			setIsSecondIconVisible(true);
		}, 2000);

		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	if (isLoading) {
		return (
			<View style={styles.container}>
				{isFirstIconVisible && <ToronTierIcon_1 />}
				{isSecondIconVisible && <ToronTierIcon_2 />}
			</View>
		);
	}

	return <NavigationManager />;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFB800",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default App;
