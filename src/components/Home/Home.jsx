import Content from "../Content";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Content />
      <Rightbar />
    </div>
  );
};

export default Home;
