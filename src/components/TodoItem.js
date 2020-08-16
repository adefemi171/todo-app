import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity  onPress={props.onDel.bind(this, props.id)}>
            <View style={styles.todoList}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    todoList: {
        padding: 10,
        margin: 10,
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TodoItem