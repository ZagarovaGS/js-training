export function initRegister(){

const form = document.forms.registerForm;
const btn = document.getElementById("btn");
document.getElementById("container");
document.getElementById("registerForm");

const formHelper = {
   login: {
       value: "",
       valid: false,
       checkValidation(){
        this.login.valid = this.login.value.match(/,|\./g);
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
return {registerForm, setDisableButtonState};
}