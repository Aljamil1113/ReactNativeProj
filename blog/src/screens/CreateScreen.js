import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ( {navigation} ) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={(text) => setTitle(text)}></TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput value={content} style={styles.input} onChangeText={(text) => setContent(text)}></TextInput>

            <Button title="Add Blog Post" onPress={() => 
                {
                    addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default CreateScreen;