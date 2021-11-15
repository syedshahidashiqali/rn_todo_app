import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState('');

  // if (todos === "") {
  //   setTodos([
  //     {text: "No TODO To Show", key:Math.random().toString()}
  //   ])
  // }

  const onPressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
    console.log(key);
  };

  const addTodo = text => {
    // console.log(text)

    if (text.length > 3) {
      
      setTodos(prevTodos => {
        return [...prevTodos, {text: text, key: Math.random().toString()}];
      });
    } else {
      // 1st para >> title
      // 2nd para >> text
      // 3rd para >> array of objects and each object represents a button
      Alert.alert("OOPS!", "Todos must be over 2 chars long",[
        {text: "Understood", onPress:() => console.log("alert closed")}
      ]
      )
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            {todos?.length == 0 ? (
              <TodoItem
                item={{
                  text: 'No todos to show',
                  key: Math?.random()?.toString(),
                }}
                onPressHandler={onPressHandler}
              />
            ) : (
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} onPressHandler={onPressHandler} />
                )}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20,
    flex:1,
  },
});
