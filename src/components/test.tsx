// test.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TestComponent = () => {
	return (
		<View style={styles.container}>
			<Text>This is a Test Component!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default TestComponent;
