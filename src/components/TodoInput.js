import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TodoInput = props => {

    const [enteredTodo, setEnteredTodo] = useState('');

     // A function that execute for every key stroke
    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    }

    // A function to add todo and clear todo
    const addTodoHandler = () => {
        props.onAddTodo(enteredTodo);
        setEnteredTodo('')
    }

    const cancelTodoHandler = () => {
        props.onCancel();
        setEnteredTodo('')
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <TextInput
                placeholder="Enter Todo"
                style={styles.textInputVal}
                onChangeText={todoInputHandler}
                value={enteredTodo}
                />
                <View style={styles.buttonContainer }>
                    <View style={styles.eachButton }>
                        <Button title=" - " color="red"  onPress={cancelTodoHandler} />
                    </View>
                    <View style={styles.eachButton }>
                        <Button title=" + " color="green" onPress={addTodoHandler} />
                    </View>
                </View>
            </View>
      </Modal>
    );
}


const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputVal: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 20,
        marginBottom: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'60%',
    },
    eachButton:{
        width:'40%',
    }
})

export default TodoInput