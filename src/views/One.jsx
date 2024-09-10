import { useState,useEffect } from "react";
import {gethomeList} from '../api/user'
import {Space,Carousel,Card, } from "antd";
import {useNavigate } from "react-router-dom";

import "../App.css";
export  function One() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
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
    <div>
              <Carousel autoplay>   
    <div>
      <h3 style={contentStyle}>
        <img src="https://img0.baidu.com/it/u=2109853420,2168998653&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1726074000&t=9f0c92edbe8e752ff5583eaee02061ba" alt="" width='100%' height='100%'/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src="https://img0.baidu.com/it/u=1541869955,1932007990&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1726074000&t=15c9d7b21080f923d7d5edd299bd9d36" alt="" width='100%' height='100%'/>
      </h3>
    </div>
  </Carousel>

  <div className='top-3'>
<div>
<Space direction="vertical" size={16}>
    <Card
      title="活动入口"
      extra={<a href="#">火热</a>}
      style={{
        width: 150,
      }}
    >
     <img src="https://img0.baidu.com/it/u=2109853420,2168998653&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1726074000&t=9f0c92edbe8e752ff5583eaee02061ba" alt=""  width='100px' height='100px'/>
    </Card>
  
  </Space>
</div>
<div>
<Space direction="vertical" size={16}>
    <Card
      title="卡路里功能入口"
      
      extra={<a href="#">火热</a>}
      style={{
        width: 150,
      }}
    >
     <img src="https://img0.baidu.com/it/u=1541869955,1932007990&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1726074000&t=15c9d7b21080f923d7d5edd299bd9d36" alt=""  width='100px' height='100px'/>
    </Card>
  
  </Space>
</div>

  </div>


  <div className='top-4'>
    <h4>休闲必玩</h4>
    <div>
      {
        arr.map(item=>{
        return (
           <div key={item.id}  className='top-div' onClick={()=>{
            gohome(item.id)
            console.log(item.id)
           }}>
              <div className='div-left'>
                <img src={item.src} alt=""  width="100%" height="100%"/>
              </div>
              <div className='div-reigit'>
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>{item.plice}</p>
              </div>
          </div>
        )
        })
      }
    </div>
  </div>
    </div>
  )
}
