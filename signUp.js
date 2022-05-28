
// password eye icon or hide or show password JS code

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');

  
});
//     import{hints,validation,register,check} from "./signUp.js"
// console.log(check);
// function hints_text(){
// console.log("calling hints function")
// //document.querySelector('#hint_heading').innerHTML='';
//     let div1=document.createElement('div');
//     let div2=document.createElement('div');
//     let h4=document.createElement('h4');
//     h4.innerText="Your password must contain:";
//     let point1=document.createElement('p');
//     point1.innerText="8-20 charaters";
//     let point2=document.createElement('p');
//     point2.innerText="No more than 2 identical characters in a row";
//     let point3=document.createElement('p');
//     point3.innerText="A lowercase letter(a-z)";
//     let point4=document.createElement('p');
//     point4.innerText="An uppercase letter (A-Z)";
//     let point5=document.createElement('p');
//     point5.innerText="Number or special character";
//     div1.setAttribute('id',"hint_heading");
//     div2.setAttribute('id',"hints")
   
//    div1.append(h4);
  
//     div2.append(point1,point2,point3,point4,point5);
//     document.querySelector('#password_div').append(div1,div2);
    

//     }
    

    function validation(){
      
      let user=document.getElementById('first_name').value;
      console.log(user.length)
      let surname=document.getElementById('surname').value;
      let birthaday=document.getElementById('birthaday').value;
      let gender=document.getElementById('gender').value;
      let postal=document.getElementById('postal').value;
     
      let prefered_store=document.getElementById('prefered_store').value;
      let email=document.getElementById('email').value;
      let password=document.getElementById('password').value;
      
      


      if(user.length===0){
          document.getElementById('username').innerHTML=" * please enter name field";
         
        return false;
      }
      
      if(surname.length==0){
          document.getElementById('surname_text').innerHTML=" * please enter username field";
          return false;
      }

      
      if(birthaday.length===0){
        document.getElementById('number_text').innerHTML=" * please enter birthaday field";
        return false;
    }

    
    if(gender.length===0){
      document.getElementById('gender_text').innerHTML=" * please enter gender field";
      return false;
    }

  
        if(postal.length<5){
          document.getElementById('postal_text').innerHTML=" * please enter postal field";
          return false;
      }


      if(prefered_store.length===0){
        document.getElementById('prefered_store_text').innerHTML=" * please enter prefered_store field";
        return false;
      }

      let email_validation=email.includes("@");
      if(email_validation){
        
      }else{
        document.getElementById('email_text').innerHTML=" * please enter email field";
        return false;
      }

      if(password.length>0){
        
      }else{
        document.getElementById('password_text').innerHTML=" * please enter password field";
        return false;
      }

    register();
   
  }
// let valid=;

// console.log(valid);


    const register=async()=>{
        event.preventDefault();
        try {
              let registrationData={
                firstName:document.getElementById('name').value,
                surname:document.getElementById('surname').value,
                mobile:document.getElementById('number').value,
                birthDate :document.getElementById('birthaday').value,
                gender:document.getElementById('gender').value,
                postalCode:document.getElementById('postal').value,
                preStore:document.getElementById('prefered_store').value,
                email:document.getElementById('email').value,
                password:document.getElementById('password').value,

              };

              //console.log( await registrationData.email);
              let exist_email=await check(registrationData.email);
              //console.log(exist_email);
              if(exist_email){
                let res=await fetch(`http://localhost:3000/users`,{
                  method:"POST",
                  body:JSON.stringify(registrationData),
                  headers:{
                    "Content-Type":"application/json"
                  }
                });
                let data= await res.json();
                console.log("DATA",data.email);
                
                //alert("Ikea account created succusfully");
                window.location.href="./login.html";
              }else{
                console.log(alert("CHOOSE ANOTHER EMAIL"));
              }
              
      } catch (error) {
          console.log(error);
        }
      }
   
      
//  function goto(){
//   window.location.href="index.html"
//  }
   
 

// var lable=document.getElementById('name').innerText;
//   console.log(lable);
// if(document.getElementById('name').innerText.length>0){
//   var lable=document.getElementById('name_label').innerText;
//   console.log(lable);
// }
// let check="VENKY";
// export{hints,validation,register,check}
// function back_navigation(){
//   alert("done");
//   window.location.href="./login.html"
// }
async function check(x){
  

    // let email=document.getElementById("forgot_password_request").value;
  
    try{
      //console.log(x);
      let res= await fetch(`http://localhost:3000/users?email=${x}`);
  
      let data= await res.json();
      //console.log(data);
     var f=data[0].email;
     // console.log(f,"EMPTY");
      if(f===x){
        ///console.log("DID?");
        return false;
      }
    }catch (error) {
      console.log(error);
      }

    return true;
}
  

function disableSubmit() {
  document.getElementById("submit").disabled = true;
 }

  function activateButton(element) {

      if(element.checked) {
        document.getElementById("submit").disabled = false;
       }
       else  {
        document.getElementById("submit").disabled = true;
      }

  }




  