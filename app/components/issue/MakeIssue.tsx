import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	KeyboardAvoidingView,
	TouchableOpacity,
	Alert,
} from "react-native";
// 이미지 -> imagepicker 써야함 권한 설정등 많아서 일단 뒤로 보류
import Icon_Close from "@assets/images/Icon_close.svg";

const MakeIssue: React.FC = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = async () => {
		if (!title) {
			Alert.alert("제목을 입력해주세요.");
			return;
		}
		if (!content) {
			Alert.alert("내용을 입력해주세요.");
			return;
		}
		const response = await fetch("주소", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				content: content,
			}),
		});

		const data = await response.json();
		console.log(data);
	};

	return (
		<KeyboardAvoidingView>
			<View style={styles.container}>
				<View style={styles.marginContent}>
					<View style={styles.btnBox}>
						<TouchableOpacity>
							<Icon_Close />
						</TouchableOpacity>
						<Text style={styles.title}>게시글 작성</Text>
						<TouchableOpacity style={styles.submitBox} onPress={handleSubmit}>
							<Text style={[styles.title, { color: "#FFF", fontSize: 12 }]}>
								완료
							</Text>
						</TouchableOpacity>
					</View>
					<TextInput
						style={{ height: 40, borderColor: "#FFFFFF" }}
						onChangeText={(text) => setTitle(text)}
						value={title}
						placeholder="제목"
						placeholderTextColor="lightgray"
					/>

					<View style={styles.line}></View>

					<TextInput
						style={{ height: 300, borderColor: "#FFFFFF" }}
						onChangeText={(text) => setContent(text)}
						value={content}
						multiline
						placeholder="내용을 입력해주세요."
						placeholderTextColor="lightgray"
						textAlignVertical="top"
						// textAlign={Platform.OS === "ios" ? "left" : "auto"} // iOS에서 텍스트를 상단에 정렬
					/>
					<Text style={{ color: "#393939" }}>* 토론티어 주의사항</Text>
					<Text>
						토론티어는 남을 비방하기 위해서가 아닌, 다양한 사람들과 소통을 하는
						과정에서 새로운 가치관을 얻는 즐거움을 나누기 위한 어플입니다. 남을
						비방하거나 특정 단체를 과도하게 옹호, 비방하는 행위는 지양해주시기
						바랍니다. 주의사항을 어길 경우 일정기간 서비스 이용에 어려움을
						겪으실 수 있음을 알려드립니다.
					</Text>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#FFFFFF",
	},
	btnBox: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		color: "#434343",
		textAlign: "center",
		fontFamily: "Noto Sans KR",
		fontSize: 16,
		fontWeight: "400",
		letterSpacing: -1,
	},
	submitBox: {
		width: 42,
		height: 24,
		paddingTop: 2,
		backgroundColor: "#FFB800",
		borderRadius: 12,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	line: {
		width: "100%",
		height: 1,
		backgroundColor: "#B0B0B0",
	},
	marginContent: {
		marginHorizontal: 16,
		marginTop: 16,
	},
});

export default MakeIssue;
