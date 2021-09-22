import { DELETE_TODO, ADD_TODO, CLEAR_ALL } from "../constants/types";

let initialState = [
  {
    text: "Nomi",
    completed: false,
    uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
  },
];

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          uid: Date.now().toString(36) + Math.random().toString(36).substr(2),
        },
      ];
    case DELETE_TODO:
      let newState = state.filter((item) => {
        return item.uid !== action.payload;
      });
      return newState;
    case CLEAR_ALL:
        console.log("Clear All in redu")
      let empState = [];
      return empState;

    default:
      return state;
  }
}
export default TodoReducer;