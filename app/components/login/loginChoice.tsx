import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToronTierIcon from "@assets/images/login/Icon_Torontier.svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const loginChoice: React.FC<{ signIn: () => void; signUp: () => void }> = ({
	signIn,
	signUp,
}) => {
	return (
		<View style={styles.container}>
			<ToronTierIcon />
			<View style={styles.textbox}>
				<Text style={styles.line}>──────── </Text>
				<Text style={styles.text}>시작하기</Text>
				<Text style={styles.line}> ────────</Text>
			</View>
			<GestureHandlerRootView>
				<TouchableOpacity onPress={signUp} style={styles.button}>
					<Text style={styles.buttonText}>계정이 없다면 회원가입</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={signIn} style={styles.button}>
					<Text style={styles.buttonText}>이미 가입했다면 로그인</Text>
				</TouchableOpacity>
			</GestureHandlerRootView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: "50%",
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	textbox: {
		flexDirection: "row",
		marginTop: 72,
		marginBottom: 28,
	},
	text: {
		color: "#919191",
	},
	button: {
		width: 300,
		height: 45,
		backgroundColor: "#FFB800",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	line: {},
});

export default loginChoice;
