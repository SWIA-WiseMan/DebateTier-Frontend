import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "app/App";

import Header from "@components/common/Header";
import Footer from "@components/common/Footer";

type IssueScreenProps = {
	navigation: StackNavigationProp<RootStackParamList, "Issue">;
};

const IssueScreen: React.FC<IssueScreenProps> = ({ navigation }) => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Issue Screen</Text>
			</View>
			<Footer activeTab="Issue" navigation={navigation} />
		</SafeAreaView>
	);
};

export default IssueScreen;
