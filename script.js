window.onload = function() {
    document.getElementById("cnumber").innerHTML = "####  ####  ####  ####";
    document.getElementById("holderName").innerHTML = "FULL NAME";
    document.getElementById("expiry").innerHTML = "MM/YY";
    const monthField = document.getElementById("month-picker");
    const yearField = document.getElementById("year-picker");
    const option = document.createElement("OPTION");
    const option1 = document.createElement("OPTION");
    option.innerHTML = "Month";
    option.value = "";
    option.disabled = true;
    option.selected = true;
    monthField.appendChild(option);
    option1.innerHTML = "Year";
    option1.value = "";
    option1.disabled = true;
    option1.selected = true;
    yearField.appendChild(option1);
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        monthField.appendChild(option);
    }
    for (let i = 2010; i <= 2060; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        yearField.appendChild(option);
    }
};


function myFunction() {
    const trial = document.getElementsByClassName("flip-card-inner")[0];
    trial.style.transform = "rotateY(180deg)";
}

function myblurFunction() {
    const trial = document.getElementsByClassName("flip-card-inner")[0];
    trial.style.transform = "rotateY(360deg)";
}