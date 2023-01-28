const field = document.getElementById("txtinput");
const btn = document.getElementById("btn");
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

btn.addEventListener("click", function () {
    let baseValue = field.value
    let baseValue2 = field.value
    let baseValue3 = field.value
    length.textContent = `${baseValue} Meters = ${baseValue * meter} Feet | ${baseValue * meter} Feet = ${baseValue} Meters`;
    volume.textContent = `${baseValue2} liters = ${baseValue2 * liter} Gallons | ${baseValue2 * liter} Gallons = ${baseValue2} Liters`;
    mass.textContent = `${baseValue3} Kilograms = ${baseValue3 * kilogram} Pounds | ${baseValue3 * kilogram} Pounds = ${baseValue3} Kilograms`;
    
})
