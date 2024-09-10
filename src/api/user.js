import request from "../request/index.js";


export async function getUser({username,password}){
   return await request.get("/users?username="+username+"&password="+password)
}


export async function gethomeList(){
   return request.get('/homeList')
}


