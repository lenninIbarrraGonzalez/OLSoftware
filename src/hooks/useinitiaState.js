import { useState } from "react";
import initialState from "../../initialState";

const useInitiaState = () => {
  const [state, setState] = useState(initialState);

  const addUser = (payload) => {
    setState({
      ...state,
      users: [...state.users, payload],
    });
  };

  const removeFromUser = (payload) => {
    setState({
      ...state,
      users: state.users.fiter((items) => items.id !== payload.id),
    });
  };

  const searchUser = (payload) => {
    // console.log("PAYLOAD>>>", payload);
    // setState({
    //   ...state,
    //   edit: [...state.users]
    // })
    // console.log("RESULTADO DEL state", state)
  };

  return {
    addUser,
    removeFromUser,
    searchUser,
    state,
  };
};

export default useInitiaState;
