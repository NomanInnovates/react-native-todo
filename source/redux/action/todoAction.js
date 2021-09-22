import {DELETE_TODO,CLEAR_ALL,ADD_TODO} from '../constants/types';

export const addTodo = (data) => ( dispatch) => {
 
    dispatch({
        type:ADD_TODO,
        payload: data
    })


}

export const deleteItem = (id) => ( dispatch) => {
   
    dispatch({
        type:DELETE_TODO,
        payload: id
    })

}
export const cleardataRedux = () => ( dispatch) => {
   console.log("clear All")
    dispatch({
        type:CLEAR_ALL,
        payload: ''
    })

}