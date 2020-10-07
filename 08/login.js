export function initLogin(){

const input = document.getElementById("email");
const buttom = document.getElementById("login");
const div = document.getElementById("message");

const user = {
    email: "222@mail.ru",
    name: "Nic",
    password: "3333",
}

input.addEventListener("input", (event) =>{
    const isValid = event.target.value;
    if (!isValid){
       event.target.classList.add("invalid");
    } else{
    event.target.classList.remove("invalid"); 
    }
    console.log(isValid);
});


 const input2 = document.getElementById("password");
 input2.addEventListener("input", (event) =>{
    const isValid = event.target.value;
 })
console.log(input2);

 

 buttom.addEventListener("click", function(event){

    let myEmail = document.querySelector("#email").value;
    let myPassword = document.querySelector("#password").value;
   

    if (myEmail && myPassword){
       console.log(user);
        if (myEmail === user.email && myPassword === user.password){   
            div.innerText = `Hello, ${user.name}` ;    
    }
        else if (myEmail !== user.email || myPassword !== user.password) {
            
            div.innerText = "Вы ввели неверный пароль. Попробуйте снова." ;
        }
    }    
       else setDisableButtonState();
    
    })
    function setDisableButtonState(){
        if (email.value === "" || password.value === ""){
        buttom.disabled = true;
    } else {
        buttom.disabled = false;  
    }
    }
    return {loginForm, setDisableButtonState};
}
