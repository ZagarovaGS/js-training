import {INVALID_CLASS} from "./constans.js";
import {initLogin} from "./login.js";
import {initRegister} from "./register.js";


const {loginForm, setDisableButtonState} = initLogin();



document.getElementById("container");
document.getElementById("loginForm");
document.getElementById("registerForm");

const {registerForm, setDisableButtonState2} = initRegister();

const setLoginBtn = document.getElementById("setLoginBtn");
const setRegisterBtn = document.getElementById("setRegisterBtn");

setLoginFormActive();

function setLoginFormActive(){
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    setLoginBtn.classList.add("active-btn");
    setRegisterBtn.classList.remove("active-btn");
    //setDisableButtonState();
}


function setRegisterFormActive(){
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    setLoginBtn.classList.remove("active-btn");
    setRegisterBtn.classList.add("active-btn");
    //registerBtn.disabled = !formHelper.checkFormValidation();
}

 //loginForm
 setLoginBtn.addEventListener("click", setLoginFormActive);

 setRegisterBtn.addEventListener("click", setRegisterFormActive);