// 用id去抓
// 宣告
const cmInput = document.getElementById('cm');
const inchInput = document.getElementById('inch');

const cmErr = document.getElementById('cmErr');
const inchErr = document.getElementById('inchErr');


cmInput.addEventListener("change", function (e) {
  const cm = parseFloat(cmInput.value);
  console.log(cm);
  let inch = cm / 2.54;
  console.log(inch);
  inch = Math.round(inch *100) /100;
  console.log(inch);
  inchInput.value = inch;
  if(isNaN(cm)){
    cmErr.innerText = "請輸入數字";
  }

});

inchInput.addEventListener("change", function (e) {
  const inch = parseFloat(inchInput.value);
  console.log(inch);
  cm=inch*2.54;
  cm=Math.round(cm * 100)/100;
  console.log(cm);
  cmInput.value=cm;

});
