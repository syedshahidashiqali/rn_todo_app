import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, ScrollView} from 'react-native';
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
    setTodos(prevTodos => {
      return [...prevTodos, {text: text, key: Math.random().toString()}];
    });
  };

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
