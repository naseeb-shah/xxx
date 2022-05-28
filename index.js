// import {v4 as uuid} from 'uuid';

// const user={
//     name:"venky",
//     id:uuid()
// }
// console.log(user);
curname=localStorage.getItem('name')
   if(curname!=null){
     document.getElementById('username').innerText=curname
     document.getElementById('xxx').style.display='none'
   }
function shopnow(){
    window.location.href="./login.html"
}