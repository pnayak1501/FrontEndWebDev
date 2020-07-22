/*var sampleString = 'Let\'s start our journey with Javascript';
console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('start'));
console.log(sampleString.slice(5,11));

console.log(sampleString.replace("journey","adventure"));
console.log(sampleString.toLowerCase());

var name1="String";
var name2 = new String("String");

if(name1 === name2){
    console.log("Result is true");
}
else{
    console.log("Result is false");
}
*/

var multiplier = function(){
    var result = 1;
    for(var i = arguments.length -1; i>=0; i--){
        result *= arguments[i];
    }
    return result;
}

console.log(multiplier(2,5,8,6));