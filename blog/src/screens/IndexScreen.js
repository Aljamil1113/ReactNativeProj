import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button } from 'react-native';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);

    return (
      <View>
          <Text>This is Index Screen</Text>
          <Button title="Add Post" onPress={addBlogPost}></Button>
          <FlatList
          data={data}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>
          }}></FlatList>
      </View>    
    );
    
};

const styles = StyleSheet.create({});

export default IndexScreen;