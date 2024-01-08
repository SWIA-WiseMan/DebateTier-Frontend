import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";

import ReadMore from "@components/home/ReadMore";
import IssueList from "@components/issue/IssueList";
import DebateList from "@components/debate/DebateList";

import HomeProfile from "@components/home/HomeProfile";

const HomeList: React.FC = () => (
	<View style={styles.container}>
		<ScrollView>
			<HomeProfile name="정현" />

			<View>
				<ReadMore
					onPress={() => console.log("더보기 버튼 클릭")}
					title="오늘의 이슈"
				/>
				<IssueList />
			</View>

			<View>
				<ReadMore
					onPress={() => console.log("더보기 버튼 클릭")}
					title="오늘의 토론"
				/>
				<DebateList layout="horizontal" />
			</View>

			<View>
				<ReadMore
					onPress={() => console.log("더보기 버튼 클릭")}
					title="HOT 이슈"
				/>
				<IssueList />
			</View>

			<View>
				<ReadMore
					onPress={() => console.log("더보기 버튼 클릭")}
					title="HOT 토론"
				/>
				<DebateList layout="horizontal" />
			</View>
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
});

export default HomeList;
