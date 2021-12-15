// 拿originPrice,discount,cashDiscount這些東西
// 方法:用id去抓
// 首先先抓form表單
// 宣告
const form = document.getElementById('myForm');
const originPrice = document.getElementById('originPrice');
const discount = document.getElementById('discount');
const cashDiscount = document.getElementById('cashDiscount');
const resultOutput = document.getElementById("resultOutput");

form.addEventListener("submit", function (e) {
  console.log(e);
  // 預防表單重新整理的預設行為
  e.preventDefault();
  console.log(originPrice.value);
  console.log(discount.value);
  console.log(cashDiscount.value);

  // 總價
  parseOriginPrice = parseInt(originPrice.value);
  console.log(parseOriginPrice);
  //折數 
  parseDiscount = parseFloat(discount.value/100);
  console.log(parseDiscount);
  // 現金折抵
  cashDiscountPrice = parseInt(cashDiscount.value);
  console.log(cashDiscountPrice);

  // 全部的折扣
let discountAll = 0;

if(parseOriginPrice >= 500){
  discountAll = parseOriginPrice*(1- parseDiscount);
}
if(parseOriginPrice*parseDiscount >= 200){
  discountAll = discountAll + cashDiscountPrice;
}
console.log(discountAll);

alert(discountAll);
resultOutput.innerText = "Result :" + discountAll;
});
