const name="Harry"
const surname="Potter";
let age=12;
alert(`Hello, worl
d! Встречай js! Я ${name}${surname}, и мне ${age} лет. Рад встрече!`);
const user = {
    name: "Ron",
    growth: 165,
    age: 12,
    smoke: "no",
    friends_list: {
        fiend1: "hermione",
        friend2: "Harry",
        friend3: "Nevil"
    }
};
console.log(user.age);
user.canSingSong="yes";
user.friends_list=null;
console.log(user);