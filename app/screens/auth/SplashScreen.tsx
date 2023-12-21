// SplashScreen.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ToronTierIcon_1 from "@assets/images/splash/Icon_Torontier_1.svg";
import ToronTierIcon_2 from "@assets/images/splash/Icon_Torontier_2.svg";

const SplashScreen = () => {
	const [isFirstIconVisible, setIsFirstIconVisible] = useState(true);
	const [isSecondIconVisible, setIsSecondIconVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFirstIconVisible(false);
			setIsSecondIconVisible(true);
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			{isFirstIconVisible && <ToronTierIcon_1 />}
			{isSecondIconVisible && <ToronTierIcon_2 />}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFB800",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default SplashScreen;
