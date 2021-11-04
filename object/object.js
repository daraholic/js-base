console.log(typeof({}));
// 把複雜資訊存入object
const myObject = {
    name : "amy",
    age : 18,
    tel : "0922-xxxxxx",
    isAdmin : false
}

console.log("myObject",myObject);
// 以下兩種取用方式
console.log(myObject.isAdmin);
console.log(myObject['name']);

// 加入另一個object
const myObject2 = {
    name : "kin",
    age : 30,
    tel : "0912-xxxxxx",
    isAdmin : true
}
console.log("myObject2" , myObject2);

console.log(myObject2.isAdmin);
console.log(myObject2['name']);
// 可以改object內部存的資料內容
myObject.age = 999;
console.log(myObject);
// 下面醬子針對變數本身的修改是不行的
myObject = 123;
console.log(myObject);

// 練習object
const drinkObject = {
    item : "karubisu",
    price : 30,
    store : "50ran",
    quality : 1
}

