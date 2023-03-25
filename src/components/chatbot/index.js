import { useEffect, useState, useRef } from "react";
import ChatFooter from "./chatFooter";
import MessagesArea from "./messagesArea";
import { useCreateMutation } from "store/services/chatServices";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [sendMessage, response] = useCreateMutation();
  const chatWindowRef = useRef(null);

  const { isLoading, isError, isSuccess, data } = response;

  useEffect(() => {
    if (data) {
      setChat([
        ...chat,
        {
          text: data.text,
          isUser: false,
        },
      ]);
    }
  }, [isSuccess]);

  useEffect(() => {
    // Scroll the chat window to the bottom when the messages change
    if (chatWindowRef.current !== null) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="chatbot">
      <MessagesArea
        chat={chat}
        isLoading={isLoading}
        chatWindowRef={chatWindowRef}
      />
      <ChatFooter
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        chat={chat}
        setChat={setChat}
      />
    </div>
  );
}

export default Chatbot;
