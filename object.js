var rahim={
    fullName:'rahim',
    age:21,
    address:'dhaka',
    job:'job holder'
}
//dot notation
rahim.fullName
//brakets
rahim['address']

//save function
rahim.welcomeMsg=function(){
    console.log('hello');
}
//function call
var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder',
    welcomeMsg: function() {
       console.log('Hello There');
    }
 }
 //special loop
 for(item in rahim) {
    console.log(item)
 }


 //object array
 var objArr = {
    normal: 'Normal Item',
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
    age: [10, 20, 30, 40, 50]
 }
 // array moddey object
 var arrObj = ['Zonayed', {name: 'Rafiq', age: 21, job: 'Student'}, 'Bangladesh']
