import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon_Read_more from "@assets/images/Icon_Read_more.svg";
import Icon_Arrow_back from "@assets/images/Icon_Arrow_back.svg";
import Icon_Light from "@assets/images/Icon_Light.svg";

interface ReadMoreProps {
	onPress: () => void;
	title: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ onPress, title }) => (
	<View style={styles.container}>
		<View style={styles.iconContainer}>
			<Icon_Light width={24} height={24} />
			<Text style={styles.text}>{title}</Text>
			<TouchableOpacity onPress={onPress} style={styles.iconContainer}>
				<Icon_Read_more />
				<Icon_Arrow_back />
			</TouchableOpacity>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 24,
		marginLeft: 16,
	},
	iconContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		marginRight: 16,
	},
	text: {
		color: "#393939",
		textAlign: "center",
		fontFamily: "Noto Sans KR",
		fontSize: 18,
		fontWeight: "600",
		letterSpacing: -1,
		marginRight: 194,
		lineHeight: 24, // 텍스트 라인의 높이를 24로 설정
	},
});

export default ReadMore;
