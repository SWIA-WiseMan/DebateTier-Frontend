import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "@components/common/Header";
import IssueList from "@components/issue/IssueList";

const IssueScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header
				showShareButton={false}
				onSharePress={handleSharePress}
				screen="이슈소통방"
			/>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<IssueList />
			</View>
		</SafeAreaView>
	);
};

export default IssueScreen;
