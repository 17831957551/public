import { useRoutes } from 'react-router-dom'
import router from './router/index'
function App() {
  return (
    
    <div>
      {/* 判断是否有token ,有跳转index页面，没有跳转登录页*/}
     
      
      {useRoutes(router)}
    </div>
  )
}
export default App