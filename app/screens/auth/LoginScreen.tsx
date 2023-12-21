import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToronTierIcon from "@assets/images/login/Icon_Torontier.svg";
import KakaoLoginIcon from "@assets/images/login/Icon_KakaoLogin.svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
	const handleLoginButtonPress = async () => {
		try {
			console.log("Touched");
			//await AsyncStorage.setItem("isLoggedIn", "true");
			onLogin(); // isLoggedIn 값 변경 후 onLogin 함수를 호출하여 로그인 상태를 업데이트합니다.
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<ToronTierIcon />
			<View style={styles.textbox}>
				<Text style={styles.line}>───── </Text>
				<Text style={styles.text}>간편로그인으로 시작하기</Text>
				<Text style={styles.line}> ─────</Text>
			</View>
			<GestureHandlerRootView>
				<TouchableOpacity onPress={handleLoginButtonPress}>
					<KakaoLoginIcon />
				</TouchableOpacity>
			</GestureHandlerRootView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: "50%",
	},
	textbox: {
		flexDirection: "row",
		marginTop: 72,
		marginBottom: 28,
	},
	text: {
		color: "#919191",
	},
	line: {},
});

export default LoginScreen;
