/* eslint-disable */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Test = () => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Icon name="home" size={30} color="black" style={styles.icon}></Icon>
				<Icon
					name="comments-o"
					size={30}
					color="black"
					style={styles.icon}
				></Icon>
				<Icon
					name="exclamation-circle"
					size={30}
					color="black"
					style={styles.icon}
				></Icon>
				<Icon name="user" size={30} color="black" style={styles.icon}></Icon>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#CCCCCC",
	},
	iconContainer: {
		flexDirection: "row", // 아이콘을 가로로 나열하기 위한 설정
	},
	icon: {
		marginRight: 10, // 각 아이콘 간 간격을 위한 마진 설정
	},
});

export default Test;
