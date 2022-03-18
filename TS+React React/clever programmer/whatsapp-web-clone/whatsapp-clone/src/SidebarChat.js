import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";

function SidebarChat({ addNewChat, roomId, name }) {
  const [seed, setSeed] = useState("");
  const [messages,setMessages]=useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(()=>{
    if(roomId){
      db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>(
setMessages(snapshot.docs.map((doc)=>doc.data()))
      ))
    }
  },[roomId])
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("Rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${roomId}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      Add new chat
    </div>
  );
}

export default SidebarChat;
