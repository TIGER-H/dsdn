import Avatar from "boring-avatars";
import { useEffect, useState } from "react";
import { bronzeMedal, goldMedal, silverMedal } from ".";
import { MdFavoriteBorder } from "react-icons/md";

import "./rightbar.css";
import { instance } from "../../service";

const Rightbar = () => {
  const [rankList, setRankList] = useState([]);

  useEffect(() => {
    instance.get("ranklist/likeList?num=15").then((res) => {
      setRankList(res.data.data);
    });
  }, []);

  return (
    <div className="rightbar">
      <div className="rightbarTabs">
        <div className="rightbarTabL">Contribute</div>
        <div className="rightbarTabR">Suggested</div>
      </div>
      <div className="rightbarTopThree">
        <div className="rightbarTopThreeItem">
          <Avatar size={80} name="top2" variant="beam" />
          <div className="rightbarTop3Badge">{silverMedal}</div>
          <div className="rightbarTopThreeItemName">
            {(rankList && rankList[1]?.nickName) || "top2"}
          </div>
          <div className="rightbarTopThreeItemValue">
            {<MdFavoriteBorder />}
            {(rankList && rankList[1]?.num) || 0}
          </div>
        </div>
        <div className="rightbarTopThreeItem">
          <Avatar size={80} name="top1" variant="beam" />
          <div className="rightbarTop3Badge">{goldMedal}</div>
          <div className="rightbarTopThreeItemName">
            {(rankList && rankList[0]?.nickName) || "top1"}
          </div>
          <div className="rightbarTopThreeItemValue">
            {<MdFavoriteBorder />}
            {(rankList && rankList[0]?.num) || 0}
          </div>
        </div>
        <div className="rightbarTopThreeItem">
          <div className="rightbarTop3Badge">{bronzeMedal}</div>
          <Avatar size={80} name="top3" variant="beam" />
          <div className="rightbarTopThreeItemName">
            {(rankList && rankList[2]?.nickName) || "TOP3"}
          </div>
          <div className="rightbarTopThreeItemValue">
            {<MdFavoriteBorder />}
            {(rankList && rankList[2]?.num) || 0}
          </div>
        </div>
      </div>
      <ul className="rightbarTopElse">
        {rankList &&
          rankList.slice(3).map((item, index) => (
            <li className="rightbarTopElseItem" key={index}>
              <span className="rightbarTopElseRank">{index + 4}</span>
              {item?.imageUrl ? (
                <img src={item.imageUrl} alt="not found" />
              ) : (
                <Avatar size={54} name={`top${index + 4}`} variant="beam" />
              )}
              <span className="rightbarTopElseName">
                {item?.nickName || `top ${index + 4}`}
              </span>
              <span className="rightbarTopElseValue">{item?.num || 0}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Rightbar;
