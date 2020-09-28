const input = document.getElementById("email");

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

 const buttom = document.getElementById("login");
 const div = document.getElementById("message");

 buttom.addEventListener("click", function(event){

    let myEmail = document.querySelector("#email").value;
    let myPassword = document.querySelector("#password").value;
   

    if (myEmail && myPassword){
        email.remove();
        password.remove();
        login.remove();
        if (myEmail === user.email && myPassword === user.password){
        div.innerText = `Hello ,${user.name}`        
    }
        else{
            div.innerText = "Вы ввели неверный пароль. Попробуйте снова."  
        }
    }
    else  {
        event.preventDefault()
    } 
})
 