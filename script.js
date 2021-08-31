window.onload = function() {
    document.getElementById("cnumber").innerHTML = "####  ####  ####  ####";
    document.getElementById("holderName").innerHTML = "FULL NAME";
    document.getElementById("month").innerHTML = "MM";
    document.getElementById("year").innerHTML = "YY";
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
    for (let i = 2021; i <= 2060; i++) {
        const option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        yearField.appendChild(option);
    }

    const cardType = document.createElement("img");
    cardType.setAttribute("class", "logo");
    cardType.src = "images/visa.png";
    document.getElementById("card-type-img").appendChild(cardType);

    const cardTypeBack = document.createElement("img");
    cardTypeBack.setAttribute("class", "logo-back");
    cardTypeBack.src = "images/visa.png";
    document.getElementById("card-type-img-back").appendChild(cardTypeBack);
};


function myFunction() {
    const trial = document.getElementsByClassName("flip-card-inner")[0];
    trial.style.transform = "rotateY(180deg)";
}

function myblurFunction() {
    const trial = document.getElementsByClassName("flip-card-inner")[0];
    trial.style.transform = "rotateY(360deg)";
}

function dispCardNumber(e) {
    let ccNumString = e.target.value;
    if (isNaN(ccNumString)) {
        alert("Only numbers accepted.");
        ccNumString = "";
        e.target.value = "";
    }
    const cardFormat = format(ccNumString);
    if (cardFormat) {
        document.getElementById("cnumber").innerHTML = cardFormat;
    } else {
        document.getElementById("cnumber").innerHTML = "####  ####  ####  ####";
    }

    const cardType = document.createElement("img");
    cardType.setAttribute("class", "logo");
    const cardTypeBack = document.createElement("img");
    cardTypeBack.setAttribute("class", "logo-back");
    const l = document.getElementById("card-type-img");
    const b = document.getElementById("card-type-img-back");
    const getCardType = checkCardType(ccNumString);
    if (getCardType === "VISA") {
        cardType.src = "images/visa.png";
    } else if (getCardType === "MASTERCARD") {
        cardType.src = "images/mastercard.png";
    } else if (getCardType === "AMEX") {
        cardType.src = "images/amex.png";
    } else if (getCardType === "MAESTRO") {
        cardType.src = "images/maestrocard.png";
    } else if (getCardType === "UNIONPAY") {
        cardType.src = "images/unionpay.png";
    } else if (getCardType === "JCB") {
        cardType.src = "images/jcb.png";
    } else if (getCardType === "DISCOVER") {
        cardType.src = "images/discover.png";
    } else if (getCardType === "DINERSCLUB") {
        cardType.src = "images/dinersclub.png";
    } else {
        cardType.src = "images/visa.png";
    }
    cardTypeBack.src = cardType.src;
    if (l.getElementsByClassName('logo').length > 0) {
        l.replaceChild(cardType, l.getElementsByClassName('logo')[0]);
    } else {
        l.appendChild(cardType);
    }

    if (b.getElementsByClassName('logo-back').length > 0) {
        b.replaceChild(cardTypeBack, b.getElementsByClassName('logo-back')[0]);
    } else {
        b.appendChild(cardTypeBack);
    }
}

function format(ccnum) {
    var v = ccnum.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return ccnum
    }
}

function checkLength(e) {
    if (e.target.value.length < 16) {
        alert("Enter a valid credit card number");
        e.target.value = "";
    }
}

function checkCardType(cardNum) {

    var payCardType = "";
    var regexMap = [
        { regEx: /^4[0-9]{5}/ig, cardType: "VISA" },
        { regEx: /^5[1-5][0-9]{4}/ig, cardType: "MASTERCARD" },
        { regEx: /^3[47][0-9]{3}/ig, cardType: "AMEX" },
        { regEx: /^(5[06-8]\d{4}|6\d{5})/ig, cardType: "MAESTRO" },
        { regEx: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/ig, cardType: "DISCOVER" },
        { regEx: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ig, cardType: "DINERSCLUB" },
        { regEx: /^35(2[89]|[3-8][0-9])/ig, cardType: "JCB" },
        { regEx: /^(62[0-9]{14,17})$/ig, cardType: "UNIONPAY" }
    ];

    for (var j = 0; j < regexMap.length; j++) {
        if (cardNum.match(regexMap[j].regEx)) {
            payCardType = regexMap[j].cardType;
            break;
        }
    }

    if (cardNum.indexOf("50") === 0 || cardNum.indexOf("60") === 0 || cardNum.indexOf("65") === 0) {
        var g = "508500-508999|606985-607984|608001-608500|652150-653149";
        var i = g.split("|");
        for (var d = 0; d < i.length; d++) {
            var c = parseInt(i[d].split("-")[0], 10);
            var f = parseInt(i[d].split("-")[1], 10);
            if ((cardNum.substr(0, 6) >= c && cardNum.substr(0, 6) <= f) && cardNum.length >= 6) {
                payCardType = "RUPAY";
                break;
            }
        }
    }
    return payCardType;
}

function dispCvv(e) {
    document.getElementById("cvv-display").value = e.target.value;
    if (isNaN(e.target.value)) {
        alert("Only numbers allowed");
        document.getElementById("cvv-display").value = "";
        e.target.value = "";
    }
    if (e.target.value.length > 4) {
        alert("Please enter a valid CVV");
        document.getElementById("cvv-display").value = "";
    }
}

function dispName(e) {
    if (e.target.value) {
        document.getElementById("holderName").innerHTML = e.target.value.toUpperCase();
    } else {
        document.getElementById("holderName").innerHTML = "FULL NAME";
    }
}

function dispYear(e) {
    document.getElementById("year").innerHTML = e.target.value.substr(2, 4);
}

function dispMonth(e) {
    let m;
    if (e.target.value <= 9) {
        m = `0${e.target.value}`;
    } else {
        m = e.target.value;
    }

    document.getElementById("month").innerHTML = m;
}