import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ToronTierIcon from "@assets/images/login/Icon_Torontier.svg";
import {
	GestureHandlerRootView,
	TextInput,
} from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SignIn: React.FC<{ reset: () => void; onLogin: () => void }> = ({
	reset,
	onLogin,
}) => {
	const [values, setValues] = useState({
		address: "",
		password: "",
	});

	const handleChangeText = (name: string, text: string) => {
		setValues({
			...values,
			[name]: text,
		});
		console.log(values);
	};

	return (
		<View style={styles.container}>
			<ToronTierIcon />
			<GestureHandlerRootView>
				<View style={styles.textbox}>
					<Text>이메일을 입력해주세요 * </Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => handleChangeText("email", text)}
						placeholderTextColor={Colors.GRAY}
						placeholder="ex. email@example.com"
					/>
				</View>
				<View style={styles.textbox}>
					<Text>비밀번호를 입력해주세요 * </Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => handleChangeText("password", text)}
					/>
				</View>

				<TouchableOpacity onPress={onLogin} style={styles.button}>
					<Text style={styles.buttonText}>로그인</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={reset} style={styles.button}>
					<Text style={styles.buttonText}>계정찾기</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={reset} style={styles.button}>
					<Text style={styles.buttonText}>돌아가기</Text>
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
		paddingTop: "20%",
	},
	textbox: {
		marginTop: 5,
		marginBottom: 20,
	},
	input: {
		borderBottomWidth: 1, // 아래쪽 테두리만 표시
		borderBottomColor: "black", // 테두리 색상
		marginBottom: 10, // 입력창 간격
		width: "100%", // 입력창 너비
		height: 40, // 입력창 높이
	},
	button: {
		width: 300,
		height: 45,
		backgroundColor: "#FFB800",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	line: {},
});

export default SignIn;
