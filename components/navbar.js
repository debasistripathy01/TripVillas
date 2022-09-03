function navbar(){
    return `  <div id="hty"><img src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png" alt=""></div>
    <div>
        <div id=gem>

        <svg id="gemen" width="35" height="22" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><circle fill="none" stroke="rgb(255,255,255)" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle><path fill="none" stroke="rgb(255,255,255)" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path>
         </div>
            <div id="sub_di">
                          
            <h5 id="siin">SIGN IN


               
                                   
            
            
            </h5>


            <h5 id="siup">SIGN UP
            
                  
                 
            
            </h5>

            </div>

    


        </svg>
        <span>INR</span>
        <svg width="20" height="15" stroke="rgb(255,255,255)" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="triangle-down"><polygon points="5 7 15 7 10 12"></polygon></svg>
        <svg width="20" height="20" stroke="rgb(255,255,255)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg>
    </div>`
}
function xyz(){
    document.getElementById("hty").addEventListener("click",()=>{
        window.location.href="./index.html"
    })
}

function svg(){
    document.getElementById("gem").addEventListener("click", () =>{
        document.getElementById("sub_di").style.display ="block";
        document.getElementById("sign_cont").style.display ="none"
        document.getElementById("login_cont").style.display="none"
    })

    
}

function getSign_upDiv(){
    document.getElementById("siup").addEventListener("click", () =>{

        document.getElementById("sign_cont").style.display ="block"

        document.getElementById("sub_di").style.display="none"

        document.getElementById("login_cont").style.display="none"


    })
}

function getLogin_Div(){
    document.getElementById("siin").addEventListener("click" , () =>{
        document.getElementById("sign_cont").style.display ="none"
        document.getElementById("sub_di").style.display="none"
      

        document.getElementById("login_cont").style.display="block"
    })
}

function log_cancel(){
    document.getElementById("log_cancel_otp").addEventListener("click" ,() =>{
        document.getElementById("sign_cont").style.display ="none"
        document.getElementById("sub_di").style.display="none"
        document.getElementById("login_cont").style.display="none"
        document.getElementById("login_email").style.display="none"
    })

    document.getElementById("cancel_login_email").addEventListener("click" ,() =>{
        document.getElementById("sign_cont").style.display ="none"
        document.getElementById("sub_di").style.display="none"
        document.getElementById("login_cont").style.display="none"
        document.getElementById("login_email").style.display="none"

    })
}

function sign_up_cancel(){

    document.getElementById("cancel_sigup").addEventListener("click" ,() =>{
        document.getElementById("sign_cont").style.display ="none"
        document.getElementById("sub_di").style.display="none"
        document.getElementById("login_cont").style.display="none"
        document.getElementById("login_email").style.display="none"
    })

}


function log_inst(){
    document.getElementById("sing_log").addEventListener("click",()=>{
        document.getElementById("login_cont").style.display="block"
        document.getElementById("sign_cont").style.display ="none"

    })
}

function signup_inst(){
    document.getElementById("log_sing").addEventListener("click",()=>{
        document.getElementById("login_cont").style.display="none"
        document.getElementById("sign_cont").style.display ="block"

    })

    document.getElementById("log_sing_email").addEventListener("click" , () =>{
        document.getElementById("login_email").style.display="none"
        document.getElementById("sign_cont").style.display ="block"
    })

}

function login_email(){
    document.getElementById("inner_log_email").addEventListener("click" , () =>{
        document.getElementById("login_email").style.display="block"
        document.getElementById("login_cont").style.display="none"
    })
}

function login_num(){
    document.getElementById("inner_log_e").addEventListener("click" , () =>{
        document.getElementById("login_email").style.display="none"
        document.getElementById("login_cont").style.display="block"
    })

}



function sign(){
    //  event.preventDefault();

    let log = JSON.parse(localStorage.getItem("userdata")) || []

    let user = JSON.parse(localStorage.getItem("user"))  || []

        
    document.getElementById("regist").addEventListener("click", () =>{
        var obj={


            mob  :document.getElementById("inp_num").value,
           email :document.getElementById("email_b").value,
           pass  :document.getElementById("pass_b").value,
           f_name:document.getElementById("last_nam").value,
           l_name:document.getElementById("first_name").value,
       }
       
       console.log(obj)
       
       if(obj.mob == "" || obj.email == "" || obj.pass == "" || obj.f_name== "" || obj.l_name == "")
       {
           alert("Please fill out all data")
       }
       else
       {
            if(log.length <=1)
            {
                log.push(obj);
                console.log(log);
                localStorage.setItem("userdata",JSON.stringify(log));
                var z=1234
                alert(`Please Use This OTP For Sign-Up ${1234}`)
        
                // document.getElementById("sign_cont").style.display = "none";

                document.getElementById("gemen").innerText = log[0].f_name;
        
                

                console.log(log[0].f_name)

                window.location.reload();

                document.getElementById("sign_cont").style.display = "none"

            }

        }
    })

    document.getElementById("gem").innerText = log[0].f_name;

    

    var z= log[0].f_name;

  



   var b = document.getElementById("gem").innerText
    

     b= log[0].f_name

          if(log[0].f_name== document.getElementById("gem").innerText)
          {
            document.getElementById("sign_cont").style.display ="none"
            document.getElementById("sub_di").style.display="none"
            document.getElementById("login_cont").style.display="none"
            document.getElementById("login_email").style.display="none"

            document.getElementById("gem").addEventListener("click" , () =>{
                document.getElementById("sub_di").style.display = "none"
                document.getElementById("sub_d").style.display  = "block"
            })
          }











            document.getElementById("log_otp").addEventListener("click" , () =>{
                alert(`Please Use This OTP for login ${1234}`)

                document.getElementById("gem").innerHTML=""
        
                document.getElementById("gemen").innerText = log[0].f_name

            })


            document.getElementById("log_otp_email").addEventListener("click", () =>{
                var obj={


                   
                   email :document.getElementById("emai_b_email").value,
                   pass  :document.getElementById("pass_b_email").value,
                  
               }
               
               console.log(obj)
               
               if(obj.mob == "" || obj.email == "" || obj.pass == "" || obj.f_name== "" || obj.l_name == "")
               {
                   alert("Please fill out all data")
               }
               else{
                  if(user.length<=1)
                  {
                     user.push(obj)
                     localStorage.setItem("userdata",JSON.stringify(log));
                    var z=1234
                    alert(`Please Use This OTP For Sign-Up ${1234}`)

                    if(log[0].pass == user[0].pass && log[0].email == user[0].email)
                    {
                        document.getElementById("sign_cont").style.display = "none";

                    document.getElementById("gem").innerHTML=""
            
                    document.getElementById("gem").innerText = log[0].f_name

                    }
            
                   
                  }
               }
            })
     
    


}


export {navbar, svg, getSign_upDiv ,getLogin_Div, log_cancel,sign_up_cancel ,log_inst ,signup_inst ,login_email ,login_num,sign,xyz};