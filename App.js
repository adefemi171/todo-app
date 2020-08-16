import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, Text } from 'react-native';


import TodoItem from './src/components/TodoItem';
import TodoInput from './src/components/TodoInput';

export default function App() {


  // Managing the todo state
  const [displayTodo, setDisplayTodo] = useState([]);

  // Managiing AddTodo state
  const [isAddTodo, setIsAddTodo] = useState(false);

  // using the user input at button press
  const addTodoHandler = todoTitle => {
    console.log(todoTitle);
    setDisplayTodo(currentTodo => [
      ...currentTodo, 
      { id: Math.random().toString(), val: todoTitle }]);
      setIsAddTodo(false);
  };

  // Deleting stored item
  const delTodoHandler = todoId => {
    setDisplayTodo(currentTodo => {
      return currentTodo.filter((todo) => todo.id !== todoId);
    })
  }

  // A function to cancel todo
  const cancelTodoHandler = () => {
    setIsAddTodo(false);
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}> Click on each Todo to delete them </Text>
      </View>
      <Button  title=" Add New Todo " onPress={() => setIsAddTodo(true)}/>
      <TodoInput visible={isAddTodo} onAddTodo={addTodoHandler} onCancel={cancelTodoHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayTodo}
        renderItem={itemData => (
          <TodoItem 
            id={itemData.item.id} 
            onDel={delTodoHandler} 
            title={itemData.item.val}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  textContainer:{
    margin: 10,   
  },
  headerText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  }

});