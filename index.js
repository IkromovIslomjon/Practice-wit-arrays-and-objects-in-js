
// let i=0;
// i===0 ? console.log("the value is equal to zero") : console.log("the value is not equal to zero");
// if(i===0){
//     console.log("the value is equal to zero");
// }
// else{
//     console.log("the value is not equal to zero");
// }


// let a={
//     name:"Islomjon",
//     age:20
// };
// let b=[1,4,8,10];

// console.log(a?.age ?? a?.name);

// let arr=b.map( (a,b,c)=>{
// // console.log(a);
// // console.log(b);
// // console.log(c);
// if(a % 2===1){
//     return a*2
// }
// return a+1
// })
// console.log(b);
// console.log(arr);


// let obj=Object.entries(a).map(([a,b],c)=>{
// console.log()
// })

// let obj=Object.values(a).map((a,b)=>{
// console.log(a)
// })

// let obj=Object.keys(a).map((a,b)=>{
// console.log(a)
// })



// Object methods

//1- Assign

// let c={
//     name:"Islomjon"
// }


// To modify the object 

// Object.assign(c,{
//     name:"john"
// });
// console.log(c);

// To retain the old object's elements or properties

// const newObj=Object.assign({}, c,{
//     name:"Wick",
//     age:40
// });
// console.log(c);

//or, we can achieve the same exact result with a bit simple syntax
// const newObj={...c, ...{
// name:"wick",
//  age:40
// }};
// console.log(c);

  

// WE CAN CHANGE ARRAY INTO AN OBJECT 

// let array=[
//     ["name", "Islomjohn"],
//     ["age", 40]

// ]
// let newObjectB=Object.fromEntries(array);

// console.log(newObjectB);

  

// WE CAN CHANGE THE OBJECT'S PROPERTIES
// let ob={
//     name:"islomjohn"
// }

// ob.name="wick";
// ob.age=40;
// // delete ob.name;
// console.log(ob);

//WE CAN FREEZE THE OBJECT'S PROPERTIES 

// Object.freeze(ob);
// ob.name='wick';
// delete ob.name;
// console.log(ob);


// WE CAN GET WHATEVER PROPERTY WE WANT FROM OBJECTS USING ENTRIES INDEXES
// let newArray=Object.entries(a);
// console.log(newArray[1][0]);




//CREATE METHOD

// let object={
//     name:"joshua"
// }
// let object2=Object.create(object, {});
// console.log(object2);
// console.log(object2.name);
// let object3=Object.create(object2,{
//     name:{
//         configurable:true,
//         writable:true,
//         enumerable:true,
//         value:"josh"
//     },
//     age:{
//         configurable:true,
//         writable:true,
//         enumerable:true,
//         value:40
//     }
// });
// console.log(object3);
// console.log(object3.name);



// let newObject={};

// Object.defineProperty(newObject, "name",{
//     value:'Joshua',
//     configurable:true
// });
// console.log(newObject.name);
// delete newObject.name;
// console.log(newObject.name);


// Object.defineProperty(newObject, "name", {
//     value:"joshua", 
//     writable:true
// })
// console.log(newObject.name);
// newObject.name="Shosh";
// console.log(newObject.name);


// Object.defineProperty(newObject, "name", {
//     value:"joshiua", 
//     enumerable:true
// })
// console.log(Object.keys(newObject));

// Object.defineProperty(newObject, "name", {
//     value:"joshiua", 
//     enumerable:false
// })
// console.log(Object.keys(newObject));






// FOREACH IN BOTH ARRAYS AND OBJECTS
let array1=[1,4,8,10];

// let object={
//     name:"islomjohn",
//     age:80,
//     job:'developer'
// }



// const newArray1=array1.forEach((value, index,array)=>{
//     console.log(value);
// })

// const newObject=Object.entries(object).forEach(([a,b],c)=>{
//     if(a==='name'){
//         console.log(b)
//     }

// })
// const newObject=Object.keys(object).forEach(a=>{
//     // if(a==='name'){
//         // console.log(object[a]);
//     // }
//     // console.log(a);
//     // })

// const newObject=Object.values(object).forEach((a,b)=>{
//     if(b===0){
//         console.log(a);
//     }
//     })

// let array1=[1,4,8,10];

// let object={
//     name:"islomjohn",
//     age:80,
//     job:'developer'
// };

// REDUCE METHOD WITH ARRAYS
// const sum=array1.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue
// },0);
// console.log(sum);


// WE CAN ACHIEVE THE SAME EXACT RESULT WITH A DIFFERENT WAY

// let sum=0;
// for(let n in array1)
//     sum+=n;
// console.log(sum);

// REDUCE METHDOS WITH OBJECTS

// const sumOfNumbers=Object.values(object).reduce((acc, value)=>{
//     if(typeof value==='number'){
//         return acc+value;
//     }
//     return value;
// },0);
// console.log(sumOfNumbers);


// const result=Object.entries(object).reduce((acc,[key, value])=>{
//     acc.push(`${key}:${value}`);
//     return acc;
// },[]);
// console.log(result);


// const key=Object.keys(object).reduce((acc, key)=>{
// return acc+key+ ' ';
// },'');
// console.log(key);
// const objValue=Object.values(object).reduce((acc,value)=>{
//     if( typeof value==='string' && acc===''){
//         return value;
//     }
//     return acc;
// },'');
// console.log(objValue);

// FIND METHOD WITH ARRAYS
// let names=['joshua', 'jack', 'caleb'];

// const res=names.find((value, index,array)=>{
//  return value==='caleb';
// });
// console.log(res);



// FIND METHOD WITH OBJECTS
// const result=Object.entries(names).find(([key, value])=>{
//     return value==='jack';
// });
// console.log(result);




// FILTER METHOD WITH ARRAYS
// const filtered=names.filter((value)=>{
   
//         return value==='caleb';
    
// });
// console.log(filtered);


// FILTER METHOD WITH OBJECTS

let object={
    name:"islomjohn",
    age:80,
    job:'developer'
};

const filteredObj=Object.entries(object).filter(([key ,value])=>{
return key==='name'

})
console.log(filteredObj);






























