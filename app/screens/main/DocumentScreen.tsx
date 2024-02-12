import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import Header from "@components/common/Header";
import DocumentList from "@components/document/DocumentList";

const DocumentScreen: React.FC = () => {
	const handleSharePress = () => {};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header
				showShareButton={false}
				onSharePress={handleSharePress}
				screen="자료방"
			/>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<DocumentList></DocumentList>
			</View>
		</SafeAreaView>
	);
};

export default DocumentScreen;
