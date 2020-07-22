//alert("Hello")
//var temp = null;
//
//var myMunber = 50; //Number
//
//var myString = "Prahlad" //String
//
//var isActive =true;
//
//var harley =["street750","fatboy","streetBoy"] //Array
//
//var bikeObject ={nameofbike:"street750",ccofbike:750} //Object
//
//var x=3;
//var y=5;
//
//var z=x+y;

//
//var greeting="";
//var highScore=453;
//var myScore=500;
//
//if(myScore<highScore){
//    greeting="OOOPS! You just missed the high Score!";
//}
//else if(myScore == highScore){
//    greeting="You just equalled the high square";   
//}
//else{
//    greeting="Hurray! You just got a high score!";
//}

//function showDate(){
//    var d=new Date();
//document.getElementById("test").innerHTML=d.getFullYear();
//}
//document.getElementById("test").innerHTML=greeting;

//try{
//    aleert("heelo User");
//}
//
//catch(err){
//    document.getElementById("test").innerHTML=err.message;
//}

//function myFunction(){
//    var message,x,document;
//    message=document.getElementById("msg");
//    message.innerHTML="";
//    
//    x=document.getElementById("some").value;
//
//    try{
//        if(x == "") throw "Please choose a number";
//        if(isNaN(x)) throw "Only numbers are allowed";
//        if(x<4) throw "choose a number greater than 3";
//    }
//    
//    catch(err){
//        message.innerHTML="Error is "+err;
//    }
//    
//    finally{
//        document.getElementById("some").value=""; 
//    }
//}
//var document;
//document.getElementById("test").innerHTML="Changed by Javascript";
//
//var newList = document.createElement("li");
//newList.innerHTML="I was added by JS";
//document.getElementById("change").appendChild(newList);

function myFunction(){
    var x=document.forms["myForm"];
    var text="";
    for(var i=0;i<x.length;i++){
        text += x.elements[i].value+" "; 
    }
    document.getElementById("getValue").innerHTML=text;
    
    
}