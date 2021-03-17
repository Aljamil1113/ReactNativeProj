import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from '../components/ResultDetail';

const ResultList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
                return <ResultDetail result={item}></ResultDetail>
            }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultList;