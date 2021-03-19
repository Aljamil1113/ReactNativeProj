import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// import BlogContext from '../context/BlogContext';
import {Context} from '../context/BlogContext'; 

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
      <View>
          <Button title="Add Post" onPress={addBlogPost}></Button>
          <FlatList
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return <View style={styles.row}>
               <Text>{item.id} - {item.title}</Text>
               <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash"></Feather>
               </TouchableOpacity>
            </View>          
          }}></FlatList>
      </View>    
    );
    
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});

export default IndexScreen;