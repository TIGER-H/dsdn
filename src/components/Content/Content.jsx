import Posts from "../Posts";
import Topic from "../Topic";
import "./content.css";

const Content = () => {
  return (
    <div className="content">
      <Topic />
      <Posts />
    </div>
  );
};

export default Content;
