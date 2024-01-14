// event listener
document.getElementById("tempForm").addEventListener("submit", function (e) {
    e.preventDefault();
    // retrieving values
    const temp = parseFloat(document.getElementById("temp").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    // temperature conversion
    let result;
    if (from === "celsius" && to === "fahrenheit") {
        result = (temp * 9) / 5 + 32;
    } else if (from === "celsius" && to === "kelvin") {
        result = temp + 273.15;
    } else if (from === "fahrenheit" && to === "celsius") {
        result = ((temp - 32) * 5) / 9;
    } else if (from === "fahrenheit" && to === "K") {
        result = ((temp - 32) * 5) / 9 + 273.15;
    } else if (from === "kelvin" && to === "celsius") {
        result = temp - 273.15;
    } else if (from === "kelvin" && to === "fahrenheit") {
        result = ((temp - 273.15) * 9) / 5 + 32;
    } else if (from === "celsius" && to === "celsius") {
        alert("Both units are same type");
    } else if (from === "kelvin" && to === "kelvin") {
        alert("Both units are same type");
    } else if (from === "fahrenheit" && to === "fahrenheit") {
        alert("Both units are same type");
    }

    document.getElementById("result").textContent = `Result : ${result.toFixed(2)} ${to}`;
});