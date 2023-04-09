import { useEffect, useState, useRef } from "react";
import ChatFooter from "./chatFooter";
import MessagesArea from "./messagesArea";
import { useAnswerMutation } from "store/services/chatServices";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [createAnswer, answerResponse] = useAnswerMutation();
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (answerResponse?.data) {
      setChat([
        ...chat,
        {
          answer: answerResponse.data?.text,
          places: answerResponse.data?.places,
          isUser: false,
        },
      ]);
    }
  }, [answerResponse.isSuccess]);

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
        answerLoading={answerResponse.isLoading}
        chatWindowRef={chatWindowRef}
      />
      <ChatFooter
        message={message}
        setMessage={setMessage}
        createAnswer={createAnswer}
        chat={chat}
        setChat={setChat}
      />
    </div>
  );
}

export default Chatbot;
