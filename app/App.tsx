import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";

import Header from "./components/common/Header.tsx";
import IssueList from "./components/IssueList.tsx";

function App(): JSX.Element {
	const handleSharePress = () => {};

	return (
		<SafeAreaView>
			<StatusBar />
			<Header showShareButton={true} onSharePress={handleSharePress} />
			<ScrollView contentInsetAdjustmentBehavior="automatic">
				<IssueList />
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
