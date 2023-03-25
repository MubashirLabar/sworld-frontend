import AIMessage from "./AIMessage";
import UserMessage from "./UserMessage";

function Message({ message, chatWindowRef }) {
  return (
    <>
      {message?.isUser ? (
        <UserMessage message={message} />
      ) : (
        <AIMessage message={message} chatWindowRef={chatWindowRef} />
      )}
    </>
  );
}

export default Message;
