import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import DocumentItem from "@components/document/DocumentItem";
import { useNavigation } from "@react-navigation/native";

interface DocumentData {
    title: string;
    viewCount: number;
    uploader: string;
    content: string;
}

const DocumentList: React.FC = () => {
    const navigation: any = useNavigation();
    const [documentDataList, setDocumentDataList] = useState<DocumentData[]>([]);
    useEffect(() => {
        const responseData: DocumentData[] = [
            {
                title: "올해 고3을 마지막으로 학교에 '빠른년생' 사라진다",
                viewCount: 100,
                uploader: "데릭",
                content: "2020학년도 대학수학능력시험에 응시한 고등학교 3학년 수험생 중에는 '빠른년생'으로 입학한 2002년 1, 2월생들이 함께 있다. 하지만 내년에 치러질 2021학년도 수능에서는 2003년 1, 2월생들을 볼 수 없다. 2003년생부터는 빠른년생이 적용되지 않기 때문이다.",
            },
            {
                title: "올해 고3을 마지막으로 학교에 '빠른년생' 사라진다",
                viewCount: 532,
                uploader: "관리자",
                content: "2020학년도 대학수학능력시험에 응시한 고등학교 3학년 수험생 중에는 '빠른년생'으로 입학한 2002년 1, 2월생들이 함께 있다. 하지만 내년에 치러질 2021학년도 수능에서는 2003년 1, 2월생들을 볼 수 없다. 2003년생부터는 빠른년생이 적용되지 않기 때문이다.",
            },
        ];

        setDocumentDataList(responseData);
    }, []);
    
    return (
        <ScrollView style={styles.container}>
            {documentDataList.map((documentData, index) => (
                <DocumentItem
                    key={index}
                    documentData={documentData}
                    IsAdmin={false}
                    navigateToCommunityScreen={(documentData: DocumentData) =>
                        navigation.navigate("DocumentDetailScreen", { documentData })
                    }
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
});

export default DocumentList;