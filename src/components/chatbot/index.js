import React from "react";
import ChatFooter from "./chatFooter";
import MessagesArea from "./messagesArea";

function Chatbot() {
  return (
    <div className="chatbot">
      <MessagesArea />
      <ChatFooter />
    </div>
  );
}

export default Chatbot;
