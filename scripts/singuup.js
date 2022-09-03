// document.getElementById("cancel_sigup").addEventListener("click" ,() =>{
//     document.getElementById("sign_cont").style.display = "none"
// })

var log = JSON.parse(localStorage.getItem("userdata")) || [];

var user = JSON.parse(localStorage.getItem(user))  || []

var z=document.getElementById("gem").innerText;

z=log[0].f_name



// if(log)
// {
//     document.getElementById("regist").addEventListener("click", () =>{
//         sign()
//     })

// }




// var form=document.querySelector("#form");

//  function sign(){
//     //  event.preventDefault();
    

//    var obj={


//      mob  :document.getElementById("inp_num").value,
//     email :document.getElementById("email_b").value,
//     pass  :document.getElementById("pass_b").value,
//     f_name:document.getElementById("last_nam").value,
//     l_name:document.getElementById("first_name").value,
// }

// console.log(obj)

// if(obj.mob == "" || obj.email == "" || obj.pass == "" || obj.f_name== "" || obj.l_name == "")
// {
//     alert("Please fill out all data")
// }
// else
// {
//     if(arr.length <=1)
//     {
//         arr.push(obj);
//         console.log(arr);
//         localStorage.setItem("userdata",JSON.stringify(arr));
//         var z=1234
//         alert(`Please Use This OTP For Sign-Up ${1234}`)

//         document.getElementById("sign_cont").style.display = "none";

//         document.getElementById("gemen").innerText = log[0].f_name

//     }
    
// }
// // else{
// //     alert("Password Mismatched")
// // }

// }