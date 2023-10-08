"use strict"
//Objet
let student={
    name: 'Mango',
    favoriteFood: 'Croquettes',
    city: 'Mangoville',  
}
let values=Object.values(student);
console.log(values);
let resultBis=0;
values.forEach((values)=> {
resultBis+=values.length
})
if (resultBis%2){
    console.log("impaire")
}else{
    console.log("pair")
}