import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
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