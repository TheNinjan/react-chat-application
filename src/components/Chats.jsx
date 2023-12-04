import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  // console.log("seeing data chats", chats);
  return (
    <div className="chats">
      {Object.entries(chats)
        ?.sort((a, b) => b[0][1].seconds - a[0][1].seconds)
        .filter((item) => item[0].endsWith("userInfo"))
        .map((chat) => {
          // console.log("-------->>--------->>", chat);
          return (
            <div
              className="userChat"
              key={chat[0]}
              onClick={() => handleSelect(chat[1].uid)}
            >
              <img src={chat[1].photoURL} alt="hh" />
              <div className="userChatInfo">
                <span>{chat[1].displayName}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
