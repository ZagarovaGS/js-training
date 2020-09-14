//Загарова Гульнара

//Задание 1

function fizzBuzz(n){
    for ( let i = 1; i <= n; i++ ){
        if ( i%3 === 0 && i%5 !== 0 ) console.log("Fizz");
        else if ( i%5 === 0 && i%3 !== 0 ) console.log("Buzz");
        else if ( i%3 === 0 && i%5 === 0 ) console.log("FizzBuzz!");
        else console.log(i)
    }
}
fizzBuzz(15);


//Задание 2
//Способ 1
function toNumber(value){
    const myNumber = value - 0;
    if ( myNumber ){
    console.log (myNumber);
    }
    else console.log(null);
    console.log (typeof(myNumber));
    return myNumber;
}

//Задание 2. Способ 2. Но оба варианта преобразуют в number любой тип данных
//Закомментировала код, чтобы не было конфликта имен


/*function toNumber(value){
    if (Number(value))
    console.log(Number(value));
    else console.log(null);
    console.log(typeof(Number(value)));
    return (Number(value));
}*/

toNumber('hello');
toNumber('23');
toNumber(true);


//Задание 3
 function createUser(name, age, height, weight){
    const user = {
        name,
        age,
        height,
        weight,
        skills: {
            run: Boolean,
            volleyball: Boolean,
            videoGames: Boolean
        }
    } ;

    if (String(name)) user.name = (String(name)); 
    else user.name = null;
    console.log(typeof(user.name));
    if (Number(user.age)) user.age = (Number(user.age));
    else user.age = null;
    if (Number(height)) user.height = (Number(height));
    else user.age = null;
    if (Number(weight)) user.weight = (Number(weight));
    else user.weight = null;
    if (weight < 100)  user.skills.run = true;
    if (weight < 90 && height > 185) user.skills.volleyball = true;
    if ((age < 18 && height > 140) || weight > 130) user.skills.videoGames = true;
    console.log(user);
 }

 createUser(456, '17', 150, 50);


 //Задание 4. 

   function isPalindrom(word){
       for (let i=0; i < word.length; i++){
          if (word [i] !== word [word.length-i-1]){
             return false
          }
             else return true;
   }
}

    console.log(isPalindrom('madam'));
    if (isPalindrom('madam') === true) {
       console.log('Слово палиндром')
   }
       else console.log("Слово не является палиндромом");


    
//Задание 5
  
function quadraticEquation(a, b, c){
    const discriminant = Math.pow(b,2)-4*a*c;
    const x1 = ((-b) + Math.sqrt(discriminant))/(2*a);
    const x2 = (-b - Math.sqrt(discriminant))/(2*a);
    if (discriminant > 0) console.log([x1, x2]);
    else if (discriminant === 0) console.log([x1]);
    else if (discriminant < 0) console.log([]);
}
   
quadraticEquation(3, 4, 10);

//Задание 6

function getCalendar(year, month){
    const date = newDate;
    for (let i=1; i<30; i++) {
        newDate+=date;
        console.log([i]);
    }
}