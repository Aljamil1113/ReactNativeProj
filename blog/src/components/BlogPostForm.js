import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ( { onSubmit} ) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={(text) => setTitle(text)}></TextInput>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput value={content} style={styles.input} onChangeText={(text) => setContent(text)}></TextInput>

            <Button title="Save Blog Post"
            onPress={() => onSubmit(title, content)}></Button>
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

export default BlogPostForm;