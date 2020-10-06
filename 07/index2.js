//Задание2

 function Modal () {
       this.show = function(){
           console.log(`show ${this.name}`);
       };
       this.hide = function(){
           console.log(`hide ${this.message}`);
       };
 };

 function Warning(name, message){
    this.name = name;
    this.message = message
}
 Warning.prototype = new Modal();


 function Success(name, message){
     this.name = name;
     this.message = message;
 }

 Success.prototype = new Modal;

 const act = new Warning("wrong", "try again");
 const act2 = new Success("right", "congratulation");
act.show();
act.hide();
act2.show();
act2.hide();
console.log(act);
console.log(act2);
 

//Задание3

const transport = {
    bingo: function (){
         console.log ("bingo")
    }   
};

const plane = {
    bingoBall: name
};

plane.__proto__=transport;

for (let key in plane){
if (key.match (/bingo\w/)){
plane.bingo()
}
}

