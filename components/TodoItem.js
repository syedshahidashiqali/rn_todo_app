import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function TodoItem({item, onPressHandler}) {
  return (
    <TouchableOpacity onPress={() => onPressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons 
          name="delete" 
          size={18} 
          backgroundColor="#fff"
          color="#333" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center'
  },
  itemText: {
    marginLeft:10,
    fontSize:18
  }
});

export default TodoItem;
