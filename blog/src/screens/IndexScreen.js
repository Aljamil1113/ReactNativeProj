import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';


// import BlogContext from '../context/BlogContext';
import {Context} from '../context/BlogContext'; 

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);

    return (
      <View>
          <Text>This is Index Screen</Text>
          <Button title="Add Post" onPress={addBlogPost}></Button>
          <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>
          }}></FlatList>
      </View>    
    );
    
};

const styles = StyleSheet.create({});

export default IndexScreen;