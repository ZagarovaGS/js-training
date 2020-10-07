import {INVALID_CLASS} from "./constans.js";
import {initLogin} from "./login.js";
import {initRegister} from "./register.js";
const input = document.getElementById("email");
const buttom = document.getElementById("login");
const div = document.getElementById("message");

const {loginForm, setDisableButtonState} = initLogin();
INVALID_CLASS = "invalid";


const form = document.forms.registerForm;
const btn = document.getElementById("btn");

document.getElementById("container");
document.getElementById("registerForm");

const {RegisterForm, setDisableButtonState2} = initRegister();

