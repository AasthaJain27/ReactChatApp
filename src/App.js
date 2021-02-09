import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="f9985ea1-d40b-4538-b7cb-3ebf86cc9c4f"
      userName="admin"
      userSecret="123123"
      renderChatFeed ={(chatProps)=> <ChatFeed  {...chatProps}/>}
    />
  );
};

export default App;
