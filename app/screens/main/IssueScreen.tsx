import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "@components/common/Header";
import Frame from "@components/issue/Frame";
import IssueList from "@components/issue/IssueList";
import IssueItem from "@components/issue/IssueItem";

const IssueScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header showShareButton={false} onSharePress={handleSharePress} />
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				{/* <Frame /> */}
				<IssueList />
				{/* <IssueItem /> */}
			</View>
		</SafeAreaView>
	);
};

export default IssueScreen;
