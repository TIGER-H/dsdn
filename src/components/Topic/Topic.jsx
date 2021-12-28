import "./topic.css";
import { FaInfoCircle } from "react-icons/fa";
import { MdShare } from "react-icons/md";

const Topic = () => {
  return (
    <div className="topic">
      <p>Topics</p>
      <div className="topicBottom">
        <TopicCard topicContent={"CSS Annual Report"} color={"#6BAED7"} />
        <TopicCard topicContent={"OpenGL Open function"} color={"#978EF8"} />
        <TopicCard topicContent={"2022 Net Conference"} color={"#7690F7"} />
      </div>
      <div className="topicRules">
        <MdShare />
        <span>Rules</span>
      </div>
    </div>
  );
};

const TopicCard = ({ topicContent, color }) => {
  return (
    <div className="topicCard">
      <div className="topicCardTop" style={{ color: color }}>
        Trending
      </div>
      <div className="topicContent">#{topicContent}</div>
      <div className="topicIcon">
        <FaInfoCircle style={{ color: color }} />
      </div>
    </div>
  );
};

export default Topic;
