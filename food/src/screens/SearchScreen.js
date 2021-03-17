import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';

const SearchScreen = () => {
    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = useResult();
    
    return (
        <View>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi()}></SearchBar>
            <Text>{errorMessage ?  errorMessage : null}</Text>
            <Text>We have found {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;