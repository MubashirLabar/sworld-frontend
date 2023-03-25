import { useRef, useEffect } from "react";
import LoaderDot from "components/atoms/LoaderDot";
import Message from "./message";

function MessagesArea({ chat, isLoading, chatWindowRef }) {
  const messagesEndRef = useRef(null);

  // Scroll to the bottom of the chat window when the component mounts
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chatbot_messages-area" ref={chatWindowRef}>
      {chat?.length > 0
        ? chat.map((message, index) => (
            <Message
              key={index}
              message={message}
              chatWindowRef={chatWindowRef}
            />
          ))
        : null}
      {isLoading && (
        <div className="message-loader">
          <LoaderDot />
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default MessagesArea;
