/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from "react-native";

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
} from "react-native/Libraries/NewAppScreen";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Test from "../src/components/test.tsx";
import IssueList from "../src/components/IssueList.tsx";
import TopBar from "../src/components/TopBar.tsx";

function App(): JSX.Element {
	return (
		<View>
			<TopBar></TopBar>
			<IssueList></IssueList>
			<Test></Test>
		</View>
	);
}

export default App;
