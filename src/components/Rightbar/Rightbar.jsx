import Avatar from "boring-avatars";

import "./rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarTabs">
        <div className="rightbarTabL">Contribute</div>
        <div className="rightbarTabR">Suggested</div>
      </div>
      <div className="rightbarTopThree">
        <div className="rightbarTopThreeItem">
          <Avatar size={80} name="top1" variant="beam" />
          <div className="rightbarTopThreeItemName">Rick and ...</div>
          <div className="rightbarTopThreeItemValue">$ 3.87m</div>
        </div>
        <div className="rightbarTopThreeItem">
          <Avatar size={80} name="top2" variant="beam" />
          <div className="rightbarTopThreeItemName">some bd</div>
          <div className="rightbarTopThreeItemValue">$ 3.87m</div>
        </div>
        <div className="rightbarTopThreeItem">
          <Avatar size={80} name="top3" variant="beam" />
          <div className="rightbarTopThreeItemName">asdsacax</div>
          <div className="rightbarTopThreeItemValue">$ 3.87m</div>
        </div>
      </div>
      <ul className="rightbarTopElse">
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">4</span>
          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">5</span>
          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">5</span>
          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">6</span>

          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">7</span>

          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
        <li className="rightbarTopElseItem">
          <span className="rightbarTopElseRank">8</span>

          <Avatar size={54} name="top4" variant="beam" />
          <span className="rightbarTopElseName">somebody</span>
          <span className="rightbarTopElseValue">$ 2.95m</span>
        </li>
      </ul>
    </div>
  );
};

export default Rightbar;
