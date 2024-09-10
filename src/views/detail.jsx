import { useEffect, useState } from 'react'
import { Toast, NavBar, Card,Flex   } from 'react-vant'
import { Search } from '@react-vant/icons'
import "../App.css";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {gethomeList} from '../api/user'

export  function Detail() {
      const {state} = useLocation()
      console.log(state.id);

      const [gameItem,setItem] = useState({})

      const getList =async()=>{
        const res= await gethomeList()
        setItem(...res.filter(item=>item.id==state.id))
    }
    
      useEffect(()=>{ 
        getList()
      },[])

      const navigate = useNavigate()
      
    return (
      <div>
            <NavBar
              title='详情'
              leftText='返回  '
              onClickLeft={() => navigate('/One')}
              rightText={<Search fontSize={20} />}
              onClickRight={() => Toast('按钮')}
            />

          <img src={gameItem.src}  width="100%" height="70%"/>

          <Card title="Card title" bordered={false} style={{ width:'100%' }}>
          <Flex justify='center' align='center'>
            <Flex.Item span={12} justify='center' align='center'><img src={gameItem.src}  width="80%" height="80%"/></Flex.Item>
            <Flex.Item span={12} >
              <h4>{gameItem.name}</h4>
              <p>{gameItem.title}</p>
              <p>{gameItem.plice}</p>
            </Flex.Item>
          </Flex>
          </Card>

          <img src={gameItem.src}  width="100%" height="70%"/>

          <div>
            <h4>关于此应用</h4>
            <p>
            提供应用内购买项目

结缔信仰，燃战荣耀!《荣耀大天使》是一款大型多

人在线魔幻3D角色扮演手游，游戏不仅采用当前最先

进的3D实时成像的引擎，创造独有的细微的人物肢体

动作，同时在美术上，游戏独创暗黑魔幻特有的华丽

世界背景，游戏内的全部角色，均是由次世代标准的

3D模型烘培而成，并且大规模运用了动态的特效，配

合精美的画面表现与极具视觉冲击力的变身特效，将

硬核魔幻题材最激动人心的一面呈现给大家，让玩家

真正的体验回到当年跟兄弟一起浴血奋战，纵横大陆

的畅快感!伟大的勇士，您准备好了吗?准备好行

囊，一起战斗吧!
            </p>
          </div>

          <Flex justify='center' align='center'>
            <Flex.Item span={12}>    <Card round>
      <Card.Header>天空之翼</Card.Header>
    </Card></Flex.Item>
            <Flex.Item span={12}>    <Card round>
      <Card.Header>天空之翼</Card.Header>
    </Card></Flex.Item>
          </Flex>

      </div>
    )
  }
  