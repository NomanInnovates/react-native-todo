import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core'

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteItem} from '../../redux/action/todoAction';

export default function Home() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(['hello']);
  const handleChange = e => {
    setText(e);
  };
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(addTodo(text));
    setText('');
  };
  const handleDell = id => {
    dispatch(deleteItem(id));
  };
  const navigation =   useNavigation()

  const gotToAddTodo = () => {
    navigation.navigate("AddTodo");
}

  const rtodos = useSelector(state => state.TodoReducer);
 
  return (
    <View style={styles.todoPage}>
      <Text style={styles.heading}>Todo App</Text>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter here..."
          style={{borderWidth: 1, margin: 10, width: 300}}
          value={text}
          onChangeText={e => handleChange(e)}
        />

        <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
          <Text> add </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.check}>
        {rtodos.map((item, index) => {
          return (
            <View style={styles.todos} key={index}>
              <Text style={styles.todoText}>{item.text}</Text>
              <TouchableOpacity
                onPress={() => handleDell(item.uid)}
                style={styles.delBtn}>
                <Text>Dell</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </Text>
      <TouchableOpacity onPress={gotToAddTodo} style={styles.fixedAdd}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoPage: {
    margin: 5,
    flex:1,
    backgroundColor:"#F4F6FD"
  },
  fixedAdd:{
    position:"absolute",
    bottom:50,
    right:50,
    padding:30,
    backgroundColor:'red',
    borderRadius:30,
    color:"#fff"

  },
  todos: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 400,
    padding: 10,
    backgroundColor: 'yellow',
  },
  check: {
    backgroundColor: 'green',
  },
  delBtn: {
    width: 30,
    backgroundColor: 'red',
  },
  todoText: {
    width: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtn: {
    backgroundColor: 'grey',
    padding: 14,
  },
  heading: {
    margin: 10,
    textAlign: 'center',
    fontSize: 18,
  },
});
