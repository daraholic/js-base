// Array 0 1 2 3 4 ...
const myArr = ['amy','bob','cat','dog'];
myArr.forEach(myFunc);
function myFunc(value,key){
    console.log(value);
    console.log(key);
}

const iphoneObj = {
    "iphone8":1000,
    "iphone9":2000,
    "iphone10":3000,
    "iphone11":4000

}
console.log(iphoneObj);

for (const[key, value] of Object.entries(iphoneObj)){
    console.log(`${key}:${value}`);
}

// console.log(myArr[1]);
// console.log(myArr.length);

// for (let i in myArr){
//     console.log("for in, i=" + i);
// }
// pop 可以刪除myArr最後一個元素
// push 可以加一個項目到myArr
// myArr.pop();
// myArr.push('egg');
// console.log(myArr);

// for (let index = 0;index < myArr.length;index++){
//     console.log(myArr[index]);
// }

// for (let i = 1;i <= 10;i++ ){
//     console.log("i="+i);
// }