function myFunction() {
    //night mode
    document.body.style.backgroundColor = "black";
 document.querySelector(".title").style.color = "#fff";
 document.querySelector(".line").style.backgroundColor = "#fff";

}
function myFunction2(){
    //normal mode
    document.body.style.backgroundColor = "white";
    document.querySelector(".title").style.color = "#000";
    document.querySelector(".line").style.backgroundColor = "#000";
}

//onchange 
function checkEmail(str)
{
    //valid... email
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(str))
   //return message in div and  //onfouse genrate... error
    document.getElementById("message").innerHTML = "Please enter a valid email address";  
   
}
//onfouse hide error
function emailerror(){
    document.getElementById("message").innerHTML = " ";  
  }

function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
         //onfouse genrate... error
       document.getElementById("password-message").innerHTML = "Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
         //onfouse genrate... error
       document.getElementById("password-message").innerHTML = "Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
        //onfouse genrate... error
       document.getElementById("password-message").innerHTML = "Password length must not exceed 15 characters";  
       return false;  
    } 
  } 
  //onfouse hide error
  function passworderror(){
    document.getElementById("password-message").innerHTML = " ";  
  }
//confrm passcode func
  function matchPassword() {
 //get values
    var pw1 = document.getElementById("pswd");
    var pw2 = document.getElementById("repeat");
    //compre password and confr password
    if(pw1 === pw2)
    {	
        document.getElementById("rep-password").innerHTML = "Password created successfully";  
    } else {
         //onchange genrate... error
        document.getElementById("rep-password").innerHTML = "Passwords did not match";  
    }
  }
  //onfouse hide error
  function repeaterror(){
    document.getElementById("rep-password").innerHTML = " ";  
  }
  