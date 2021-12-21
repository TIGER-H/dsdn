import Content from "../Content";
import Rightbar from "../Rightbar";
import Sidebar from "../Sidebar";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <SidebarPlaceholder />
      <Content />
      <Rightbar />
    </div>
  );
};

const SidebarPlaceholder = () => {
  return <div className="sidebarPlaceholder" style={{ width: "15rem" }}></div>;
};

export default Home;
