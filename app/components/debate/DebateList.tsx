import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DebateItem from "@components/debate/DebateItem";

interface DebateData {
	title: string;
	headCount: number;
	hour: number;
	minute: number;
}

interface DebateListProps {
	layout: "horizontal" | "vertical";
}

const DebateList: React.FC<DebateListProps> = ({ layout }) => {
	const [debateDataList, setDebateDataList] = useState<DebateData[]>([]);

	useEffect(() => {
		const responseData: DebateData[] = [
			{
				title: "후쿠시마\n오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
			{
				title: "후쿠시마 오염수 방류",
				headCount: 23,
				hour: 14,
				minute: 23,
			},
		];

		setDebateDataList(responseData);
	}, []);

	return (
		<FlatList
			style={styles.container}
			data={debateDataList}
			keyExtractor={(item, index) => index.toString()}
			renderItem={({ item }) => <DebateItem debateData={item} />}
			numColumns={layout === "vertical" ? 2 : 1}
			horizontal={layout === "horizontal"}
			contentContainerStyle={{ minHeight: 220 }}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
	},
});

export default DebateList;
