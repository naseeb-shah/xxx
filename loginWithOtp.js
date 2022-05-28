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
        var res =fetch(`http://localhost:3005/users?number=${inputValue}`);

            var data= await res.json();
            var p=data[0].password;
            alert("Your password is:"+p);
            window.location.href="./login.html";
        } catch (error) {
        
        document.querySelector("#error_text").innerHTML="*please enter valid email or your mobile number";   }
    }


}


const { Auth } = require("two-step-auth");

async function login(emailId) {
const res = await Auth(emailId);
// You can follow this approach,
// but the second approach is suggested,
// as the mails will be treated as important
// const res = await Auth(emailId, "Company Name");
console.log(res);
console.log(res.mail);
console.log(res.OTP);
console.log(res.success);
}

login("agrud422@gmail.com");


// $('.digit-group').find('input').each(function() {
// 	$(this).attr('maxlength', 1);
// 	$(this).on('keyup', function(e) {
// 		var parent = $($(this).parent());
    
// 		if(e.keyCode === 8 || e.keyCode === 37) {
// 			var prev = parent.find('input#' + $(this).data('previous'));
        
// 			if(prev.length) {
// 				$(prev).select();
// 			}
// 		} else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
// 			var next = parent.find('input#' + $(this).data('next'));
        
// 			if(next.length) {
// 				$(next).select();
// 			} else {
// 				if(parent.data('autosubmit')) {
// 					parent.submit();
// 				}
// 			}
// 		}
// 	});
// });


