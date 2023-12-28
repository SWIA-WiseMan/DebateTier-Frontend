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
import { SvgProps } from "react-native-svg";

interface DebateInfoProps {
	icon: React.ReactElement<SvgProps>;
	text1: string;
	text2: string;
}

const DebateInfo: React.FC<DebateInfoProps> = ({ icon, text1, text2 }) => (
	<View style={styles.rowSort}>
		{icon}
		<Text style={styles.highLightText}>{text1}</Text>
		<Text style={styles.simpleText}>{text2}</Text>
	</View>
);

interface DebateData {
	title: string;
	headCount: number;
	hour: number;
	minute: number;
}

interface DebateItemProps {
	debateData: DebateData;
}

const DebateItem: React.FC<DebateItemProps> = ({ debateData }) => {
	return (
		<TouchableOpacity>
			<View>
				<View style={styles.container}>
					<View>
						<View style={styles.iconLightMargin}>
							<Icon_Light />
						</View>
						<Text style={styles.debateTitle}>{debateData.title}</Text>
					</View>
					<View style={styles.spaceMargin}>
						<DebateInfo
							icon={<Icon_Person />}
							text1={`${debateData.headCount}명`}
							text2="이 참여중이예요"
						/>
						<DebateInfo
							icon={<Icon_Alarm />}
							text1={`${debateData.hour}시간 ${debateData.minute}분`}
							text2=" 남았어요"
						/>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 156,
		height: 197,
		margin: 4,
		marginBottom: 16,
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

export default DebateItem;
