import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon_Light from "@assets/images/Icon_Light.svg";
import Icon_Person from "@assets/images/Icon_Person.svg";
import Icon_Alarm from "@assets/images/Icon_Alarm.svg";

const DebateList: React.FC = () => {
	return (
		<ScrollView>
			<View>
				<View style={styles.boxContainer}>
					<View>
						<View style={styles.iconLightMargin}>
							<Icon_Light />
						</View>
						<Text style={styles.debateTitle}>후쿠시마</Text>
						<Text style={styles.debateTitle}>오염수 방류</Text>
					</View>
					<View style={styles.spaceMargin}>
						<View style={styles.rowSort}>
							<Icon_Person></Icon_Person>
							<Text style={styles.highLightText}>23명</Text>
							<Text style={styles.simpleText}>이 참여중이예요</Text>
						</View>
						<View style={styles.rowSort}>
							<Icon_Alarm></Icon_Alarm>
							<Text style={styles.highLightText}>14시간 23분</Text>
							<Text style={styles.simpleText}> 남았어요</Text>
						</View>
					</View>
				</View>

				<View style={styles.boxContainer}>
					<View>
						<View style={styles.iconLightMargin}>
							<Icon_Light />
						</View>
						<Text style={styles.debateTitle}>후쿠시마</Text>
						<Text style={styles.debateTitle}>오염수 방류</Text>
					</View>
					<View style={styles.spaceMargin}>
						<View style={styles.rowSort}>
							<Icon_Person></Icon_Person>
							<Text style={styles.highLightText}>23명</Text>
							<Text style={styles.simpleText}>이 참여중이예요</Text>
						</View>
						<View style={styles.rowSort}>
							<Icon_Alarm></Icon_Alarm>
							<Text style={styles.highLightText}>14시간 23분</Text>
							<Text style={styles.simpleText}> 남았어요</Text>
						</View>
					</View>
				</View>

				<View style={styles.boxContainer}>
					<View>
						<View style={styles.iconLightMargin}>
							<Icon_Light />
						</View>
						<Text style={styles.debateTitle}>후쿠시마</Text>
						<Text style={styles.debateTitle}>오염수 방류</Text>
					</View>
					<View style={styles.spaceMargin}>
						<View style={styles.rowSort}>
							<Icon_Person></Icon_Person>
							<Text style={styles.highLightText}>23명</Text>
							<Text style={styles.simpleText}>이 참여중이예요</Text>
						</View>
						<View style={styles.rowSort}>
							<Icon_Alarm></Icon_Alarm>
							<Text style={styles.highLightText}>14시간 23분</Text>
							<Text style={styles.simpleText}> 남았어요</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	boxContainer: {
		width: 156,
		height: 197,
		marginLeft: 16,
		marginBottom: 16,
		flexShrink: 0,
		borderRadius: 6,
		backgroundColor: "#F6F6F6",
		shadowColor: "#787878",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 4,
	},
	iconLightMargin: {
		alignItems: "center",
		marginTop: 36,
		marginBottom: 2,
	},
	spaceMargin: {
		marginTop: 16,
	},
	debateTitle: {
		color: "#242424",
		textAlign: "center",
		fontFamily: "NotoSansKR-Bold",
		fontSize: 16,
		fontWeight: "bold",
		lineHeight: 20,
		letterSpacing: -1,
	},
	rowSort: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	highLightText: {
		color: "#FFB800",
		fontFamily: "NotoSansKR-Medium",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: 16,
		letterSpacing: -1,
	},
	simpleText: {
		color: "#434343",
		fontFamily: "NotoSansKR-Regular",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		lineHeight: 16,
		letterSpacing: -1,
	},
});

export default DebateList;
