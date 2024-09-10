// eslint-disable-next-line no-unused-vars


import { useState,useEffect } from "react";
import {gethomeList} from '../api/user'
import {
  AudioOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Input, Space, Menu,Carousel,Card, } from "antd";


import { Outlet, useNavigate } from "react-router-dom";

import "../App.css";
const { Search } = Input;


const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
 

const items = [
  {
    label: " 首页",
    key: "One",
    icon: <MailOutlined />,
  },
  {
    label: "商城",
    key: "two",
    icon: <AppstoreOutlined />,
  },
  {
    label: "我的",
    key: "my",
    icon: <SettingOutlined />,
  },
];



const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export function Home() {
  
  const navigate = useNavigate();

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  
  const [arr,setArr] = useState([])
  const getList =async()=>{
    const res= await gethomeList()
    setArr(res)
    console.log(res);
}

  useEffect(()=>{ 
    getList()
  },[])


  let gohome =(id)=>{
    navigate('/detail',{state:{id}})
  }

  return (
    <div className="box">
      <div className="top-1">
        <Search
          placeholder="input search text"
          style={{
            width: 300,
          }}
        />
        <button onClick={()=>{
          console.log("111")
          navigate("/search")
        }}>搜索</button>
      </div>

      <div className="top-2">
        <Menu
          onSelect={(e) => navigate(e.key)}
          onClick={() => {}}
          mode="horizontal"
          items={items}
        />
        <Outlet />
      </div>

  
    </div>
  );
}
