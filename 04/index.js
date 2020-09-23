//Задание 1
//Прошу прощения, если неправильно поняла задание

const p = document.createElement("p");
p.className = "text";
p.innerHTML = "Это всего лишь текст";
p.style.height = "100px";
document.body.append(p);

const div = document.createElement("div");
div.className = "alert";
div.innerHTML = "А это сообщение об ошибке";
div.style.background = "red";
div.style.color = " white";
div.style.padding = "20px";
document.body.append(div);


//Задание 2



let ol = document.createElement("ol");
 const arr = ["Victor", "Tatyana", "Eduard", "Michaei", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
for (let i = 0 ; i < arr.length; i++){
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    ol.append(li);
}

document.body.append(ol);
const elements = document.querySelectorAll("li:nth-child(even)");
elements.className = "even";
//even.style.background = "green";
console.log(elements);
const elements2 = document.querySelectorAll("li:nth-child(odd)");
elements2.className = "odd";
console.log(elements2);
//не знаю, как обратиться к четным и нечетным элементам для задания фона
