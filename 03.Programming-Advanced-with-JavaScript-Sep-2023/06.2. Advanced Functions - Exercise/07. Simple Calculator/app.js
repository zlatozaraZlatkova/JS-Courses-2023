function calculator() {
    let num1;
    let num2;
    let output;

    return object = {
        init,
        add,
        subtract,
    };


    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        output = document.querySelector(resultSelector);
    }

    function add(event) {
        const sum = Number(num1.value) + Number(num2.value);
        output.value = sum;
    }
    function subtract(event) {
        const substr = Number(num1.value) - Number(num2.value);
        output.value = substr;
    }

}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');


//VERSION DOM 

function calculator() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const output = document.getElementById("result");

    const btnSumRef = document.getElementById("sumButton");
    const btnSubtractRef = document.getElementById("subtractButton");

    btnSumRef.addEventListener("click", add);
    btnSubtractRef.addEventListener("click", subtract);

    return object = {
        init,
        add,
        subtract,
    };

    function add(event) {
        const sum = Number(num1.value) + Number(num2.value);
        output.value = sum;
    }
    function subtract(event) {
        const substr = Number(num1.value) - Number(num2.value);
        output.value = substr;
    }


}
