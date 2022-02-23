for(var i=0;i<10;i++){
    console.log('go'+i+'step');

}

//do while
var num
{
    console.log('inside loop');
    num =('enter num:');
}
while(num<10);
console.log('outside the loop');

//while
var num =0;
while(num<10){
    console.log('inside loop');
    num=prompt('enter the num:');
}
console.log('out the loop');

//break
for (var i=0;i<10;i++){
    if(i===5){
        break;
    }
    console.log('i is at:'+i);
}

//continue
for(var i=0;i<10;i++){
    if(i===5){
        console.log(i+'is skipped');
        continue;
    }
    console.log('i is now at:'+i);
}