let receivedEl = document.getElementById("received-value");

const convertBtn = document.getElementById("converterBtn");

convertBtn.addEventListener("click", function () {
  calMeterFeet();
  calLiterGallon();
  calKiloPound();
});

// function valueConverter(value) {
//   let meter = Number(value) / 3.281;
//   let feet = Number(value) * 3.281;
//   let liter = Number(value) / 0.264;
//   let gallon = Number(value) * 0.264;
//   let kilo = Number(value) / 2.204;
//   let pound = Number(value) / 2.204;
// }

function calMeterFeet() {
  let meetFeetEl = document.getElementById("meterFeet");
  let meter = Number(receivedEl.value) * 3.281;
  let feet = Number(receivedEl.value) / 3.281;
  meetFeetEl.innerHTML = `${receivedEl.value} meter = ${feet.toFixed(3)} feet | ${receivedEl.value} feet = ${meter.toFixed(3)} meters`;
  return meetFeetEl;
}

function calLiterGallon() {
  let literGallonEl = document.getElementById("literGallon");
  let liter = Number(receivedEl.value) * 0.264;
  let gallon = Number(receivedEl.value) / 0.264;
  literGallonEl.textContent = `${receivedEl.value} Litter = ${gallon.toFixed(3)} Gallons | ${receivedEl.value} Gallons = ${liter.toFixed(3)} Litters`;
  return literGallonEl;
}

function calKiloPound() {
  let KiloPoundEl = document.getElementById("KiloPound");
  let kilo = Number(receivedEl.value) * 2.204;
  let pound = Number(receivedEl.value) / 2.204;
  KiloPoundEl.textContent = `${receivedEl.value} pounds = ${kilo.toFixed(3)} killo | ${receivedEl.value} killo = ${pound.toFixed(3)} pounds`;
  return KiloPoundEl;
}
