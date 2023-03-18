import { Link } from "react-router-dom";
import Chatbot from "components/chatbot";

function Explore() {
  return (
    <div className="explore-section">
      <div className="wrap app-width">
        <div className="chat-block">
          <Chatbot />
        </div>
        <div className="actions">
          <Link
            to="/search"
            className="action"
            onClick={() => (document.documentElement.scrollTop = 0)}
          >
            Explore now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Explore;
