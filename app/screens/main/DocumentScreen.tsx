import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "@components/common/Header";

const DocumentScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Document Screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default DocumentScreen;
