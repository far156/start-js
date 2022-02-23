function funcName() {
    //Statements
 }
 //brakets
 function funcName() {
    console.log('Hello I am from the function');
}

funcName();
//parameter
function sumMachine(a,b){
    var sum=a+b;
    return sum;
}
console.log(sumMachine(2,2));
console.log(sumMachine(4,4));
// all type pass to vaiable
function printMyName(name, age) {
    console.log('My name is: ' + name + ' and I am ' + age + ' years old!');
}

printMyName('farzana', 21);
//argument
function callMyName(name,callback){
    var myAge=20;
    callback(myAge);
    console.log('is it interest?yes it is Mr.'+name);

}
function hello(age){
    console.log('i pass my argu and my age');

}
callMyName('farzana',hello);

// return function

function welcomeMsg(name) {
    console.log('Welcome . ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('farzana')('Coffee');



//change value
function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);
