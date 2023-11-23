import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "@components/common/Header";
import Frame from "@components/issue/Frame";

const IssueScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Frame />
			</View>
		</SafeAreaView>
	);
};

export default IssueScreen;
