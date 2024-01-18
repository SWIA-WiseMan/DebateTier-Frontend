import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToronTierIcon from "@assets/images/login/Icon_Torontier.svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginChoice from "@components/login/loginChoice";
import SignUp from "@components/login/signUp";
import SignIn from "@components/login/signIn";

const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
	const [isSignUp, setIsSignUp] = useState(false);
	const [isSignIn, setIsSignIn] = useState(false);
	const changeSignInPage = async () => {
		try {
			setIsSignIn(true);
			setIsSignUp(false);
		} catch (e) {
			console.log(e);
		}
	};

	const changeSignUpPage = async () => {
		try {
			setIsSignIn(false);
			setIsSignUp(true);
		} catch (e) {
			console.log(e);
		}
	};

	const resetPage = async () => {
		try {
			setIsSignIn(false);
			setIsSignUp(false);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			{!isSignIn && !isSignUp && (
				<LoginChoice signIn={changeSignInPage} signUp={changeSignUpPage} />
			)}
			{isSignIn && !isSignUp && <SignIn reset={resetPage} onLogin={onLogin} />}
			{!isSignIn && isSignUp && <SignUp reset={resetPage} />}
			{isSignIn && isSignUp && (
				<LoginChoice signIn={changeSignInPage} signUp={changeSignUpPage} />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
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

export default LoginScreen;
