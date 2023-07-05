function operator() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    console.log(num1 , num2);
    var result = document.getElementById("result");
    var operator = document.getElementById("operator").value;
    result.value = eval(num1 + operator + num2);
    console.log(result.value);
}