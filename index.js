function displayTemperature() {
  let selectedValue = document.getElementById("tempOption").value;
  let inputValue = document.getElementById("tempInput").value;

  inputValue = parseFloat(inputValue);
  let celsius, fahrenheit, kelvin;

  switch (selectedValue) {
    case "Select your preferred temperature unit" || isNaN(inputValue):
      alert("Enter a valid value");
      break;

    case "Celsius":
      celsius = inputValue;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
      break;

    case "Fahrenheit":
      fahrenheit = inputValue;
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = ((fahrenheit + 459.67) * 5) / 9;
      break;

    case "Kelvin":
      kelvin = inputValue;
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin * 9) / 5 - 459.67;
      break;
  }  

  document.getElementById("celsius").innerHTML = celsius.toFixed(2);
  document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2);
  document.getElementById("kelvin").innerHTML = kelvin.toFixed(2);
}

let select = document.getElementById("tempOption");
select.addEventListener("change", displayTemperature);

let input = document.getElementById("tempInput");
input.addEventListener("change", displayTemperature);
