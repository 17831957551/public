import { useNavigate } from "react-router-dom";
import {
  LikeO,
  Arrow,
  CouponO,
  VolumeO,
  SettingO,
  Edit,
} from "@react-vant/icons";
import { List } from "antd";
import "../css/my.css";
const data = [
  {
    navigator: <LikeO />,
    title: "活动",
    navigate: <Arrow />,
  },
  {
    navigator: <CouponO />,
    title: "收藏",
    navigate: <Arrow />,
  },
  {
    navigator: <VolumeO />,
    title: "消息",
    navigate: <Arrow />,
  },
  {
    navigator: <SettingO />,
    title: "设置",
    navigate: <Arrow />,
  },
  {
    navigator: <Edit />,
    title: "意见反馈",
    navigate: <Edit />,
  }
];

export function My() {
  const navigate = useNavigate();
  return (
    <div className="my">
      <div className="top">
        <p></p>
        <p>小白鹿</p>
        <p
          onClick={() => {
            navigate("/deta");
          }}
        >
          更改
        </p>
      </div>
      <ul className="main">
        <li>
          <p>2000</p>
          <p>nolo币</p>
        </li>
        <li>
          <p>3000</p>
          <p>积分</p>
        </li>
        <li>
          <p>20</p>
          <p>游戏</p>
        </li>
        <li>
          <p>30</p>
          <p>评论</p>
        </li>
      </ul>
      <div className="bottom">
        <List
          itemLayout="horizontal"
          dataSource={data}
          className="listitem"
          renderItem={item => (
            <List.Item className="list">
              <List.Item.Meta
                className="list-left"
                avatar={item.navigator}
                title={item.title}
              />
              <List.Item.Meta
                className="list-right"
                description={item.navigate}
              />
            </List.Item>
          )}
        />
      
      </div>
    </div>
  );
}
