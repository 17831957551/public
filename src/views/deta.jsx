import { Arrow, ArrowLeft,Contact } from "@react-vant/icons";
import { List } from "antd";
import  { useState } from 'react';
import '../css/detail.css'
const data = [
  {
    navigator:  <Contact  />,
    active:'        ',
    title: "头像",
    navigate: <Arrow />,
  },
  {
    title: "密码",
    active:'***********',
    navigate: <Arrow />,
  },
  {
    title: "消息",
    active:'150******37',
    navigate: <Arrow />,
  },
  {
    title: "手机号",
    active:'小白鹿',
    navigate: <Arrow />,
  },
  {
    title: "昵称",
    active:'如鲸入海',
    navigate: <Arrow />,
  },
  {
    title: "签名",
    active:'请选择',
    navigate: <Arrow />,
  },
  {
    title: "性别",
    active:'请选择',
    navigate: <Arrow />,
  },
  {
    title: "生日",
    active:'请选择',
    navigate: <Arrow />,
  },
  {
    title: "身高",
    active:'请选择',
    navigate: <Arrow />,
  },
  {
    title: "体重",
    active:'请选择',
    navigate: <Arrow />,
  },
  {
    title: "爱好",
    active:'请选择',
    navigate: <Arrow />,
  },
];
export function Deta() {
  const [avatar, setAvatar] = useState(null);
  const handleAvatarUpload = () => {
    // 创建一个隐藏的文件输入元素
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*'; // 只接受图片文件

    // 监听文件选择事件
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // 使用FileReader读取文件
        const reader = new FileReader();
       reader.onload = (e) => {
          setAvatar(e.target.result); // 设置头像URL
        };
        reader.readAsDataURL(file); // 读取文件为Data URL
      }
    };

    // 触发文件输入元素的点击事件
    input.click();
  };
  return (
    <div className="xiang">
      <div className="back">
          <p onClick={()=>{
            window.history.back()
          }}><ArrowLeft  /></p>
          <p>个人信息</p>
      </div>
      <div className="avatar-container">
        {/* 如果avatar有值，则显示图片，否则显示默认内容 */}
        {avatar ? (
          <img src={avatar} alt="Avatar" onClick={handleAvatarUpload} />
        ) : (
          <div className="tu" onClick={handleAvatarUpload}> <Contact  />
          </div>
        )}
      </div>
      <List
          itemLayout="horizontal"
          dataSource={data}
          className="listitem"
          renderItem={item => (
            <List.Item className="list">
              <List.Item.Meta
                className="list-left"
             
                title={item.title}
              />
              <List.Item.Meta
                className="list-right"
                avatar={item.active}
                description={item.navigate}
                // width={contentWidth}
              />
            </List.Item>
          )}
        />
  
    </div>
  )
}
