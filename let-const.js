/*// what is different var let const

var x = "degisken";
let y = "bu da değişken";

console.log(x);
console.log(y);
// let scope are and var scope area is different in for cycle , let stay in cycle but var doesn't
for(var i = 0 ; i <10 ; i++) {
    //
}
console.log(i);  */

var x = 'foo';

var x = 'bar';
// var didnt give error about y declared, but let gave a error about y declared, let is so safe ...
let y ='asd';
//let y = 'asd';
let z = 'dasd';
z = 'weqwe';

const degerler =[2,3,4,5];
degerler.push(3);
console.log(degerler);
//Template Literal
const name = "serifhan";
const surname = "isikli";
console.log(`benim adım ${name}, soyadım ${surname}`);

//Destructing
//before es6
/*const dgler = {
    deger1 : 'deger1',
    deger2 : 'deger2',
    deger3: 'deger3'
};

//const deger1 = dgler.deger1;
//const deger2 = dgler.deger2;
//console.log(deger1,deger2);
// after es6 ,
const {deger1,deger2, deger4='deger4'} = dgler;
console.log(deger1);
console.log(deger2);
console.log(deger4);
*/

/*const dgler = [1,2,3];
const [deger1,deger2,deger3] = dgler;

console.log(deger1);
console.log(deger2);
console.log(deger3);*/

// const { deger3:{isim:name }} = degerler;
//console.log(isim) error , console.log(name);

//Spread operator
/*const arr = ['foo' ,'bar', 'xyz'];
console.log(...arr);

const arrr= [1,2,3];
const arrr2 = [arrr,3,4,5];
console.log(arrr2);*/

const arr = ['a','b','c','d'];
const [deger1,deger2,...rest] = arr;
console.log(rest);

