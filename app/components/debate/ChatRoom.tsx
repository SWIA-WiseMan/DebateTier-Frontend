import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";

import Icon_Profile from "@assets/images/Icon_Profile.svg";
import Icon_Add from "@assets/images/debate/Icon_Add.svg";
import Icon_Send from "@assets/images/debate/Icon_Send.svg";
import Icon_ChatArrow from "@assets/images/debate/Icon_ChatArrow.svg"
import { TextInput } from "react-native-gesture-handler";


const ChatRoom: React.FC = () => {
	const [text, setText] = useState('');
	return (
		<>
		 <KeyboardAvoidingView
            style={styles.container}
        >
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<Icon_Profile style={styles.iconMargin}/>
					<Text style={styles.simpleText}>잠자는 숲속의 나무늘보</Text>
				</View>
				<View style={[styles.rowContainer,styles.chatMargin]}>
					<Icon_ChatArrow/>
					<View style={styles.chatContainer}>
					<Text style={styles.simpleText}>이건 진짜 아니지예... 토맛? 윽.. 그냥 토마토맛 토가 나음;;</Text>
					</View>
				</View>

				<View style={[styles.mesaageContainer, {marginTop: 580}]}>
					<Icon_Add style={{marginLeft: 5}}/>
					<TextInput
					  style={styles.textInput} // 크기 조정을 위한 스타일 추가
					  onChangeText={setText} // 텍스트 변경을 처리하는 핸들러
					  value={text} // 현재 텍스트 값
					  placeholder="OO님의 의견을 말해주세요."
					  placeholderTextColor="lightgray"
					/>
					<Icon_Send style={styles.iconMargin}/>
				</View>
			</View>
			</KeyboardAvoidingView>
	</>);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FFFFFF",
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	iconMargin: {
		marginRight:5,
	},
	chatMargin: {
		marginLeft: 10,
	},
	chatContainer: {
		backgroundColor: "#D9D9D9",
		width: 350,
		height: 32,
		marginTop: 10,
		borderRadius: 6
	},
	simpleText: {
		color: "#000000",
		textAlign: "center",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 14,
		fontWeight: "500",
		lineHeight: 20,
		letterSpacing: -1,
	},
	mesaageContainer: {
		position: 'absolute',
		bottom: 0,
		flexDirection: "row",
		justifyContent:"space-between",
		alignItems: "center",
		backgroundColor: "#F7F7F7",
		width: "92%",
		height: 40,
		marginLeft: 16,
		marginRight: 16,
		marginBottom: 16,
		borderRadius: 10,
	},
	textInput: {
        width: 300,
        height: 40,
    },
});

export default ChatRoom;
