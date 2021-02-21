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
    console.log("remove", payload);

    setState({
      ...state,
      users: state.users.filter((items) => items.id !== payload.id),
    });
  };

  const editUser = (payload) => {};

  return {
    addUser,
    removeFromUser,
    editUser,
    state,
  };
};

export default useInitiaState;
