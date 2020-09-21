 //Задание 1

/* const car = {
     brand: 'porsche',
     model: 'panamera',
     owner: 'mayor'
 };
  for (let key in car){
     alert(key);
     alert(car[key]);
  }*/


  
  //Задание 2

  const user = {
      name: 'name',
      email: 'email',
      phone: 'phone',
      id: 'id'
  };
 
  let newUser = {};
  Object.assign(newUser,[user]);
 
  //Задание 3

  const circle = {
      radius: 0,
      color: 'color',
      calculateCircumference: function (radius){
      return 2*Math.PI*radius
      }    
  };
  
  console.log(circle.calculateCircumference(12));


  //Задание 4

const  message = {
      text: " ",
      getMessage: function (string){
          return String(text = string);
      },
      showMessage: function(){
          return alert(text);
      }
}

message.getMessage('Hello, world');
message.showMessage();

//Задание 5

const rectangle = {
   width: 10,
   height: 20,
   getArea: function(){
       return this.width*this.height
   }
}
console.log(rectangle.width);       // => 10
console.log(rectangle.height);      // => 20
console.log(rectangle.getArea());   // => 200


//Задание 6

const obj = {};

function isEmpty(obj){
    let key;
    alert(!(key in obj));
}
isEmpty(obj);
//мне кажется, должно работать
//почему-то не работает. Bceгда true

//Задание 7
//не знаю, как из функции передать значение в свойство
const selfGeneratedUser = {
    getInfo: function(){
        const name = prompt("enter your name");
        const email = prompt("enter your email");
        const phone = prompt("enter your phone"); 
    },
    name:  this.name,
    email: this.email,
    phone: this.phone,
    introduce: function(){
        alert(this.name);
        alert(this.email);
        alert(this.phone);
    }
}

selfGeneratedUser.getInfo();
console.log(selfGeneratedUser);
selfGeneratedUser.introduce();
