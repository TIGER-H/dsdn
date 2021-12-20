import "./topic.css";

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
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.35417 10.875C4.0466 10.8729 4.71284 10.6101 5.22012 10.1387L10.176 12.9705C9.83271 14.3118 10.5263 15.7017 11.8044 16.2339C13.0825 16.7662 14.5576 16.2793 15.2677 15.0908C15.9779 13.9023 15.7079 12.3727 14.6336 11.4992C13.5594 10.6258 12.0068 10.6735 10.9882 11.6112L6.03237 8.77945C6.08433 8.58078 6.11302 8.37674 6.11787 8.17145L10.9874 5.38874C11.954 6.26744 13.4039 6.34891 14.4628 5.58403C15.5217 4.81914 15.9 3.41705 15.3696 2.22333C14.8391 1.02961 13.545 0.370686 12.2676 0.643938C10.9903 0.91719 10.079 2.0479 10.0833 3.35416C10.0862 3.58222 10.1173 3.80905 10.176 4.02945L5.67612 6.59999C4.95531 5.48486 3.54474 5.03784 2.31321 5.53426C1.08168 6.03067 0.375433 7.33096 0.629455 8.63425C0.883477 9.93753 2.02635 10.8774 3.35417 10.875Z"
            fill="#52C3E6"
          />
        </svg>
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
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM7.99 8.99V11H8.99V15H12.01V13H11L11.01 8.991L7.99 8.99ZM8.99 5V7.019H11.01V5H8.99Z"
            fill="#978EF8"
          />
        </svg>
      </div>
    </div>
  );
};

export default Topic;
