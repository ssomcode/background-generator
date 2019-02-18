// let s=[1,2,3,4];
// console.log(s);//printst the whole array
// s[5]=10;
// let text;
// // console.log(s);
// text="<ul>"
// console.log(s.length);//gives the lenght of array
// for(let i=0;i<s.length;i++){
//     text="<li>"+s[i] +"<li>";
// }
// text+="</ul>";
// console.log(text);
// s.push(11);//push at the end 
// console.log(s);
// s.pop();//pops from end
// console.log(s);
// var fruits=["banana","apple","orange","kiwi"];
// fruits.reverse();
// console.log(fruits);
// console.log(fruits.sort());
// // var x = new Array(omkar","sanjay","shinde"); //we can new keyword to create an array 
// // console.log(x);
var num=[1,383,249,56,34,99];
function sortalpha(){console.log(num.sort());  //this will sort the numbers alphabetically
}
function sortnum(){
    num.sort(function(a,b){return a-b});      //this will sort numbers numerically
    return num;
}
function descend(){
    num.sort(function(a,b){return b-a});      //this will sort numbers numerically
    return num;
}
function randomsort(){
    num.sort(function(a,b){return 0.5-Math.random()});      //this will sort numbers randomaly
    return num;
}

console.log(sortalpha());
console.log(sortnum());
console.log(descend());
console.log(randomsort());
//soting object elements in array
var cars=[
    {type:"volvo",year:2016},
    {type:"bmw",year:2010},
    {type:"audi",year:2015}
];
var a=cars.sort(function(a,b){return a.year-b.year});
console.log(a);
var list = [["omkar","sanjay","shinde"]];
console.log(list);
console.log(list[0][2]); //this will give the  third element of first array inside the array