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

  return {
    addUser,
    removeFromUser,
    state,
  };
};

export default useInitiaState;
