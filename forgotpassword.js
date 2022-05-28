const forgot=async()=>{
    
    let inputValue=document.getElementById("forgot_password_request").value;
    if(inputValue.includes("@")){
        try {
            var res = await fetch(`http://localhost:3000/users?email=${inputValue}`);
            var data=await res.json();
            var p=data[0].password;
            alert("Your password is:"+p);
            window.location.href="./login.html"
        } catch(error) {
            document.querySelector("#error_text").innerHTML="*please enter valid email or your mobile number";
        }
    }
    else{
        try {
        var res =fetch(`http://localhost:3000/users?number=${inputValue}`);

            var data= await res.json();
            var p=data[0].password;
            alert("Your password is:"+p);
            window.location.href="./login.html"
        } catch (error) {
        
        document.querySelector("#error_text").innerHTML="*please enter valid email or your mobile number";   }
    }


}
