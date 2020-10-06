// не сообразила, как сделать. Гуглить надо. Посмотрю в среду
//да и не поняла задачу. Код по ссылке не работает. Который как образец, что должно получиться скинул. 
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
       console.log(user);
        if (myEmail === user.email && myPassword === user.password){        
    }
        else{
            div.innerText = "Вы ввели неверный пароль. Попробуйте снова."  
        }
    }
    else  {
        event.preventDefault()
        event.target.style.display = "none";
    } 
})
 


const form = document.forms.registerForm;
const btn = document.getElementById("btn");
const INVALID_CLASS = "invalid";
document.getElementById("container");
document.getElementById("registerForm");

const formHelper = {
   login: {
       value: "",
       valid: false,
       checkValidation(){
        this.login.valid = this.login.value.match(/[^,][^\.]/);
        //прости, немного неверное регулярное выражение. Не воспринимает точку и запятую только в начале слова
        //пока не буду на нем зацикливаться
        }
   },
   name: {
    value: "",
    valid: false,
    checkValidation(){
        this.name.valid = this.name.value !=="";
    }
},
   age: { //проверяю, но я ему по умолчанию number поставила
    value: "",
    valid: false,
    checkValidation(){
        
        this.age.valid = this.age.value.match(/\d/)  ;
    }

},
   email: {
    value: "",
    valid: false,
    checkValidation(){
        
        this.email.valid = this.email.value.match(/\b[A-z0-9._%+-]+@[A-z0-9]+\.[A-z]+\b/);
    }
},
   city: {
    value: "",
    valid: false,
    checkValidation(){
        this.city.valid = this.city.value !=="";
    }
},
   password: {
    value: "",
    valid: false,
    checkValidation(){
        this.password.valid = this.password.value !=="";
    }
},
   repeatPassword: {
    value: "",
    valid: false,
    checkValidation(){
        this.repeatPassword.valid = this.password.value === this.repeatPassword.value;
    }
},
checkFormValidation(){
    for (const key in this){
        if (typeof this[key] !== "function" && this[key].valid === false){
            return false
        }
    }
    return true;
},
getValue(){
    return{
        login: this.login.value,
        name: this.name.value,
        age: this.age.value,
        city: this.city.value,
        email: this.email.value,
        password: this.password.value,
      
    }
}
};




form.addEventListener ("input", (event) => {
    const value = event.target.value;
    const name = event.target.name;
    formHelper[name].value = value;
    const bindedValidator = formHelper[name].checkValidation.bind(formHelper);
    bindedValidator();

    btn.disabled = !formHelper.checkFormValidation();
    console.log(formHelper);
    console.log(btn);
    handleClassAdding(event.target, formHelper[name].valid);

  
})

function handleClassAdding(domNode, isValid){
    if (isValid){
        domNode.classList.remove(INVALID_CLASS);
    }
    else{
        domNode.classList.add(INVALID_CLASS);  
    }
}

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const user = formHelper.getValue();   
    console.log(user);
    if (!INVALID_CLASS){
    event.style.display = "none";
    }
})






