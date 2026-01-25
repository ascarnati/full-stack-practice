let userInput = document.getElementById("user-input");
let convertBtn = document.getElementById("convert-btn");
let metersConversion = document.getElementById("meters-conversion");
let litersConversion = document.getElementById("liters-conversion");
let kilogramsConversion = document.getElementById("kilograms-conversion");

convertBtn.addEventListener("click", function() {
    let originalValue = Number(userInput.value);
    
    let meters = originalValue / 3.281;
    let feet = originalValue * 3.281;
    metersConversion.textContent = `${originalValue} meters = ${feet.toFixed(3)} feet | ${originalValue} feet = ${meters.toFixed(3)} meters`;
    
    let gallons = originalValue * 0.264;
    let liters = originalValue / 0.264;
    litersConversion.textContent = `${originalValue} liters = ${gallons.toFixed(3)} gallons | ${originalValue} gallons = ${liters.toFixed(3)} liters`;
    
    let kilograms = originalValue * 2.204;
    let pounds = originalValue / 2.204;
    kilogramsConversion.textContent = `${originalValue} kilograms = ${pounds.toFixed(3)} pounds | ${originalValue} pounds = ${kilograms.toFixed(3)} kilograms`;
    
    
    
    console.log("hi")

})
