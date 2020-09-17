//Загарова Гульнара
//Задание 0


function sayHello (name){
    name === 'Mark'? document.write('Hi, ' + name): document.write('Hello, ' + name);
}  
sayHello('Mark');



//Задание 1

const min = (a, b) => a < b ? a: b;

//Задание 2

function pow (x, n){
    if (n < 1){
        alert ('введите целое число больше 1');
        result = 0; 
       }
    result = x;
    for (let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}




//Задание 3

function isEven(n){
   if (n % 2 === 0)  return true
   else return false;
}

isEven(4);



//Задание 4

function deleteChars(str){
   // str = ['aaaa', 'bbbb', 'cccc'];
    str.pop();
    str.shift();
    return str;
}

//document.write(deleteChars("hello"));
// не знаю, как правильно передать в функцию(


// Задаеие 5

function convertFloor(floor){
    if (floor === 13){
        alert ("Такого этажа нет.");
    }
    if (floor < 0){
        return floor;
    }
    else if (floor >= 0){
    let realFloor = floor + 1;
    return realFloor; 
    }            
}
  document.write( convertFloor(0));