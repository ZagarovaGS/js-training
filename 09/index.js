let deleteBtn = document.createElement("button");
 const div = document.getElementById("countGender");
const user = [

  {
    name: "Alex",
    company: "Google",
    email: "alex@gmail.com",
    phone: "+375292929292",
    balance: "$3,323",
    isActive: false,
    gender: "male",
    deleteBtn:"delete"
},

{
    name: "Oleg",
    company: "Yandex",
    email: "oleg@gmail.com",
    phone: "+375292929293",
    balance: "$4,323",
    isActive: false,
    gender: "male",
    deleteBtn: "delete"
},

 {
    name: "Alina",
    company: "Google",
    email: "alina@gmail.com",
    phone: "+375292929294",
    balance: "$5,323",
    isActive: true,
    gender: "female",
    deleteBtn: "delete"
},

{
    name: "Max",
    company: "IBM",
    email: "max@gmail.com",
    phone: "+375292929295",
    balance: "$6,323",
    isActive: false,
    gender: "male",
    deleteBtn: "delete"
},

{
    name: "Olga",
    company: "Apple",
    email: "olga@gmail.com",
    phone: "+375292929296",
    balance: "$7,323",
    isActive: false,
    gender: "female",
    deleteBtn: "delete"
},

{
    name: "Viktoria",
    company: "Apple",
    email: "viktoria@gmail.com",
    phone: "+375292929297",
    balance: "$8,323",
    isActive: true,
    gender: "female",
    deleteBtn: "delete"
},

{
    name: "Sem",
    company: "Google",
    email: "sem@gmail.com",
    phone: "+375292929298",
    balance: "$9,323",
    isActive: true,
    gender: "male",
    deleteBtn: "delete"
},

{
    name: "Bob",
    company: "Intel",
    email: "bob@gmail.com",
    phone: "+375292929299",
    balance: "$10,323",
    isActive: false,
    gender: "male",
    deleteBtn: "delete"
},

{
    name: "Nic",
    company: "IBM",
    email: "nic@gmail.com",
    phone: "+375292929282",
    balance: "$11,323",
    isActive: false,
    gender: "male",
    deleteBtn: "delete"
},

{
    name: "Sandra",
    company: "IBM",
    email: "sandra@gmail.com",
    phone: "+375292929272",
    balance: "$12,323",
    isActive: true,
    gender: "female",
    deleteBtn: "delete"
}
];

console.log(user.length)


//считаем количество мужчин и женщин
function countMale(){
    let countM = 0
for(let i = 0; i < user.length; i++) {
    if (user[i].gender === "male"){
        countM++;
}
}
return countM;
}


function countFamale(){
    let countF = 0
    for(let i = 0; i < user.length; i++) {
       
        if (user[i].gender === "female"){
            countF++;
    }
    }
    return countF
    }


countMale(user);
countFamale(user);
//console.log(countM) почему not define
console.log('countF')
div.innerText = "Количество мужчин" ;

//нигде нет информации, как втавить переменнную(

//считаем наибольший баланс

function maxBalance(){
    for(let i = 0; i < user.length; i++) {
        let maxCount = Math.max(user[i].balance);
        console.log("maxCount")
}
return "maxCount"
}
maxBalance();




const userTable = document.getElementById("userTable");
const header = document.createElement("tr");


const nameHeaderCell = document.createElement("th");
const companyHeaderCell = document.createElement("th");
const emailHeaderCell = document.createElement("th");
const phoneHeaderCell = document.createElement("th");
const balanceHeaderCell = document.createElement("th");
const deleteHeaderCell = document.createElement("th");


header.appendChild(nameHeaderCell);
header.appendChild(companyHeaderCell);
header.appendChild(emailHeaderCell);
header.appendChild(phoneHeaderCell);
header.appendChild(balanceHeaderCell);
header.appendChild(deleteHeaderCell);

nameHeaderCell.innerText = "Имя";
companyHeaderCell.innerText = "Компания";
emailHeaderCell.innerText = "Email";
phoneHeaderCell.innerText = "Телефон";
balanceHeaderCell.innerText = "Баланс";
deleteHeaderCell.innerText = "Удалить";

userTable.appendChild(header);


for(let i = 0; i < user.length; i++) {
    
    let name = user[i].name;
    let company = user[i].company;
    let email = user[i].email;
    let phone = user[i].phone;
    let balance = user[i].balance;
     deleteBtn = user[i].deleteBtn;

    

    const tr = document.createElement("tr");

    const nameCell = document.createElement("td");
    const companyCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const balanceCell = document.createElement("td");
    const deleteBtnCell = document.createElement("button");

    nameCell.appendChild(document.createTextNode(name));
    companyCell.appendChild(document.createTextNode(company));
    emailCell.appendChild(document.createTextNode(email));
    phoneCell.appendChild(document.createTextNode(phone));
    balanceCell.appendChild(document.createTextNode(balance));
    deleteBtnCell.appendChild(document.createTextNode(deleteBtn));

    

    tr.appendChild(nameCell);
    tr.appendChild(companyCell);
    tr.appendChild(emailCell);
    tr.appendChild(phoneCell);
    tr.appendChild(balanceCell);
    tr.appendChild(deleteBtnCell);

    userTable.appendChild(tr);
}
//не знаю, как привязать каждую кнопку delete
//знаю, что удалять надо не userTable. Просто хотя бы его получилось пока)
//deleteBtn.addEventListener("click", function(event){
 //   userTable.remove();
 //})

