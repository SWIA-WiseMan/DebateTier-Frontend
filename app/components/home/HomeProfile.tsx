import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon_Mask from "@assets/images/Icon_Mask.svg";
import Icon_Search from "@assets/images/Icon_Search.svg";
import Icon_Alert from "@assets/images/Icon_Alert.svg";

interface ProfileData {
	name: string;
}

const HomeProfile: React.FC<ProfileData> = ({ name }) => (
	<View style={styles.container}>
		<View style={styles.rowContainer}>
			<Icon_Mask />
			<Text style={styles.highLightText}>{name}</Text>
			<Text style={styles.simpleText}>님 환영해요!</Text>
		</View>
		<View style={styles.rowContainer}>
			<Icon_Search style={{ marginRight: 12 }} />
			<Icon_Alert />
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 8,
		marginLeft: 16,
		marginRight: 16,
	},
	rowContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	commonText: {
		textAlign: "center",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 16,
		fontWeight: "500",
		lineHeight: 20,
		letterSpacing: -1,
	},
	highLightText: {
		color: "#FFB800",
		textAlign: "center",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 16,
		fontWeight: "500",
		lineHeight: 20,
		letterSpacing: -1,
	},
	simpleText: {
		color: "#000000",
		textAlign: "center",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 16,
		fontWeight: "500",
		lineHeight: 20,
		letterSpacing: -1,
	},
	// commonText: {
	// 	textAlign: "center",
	// 	fontFamily: "NotoSansKR-Bold",
	// 	fontSize: 16,
	// 	fontWeight: "500",
	// 	lineHeight: 20,
	// 	letterSpacing: -1,
	// },
});

export default HomeProfile;
