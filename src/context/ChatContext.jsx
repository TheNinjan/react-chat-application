import { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  let a = currentUser.uid;
  console.log("cuser id in chatcontext", a);
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        console.log("action------>>----------->>", action.payload);
        return {
          chatId:
            currentUser.uid > action.payload
              ? currentUser.uid + action.payload
              : action.payload + currentUser.uid,
          user: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
