// alert("Hello Friends");

document.getElementById("submit")
.addEventListener("click",
                function(){
                    var myname = prompt("Hi, This is My JS for getting your name.\nPlease Enter Your Name Here:");
                    console.log(myname);
                }); 

document.getElementById("jsid")
.addEventListener("click",
                function(){
                    window.location="mytest.html";
                    // window.location.assign("../css/style.css");
                }); 

document.getElementById("hoverid")
.addEventListener("mouseover",
                function(){
                    document.getElementById("hoverid").innerHTML="Hi ,My Name Is Deven.";
                    // alert("Thanks For Testing Hover Effect.");
                });


// -----------------------------------------Array-------------------------------------------- //

var myarrayA = ["deven","padhiyar","rishikesh","mohite"];
console.log(myarrayA);

var myarrayB = new Array(1);
console.log(myarrayB);

myarrayA.push("rishimuni",1,2,6497,1117,62,1136,72,"a");

myarrayB.push("Deven","Padhiyar","Age",25);

console.log(myarrayA , myarrayA.length);
console.log(myarrayB , myarrayB.length);

console.log(typeof(myarrayA)==typeof(myarrayB));

myarrayA.push("Five");
console.log(myarrayA , myarrayA[3]);
console.log(myarrayA[myarrayA.length-3]);
console.log(myarrayA[myarrayA.length-1]);

var cars=["volvo","bmw","tata","maruti"]
// document.getElementByClassName('demo').innerHTML = cars;
var col = document.getElementsByClassName("demo");
col[0].innerHTML = cars[2];
// collection[0].innerHTML = cars[2];


myarrayA.forEach(
    function(d,e){
    console.log(d + " " + e);
})
console.log(myarrayA);

var popelement = myarrayA.pop();
console.log(popelement); //POP displays last poped out element

myarrayA.pop();
console.log(myarrayA);

myarrayA.shift();
console.log(myarrayA);

myarrayA[1]="deven";
console.log(myarrayA);

console.log(myarrayA.indexOf("rishimuni"));
console.log(myarrayA.indexOf("devil"));

// var course=["js","bootstrap","css","html"]
// var col = document.getElementsByClassName("demo");
// col[0].innerHTML = cars[2];
// myarrayA.splice(0,1);
// console.log(myarrayA);

myarrayA.unshift("Deven");
console.log(myarrayA);

myarrayA.splice(2,3);
console.log(myarrayA);

myarrayA.sort();
console.log(myarrayA);

myarrayA.reverse();

console.log(myarrayA);
console.log(myarrayB);

myarrayC = myarrayA.concat(myarrayB);
console.log(myarrayC , myarrayC.length);

console.log(myarrayA.toString());
console.log(myarrayA.join("/"));

console.log(myarrayC);
console.log(myarrayC.slice(10,14));

console.clear();

// ----------------------------------------Objects------------------------------------------ //

var myobject = new Object();
myobject.username = "Deven Padhiyar";
myobject.password = "641997";
myobject.email = "deven.padhiyar@orioncoders.com";
myobject.age = 25;
console.log(myobject);

var myobjectA = {
    username : "Rishikesh Mohite", password : "sirfira" , 
    email : "rishikesh.mohite@orioncoders.com" , age : 24 , food : "chicken"
};
console.log(myobjectA);

console.log(myobject["username"]);
console.log(myobjectA.username);

var myobjectC = new myconstruc("dilen","12345","dilen@something.com",22,"sev usal");
var myobjectD = new myconstruc("hardik","124","hardikrajput27798@gmail.com",24,"Panipuri");

function myconstruc(a,b,c,d,e){
    this.username = a;
    this.password = b;
    this.email = c;
    this.age = d;
    this.favorite = e;
}

console.log(myobjectC);
console.log(myobjectD);

console.clear();

// ---------------------------------------------Functions----------------------------------------------- //
var c = 5;
function myfunction(a,b){
    c++;
    console.log("hi");
    console.log(a+b+c);
}

myfunction(2,3);

var myobjectE = {name:"deven",surname:"padhiyar",age:25}

function fun(g){
    g.number = 9687572340;
    g.email = "deven.padhiyar@orioncoders.com"
}

fun(myobjectE);
console.log(myobjectE);

setInterval("myFocusFunction()",1);

function myFocusFunction(){
    // document.getElementById("focusid").addEventListener("mouseover","hi");
    let text;
    if(document.hasFocus()){
        text = "View has your Focus😃";
        // console.log("View has your Focus");
    }
    else{
        text = "Something has your Focus😡";
        // console.log("Console has your Focus");
    }
    document.getElementById("focusid").innerHTML = text;
    
    
}

myFocusFunction();

var bb = "GLOBAL";

function mydemofun(){
    
    var bb = "LOCAL";
    console.log(bb);
}
console.log(bb);
mydemofun();
console.log(bb);



// --------------------------------------------DOM------------------------------------------------- //

console.clear();
console.dir(window);
console.dir(document);

document.getElementById("clickdiv").addEventListener("click",function(){
    window.location="newfile.html";
});
