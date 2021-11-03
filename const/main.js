const form = document.getElementById("myForm");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const optionInput = document.getElementById("option");
const resultBtn = document.getElementById("result");
const pResult = document.getElementById("pResult");
//  e.preventDefault() 函式功能:預防表單重新整理的預設行為
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(num1Input.value);
    console.log(num2Input.value);
    console.log(optionInput.value);
    let calResult =" ";
    switch (optionInput.value) {
        case '+':
        calResult = parseInt(num1Input.value) + parseInt(num2Input.value);
          break;
        case '-':
            calResult = parseInt(num1Input.value) - parseInt(num2Input.value);
          break;
        case '*':
            calResult = parseInt(num1Input.value) * parseInt(num2Input.value);
          break;
        case '/':
            calResult = parseInt(num1Input.value) / parseInt(num2Input.value);
          break;
        default:
          console.log('error');
    }
      
    console.log(calResult);


    // console.log(typeof(calResult));
    

    pResult.innerText = "Result:" + calResult;
}
)