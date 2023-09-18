function weather(input) {
    let temperature = Number(input[0]);

    if (temperature >= 26.00 && temperature <= 35.00) {
        console.log("Hot");
    } else if (temperature >= 20.1 && temperature <= 25.90) {
        console.log("Warm");
    } else if (temperature >= 15.00 && temperature <= 20.00) {
        console.log("Mild");
    } else if (temperature >= 12.00 && temperature <= 14.9) {
        console.log("Cool");
    } else if (temperature >= 5.00 && temperature <= 11.9) {
        console.log("Cold");
    } else {
        console.log("unknown");
    }


}
weather([16.5]);
weather([8]);
weather([22.4]);
weather([26]);
weather([0]);


