// 拿num1,num2,cashDiscount這些東西
// 方法:用id去抓

// 首先先抓form表單

// 宣告
const form = document.getElementById('myForm');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const option = document.getElementById('option');
const resultOutput = document.getElementById("resultOutput");

form.addEventListener("submit", function (e) {
  console.log(e);
  // 預防表單重新整理的預設行為
  e.preventDefault();
  console.log(num1.value);
  console.log(num2.value);
  console.log(option.value);
  parseIntNum1 = parseInt(num1.value);
  parseIntNum2 = parseInt(num2.value);
  // alert(num1.value + num2.value);
  // 做加減乘除
  // sw+tab 快捷鍵
  console.log(option.value);
  let total = "";
  switch (option.value) {
    case "+":
      total = parseIntNum1 + parseIntNum2;
      break;
    case "-":
      // 大減小
      let tempNum;
      if (parseIntNum2 > parseIntNum1) {
        tempNum = parseIntNum1;
        parseIntNum1 = parseIntNum2;
        parseIntNum2 = tempNum;
      }
      total = parseIntNum1 - parseIntNum2;
      break;
    case "*":
      total = parseIntNum1 * parseIntNum2;
      break;
    case "/":
      total = parseIntNum1 / parseIntNum2;
      break;
    default:
      alert("default");
      break;
  }
  alert(total);
  resultOutput.innerText = "Result :" + total;
});








// const form = document.getElementById("myForm");
// const num1Input = document.getElementById("num1");
// const num2Input = document.getElementById("num2");
// const optionInput = document.getElementById("option");
// const resultBtn = document.getElementById("result");
// const pResult = document.getElementById("pResult");
// //  e.preventDefault() 函式功能:預防表單重新整理的預設行為
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(num1Input.value);
//   console.log(num2Input.value);
//   console.log(optionInput.value);

//   switch (optionInput.value) {
//     case '+':
//       calResult = parseInt(num1Input.value) + parseInt(num2Input.value);
//       break;
//     case '-':
//       calResult = parseInt(num1Input.value) - parseInt(num2Input.value);
//       break;
//     case '*':
//       calResult = parseInt(num1Input.value) * parseInt(num2Input.value);
//       break;
//     case '/':
//       calResult = parseInt(num1Input.value) / parseInt(num2Input.value);
//       break;
//     default:
//       calResult = "error";

//   }
//   console.log(calResult);


pResult.innerText = "Result:" + calResult;

// }
// )