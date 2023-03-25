import { SearchIcon } from "assets/icons";

function ChatFooter({ message, setMessage, sendMessage, chat, setChat }) {
  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSendButton = (e) => {
    setChat([
      ...chat,
      {
        text: message,
        isUser: true,
      },
    ]);
    sendMessage({ prompt: message });
    setMessage("");
  };

  return (
    <div className="chatbot_chat-footer">
      <div className="message-field">
        <input
          className="input"
          placeholder="Ask to our Artificial Intelligence"
          value={message}
          onChange={handleInput}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendButton();
            }
          }}
        />
        <button
          className="search-btn"
          onClick={handleSendButton}
          disabled={!message}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
