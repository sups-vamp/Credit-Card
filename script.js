window.onload = function () {
    const monthField = document.getElementById("month-picker");
    const yearField = document.getElementById("year-picker");
    for(let i=1; i<=12; i++){
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        monthField.appendChild(option);
    }
    for (let i = 2010; i <= 2060; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        yearField.appendChild(option);
    }
};
