function submit(val) {
    var result = document.getElementById("result");
    result.value += val;
}

function evalute() {
    var result = document.getElementById("result");
    result.value = eval(result.value);


}
// it is used to  delete the value one by one at the end
function resultClear() {
    var result = document.getElementById("result");


    var len = result.value.length;
    result.value = result.value.substring(0, len - 1);
}
// it is used to clear All user value in result button
function resultClearAll() {
    var result = document.getElementById("result");
    result.value = "";
}
// this function is used to change the theme
function changemode() {
    var swithcFile = document.getElementById("theme");
    var themechange = document.getElementById("changetheme");

    if (themechange.getAttribute('href') === "light.css") {
        themechange.href = "dark.css";
        swithcFile.value = "Light-mode";
    }
    else {
        themechange.href = "light.css";
        swithcFile.value = "dark-mode";
    }
}

// it is used for square root
function sqrt() {
    var firstresult = document.getElementById("result").value;
    var finalresult = Math.sqrt(firstresult);
    document.getElementById("result").value = finalresult;

}
// it is used to find the tan value first we click a value then if we want to our value is radian then click on radian button and then press a cos button

function sinFun() {


    var sinvalueFirstResult = document.getElementById("result").value;
    var sinSecondResult = Math.sin(sinvalueFirstResult);
    document.getElementById("result").value = sinSecondResult;

}

// it is used to find the tan value first we click a value then if we want to our value is radian then click on radian button and then press a cos button
function cosFunction() {
    var cosFirstvalue = document.getElementById("result").value;
    var cosSecondValue = Math.cos(cosFirstvalue);
    document.getElementById("result").value = cosSecondValue;
}
// it is used to find the tan value first we click a value then if we want to our value is radian then click on radian button and then press a tan button
function tanFunction() {
    var tanFirstvalue = document.getElementById("result").value;
    var tanSecondValue = Math.tan(tanFirstvalue);
    document.getElementById("result").value = tanSecondValue;
}
// it is used to find the tan inverst value
function sinInverseFunction() {
    var SinInverseFirstValue = document.getElementById("result").value;
    var SinInverseSecondValue = Math.asin(SinInverseFirstValue);
    document.getElementById("result").value = SinInverseSecondValue;

}

// it is used to find the cosinverse value
function cosInverseFunction() {
    document.getElementById("result").value = Math.acos(document.getElementById("result").value)

}
// thsi function is used to find the tan invserse
function tanInverseFunction() {
    var tanInverseFirstValue = document.getElementById("result").value;
    var tanInverseSecondValue = Math.atan(tanInverseFirstValue);
    document.getElementById("result").value = tanInverseSecondValue;

}
// this is used to caluclate the log value
function logFunction() {
    var logFirstValue = document.getElementById("result").value;
    var logSecondvalue = Math.log(logFirstValue);
    document.getElementById("result").value = logSecondvalue;
}
// this is used to calculate the pi value
function CalculatePivalue() {
    document.getElementById("result").value = Math.PI;
}
// this is used to calculate the power ten
function CalculateTenPower() {
    var firstPowerValue = document.getElementById("result").value;
    var SecondPowerValue = 10 ** firstPowerValue;
    document.getElementById("result").value = SecondPowerValue;
}
// this is used to find the square value with user value
function Xsquare() {
    document.getElementById("result").value = document.getElementById("result").value ** 2;
}

// this function is used to convert user value to its respective exponention 

function ExponentionValue() {
    document.getElementById("result").value = Math.exp(document.getElementById("result").value);
}

// this function is calculate the log value to factorial
function FindlogBase10() {
    document.getElementById("result").value = Math.log10(document.getElementById("result").value);
}

// this  function is used to convert the user value to factorial
function FindFactorial() {
    var fact = document.getElementById("result").value;
    var answer = 1;

    if (fact == 0 || fact == 1) {
        answer = 1;

    }

    else {
        for (var i = fact; i >= 1; i--) {
            answer = answer * i;
        }


    }

    document.getElementById("result").value = answer;

}

// it is used to convert degree value to radian value
function degree_to_Radian() {
    var userValue = document.getElementById("result").value;
    document.getElementById("result").value = userValue * (3.14 / 180);



}
// It is usded to convert radian value to degree value
function radian_to_degree() {
    var userValue = document.getElementById("result").value;
    document.getElementById("result").value = userValue * (180 / 3.14);
}




