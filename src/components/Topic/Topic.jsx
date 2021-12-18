import "./topic.css";

const Topic = () => {
  return (
    <div className="topic">
      <p>Topic</p>
      <div className="topicBottom">
        <TopicCard topicContent={"CSS Annual Report"} color={"#6BAED7"} />
        <TopicCard topicContent={"OpenGL Open function"} color={"#978EF8"} />
        <TopicCard topicContent={"2022 Net Conference"} color={"#7690F7"} />
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
    </div>
  );
};

export default Topic;
