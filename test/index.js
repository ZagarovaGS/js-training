const user = {name: "Alex", age:89};
const div = document.getElementById("div");
const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    div.innerText = `${user.name} , ${user.age}`;
    if (user.age > 45){
        let myAge = document.createElement("div");
        myAge.innerText = `больше 45 лет`;
        document.body.append(myAge);
    }
})
