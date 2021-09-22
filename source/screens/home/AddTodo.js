import { useNavigation } from '@react-navigation/core';
import React,{useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteItem} from '../../redux/action/todoAction';


export default function AddTodo() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(['hello']);
    const navigation = useNavigation()
    const handleChange = e => {
        setText(e);
      };
    //   const [date, setDate] = useState(new Date(1598051730000));

      const dispatch = useDispatch();
      const handlePress = () => {
        dispatch(addTodo(text));
        setText('');
        navigation.navigate("Home")
      };
  return (
    <View style={styles.addPAge}>
      <Text>add Your task here</Text>
      <View style={styles.midle}>
      <View style={styles.header}>
        <TextInput
          placeholder="Enter new Task..."
          style={styles.input}
          value={text}
          placeholderTextColor={'#333'} 
          onChangeText={e => handleChange(e)}
        />

       
      </View>
    
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={handlePress}>
          <Text style={styles.white}> New task </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    addPAge:{
        flex:1,
        backgroundColor:"#F4F6FD"

    },
    white:{
        color:"#fff",
        fontSize:20
    },
    midle:{
    textAlign:'center'
    },
  header: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  addBtn: {
    backgroundColor: '#2643C4',
    padding: 20,
    position:"absolute",
    bottom:30,
    right:30,
    borderRadius:50,

  },
  heading: {
    margin: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  input:{
      fontSize:30,
      textAlign:"center",
      height:100,
    color:"#333",
    width:'100%'
  }
});
