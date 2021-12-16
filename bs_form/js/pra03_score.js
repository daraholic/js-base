// 宣告
const chineseInput = document.getElementById('chinese');
const englishInput = document.getElementById('english');
const mathInput = document.getElementById('math');
const submitInput= document.getElementById('submitBtn');
const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

// const resultAmount = document.getElementById('resultAmount');
// const resultAverage = document.getElementById('resultAverage');

// 防呆
chineseInput.addEventListener("change", function (e) {
    const chinese = parseInt(chineseInput.value);
    const english = parseInt(englishInput.value);
    const math = parseInt(mathInput.value);  
    if(chinese < 0  || chinese >100 || english > 100 || english < 0 || math > 100 || math < 0){
      alert("請重新輸入");
        chineseInput.value = 0;
        englishInput.value = 0;
        mathInput.value = 0;
        return false;
    }
});

submitInput.addEventListener("click", function (e) {
  e.preventDefault();
  // confirm("是否要送出表單?")
  if(!confirm("是否要送出表單?")){
    return false;
  }
  console.log(chineseInput.value);
  console.log(typeof(chineseInput.value));
  // console.log("submitInput is check");
  const chinese = parseInt(chineseInput.value);
  const english = parseInt(englishInput.value);
  const math = parseInt(mathInput.value);
    // 防呆
    // if(chinese > 100 ||english > 100 || math > 100){
    //   chineseInput.value =0;
    //   englishInput.value =0;
    //   mathInput.value =0;
    // }

    let sum = chinese + english + math;
    // console.log(typeof(sum)); //看資料型態
    // console.log("sum is " + sum);
    // console.log("總分",sum);
    // console.log("sum is ");
    // console.log(sum);
    let avg = Math.round(sum / 3 * 100) / 100;
    console.log("avg is " + avg);
    // Level
    let level;
    let color="secondary";
    if(avg >=90){
      level = "A";
      color = "success";
    }else if(avg >= 80){
      level = "B";
      color = "success";
    }else if(avg >= 70){
      level = "C";
      color = "success";
    }else if(avg >=60){
      level = "D";
      color = "success";
    }else{
      level = "E";
      color = "danger";
    }
    console.log("level",level);
    console.log("color",color);
    
    const result =
    `<div class="alert alert-${color}" role="alert">
    國文:${chinese}<br>
    英文:${english}<br>
    數學:${math}<br>
    總分:${sum}<br>
    平均:${avg}<br>
    成績判定:${level}
    </div>`;
    
    resultDiv.innerHTML = result;
// const scErr = document.getElementById('scErr');
// const inchErr = document.getElementById('inchErr');


// form.addEventListener("change", function (e) {

//   // 總分
//   parseresultAverage = parseInt(resultAmount.value);
//   console.log(parseresultAverage);
//   //平均 
//   parseresultAverage = parseFloat(resultAverage.value);
//   console.log(resultAverage);

//   // 全部的折扣
//   console.log(option.value);
//   let total = "";

//   let score = 50;
// let grade = "B";
// console.log(score >=100);
// if(score >= 100){
//     grade = "A";
// }else if (score >=80){
//     grade = "B";
// }else if (score >=70){
//     grade = "C";
// }else{
//     grade = "F";
// }default:
//     alert("default");
//     break;
  
//   alert(total);
//   resultOutput.innerText = "Result :" + total;
});
