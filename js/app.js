const units = {
    Celcius: "°C",
    Fahrenheit: "°F"
};

const config = {
    minTemp: -20,
    maxTemp: 50,
    unit: "Celcius"
};

// Change min and max temperature values

const tempValueInputs = document.querySelectorAll("input[type='text']");

tempValueInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        const newValue = event.target.value;

        if (isNaN(newValue)) {
            return input.value = config[input.id];
        } else {
            config[input.id] = input.value;
            range[input.id.slice(0, 3)] = config[input.id]; // Update range
            return setTemperature(); // Update temperature
        }
    });
});

// Switch unit of temperature

const unitP = document.getElementById("unit");

unitP.addEventListener("click", () => {
    config.unit = config.unit === "Celcius" ? "Fahrenheit" : "Celcius";
    unitP.innerHTML = config.unit + ' ' + units[config.unit];
    return setTemperature();
})

// Change temperature

const range = document.querySelector("input[type='range']");
const temperature = document.getElementById("temperature");

function setTemperature() {
    temperature.style.height = (range.value - config.minTemp) / (config.maxTemp - config.minTemp) * 100 + "%";
    temperature.dataset.value = range.value + units[config.unit];
}

range.addEventListener("input", setTemperature);
setTimeout(setTemperature, 1000);

var count = 33;
var counterIncrement = +1;
var counter = setInterval(timer, 1000);

function timer() {
    count = count + counterIncrement;
    if (count == 33 || count == 38) {
        counterIncrement = -counterIncrement;
    }
    console.log(count);
    $("#temperature").attr('data-value', count)
    $("#data-ter").val(count)
    setTemperature()
}

// var refreshIntervalId = setInterval(fname, 10000);

// /* later */
setTimeout(() => {
    clearInterval(counter)

}, 18000);
