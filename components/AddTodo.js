import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Keyboard, Alert, Button } from 'react-native';

function AddTodo({addTodo}) {

    const [text, setText] = useState('');

    const changeTextHandler = textValue => {
        setText(textValue);
        // console.log(text)
    }

    return (
        <View>
            <TextInput 
              placeholder="Enter TODO"
              style={styles.input}
              onChangeText={changeTextHandler}
            //   onEndEditing={endEditHandler}
              onSubmitEditing={() => addTodo(text)}
            //   onTouchEnd={endEditHandler}
            //   onTouchStart={endEditHandler}
            />
            <Button 
              title="Add TODO"
              color="coral"
              onPress={() => addTodo(text)} 
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        // backgroundColor: "yellow",
        marginBottom:8,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: "#ddd"
    }
})

export default AddTodo;
