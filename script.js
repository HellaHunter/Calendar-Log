var inputForm = document.querySelectorAll(".input-zone")
var formFill = document.querySelectorAll(".form-control")
var server = document.querySelectorAll("server")
var button = document.querySelectorAll(".btn")

var currentHour = moment().hour();

var input_0 = document.querySelector("#form-0")
var input_1 = document.querySelector("#form-1")
var input_2 = document.querySelector("#form-2")
var input_3 = document.querySelector("#form-3")
var input_4 = document.querySelector("#form-4")
var input_5 = document.querySelector("#form-5")
var input_6 = document.querySelector("#form-6")
var input_7 = document.querySelector("#form-7")
var input_8 = document.querySelector("#form-8")
var input_9 = document.querySelector("#form-9")
var input_10 = document.querySelector("#form-10")

const valueArray = [
    input_0.value = localStorage["input-0"],
    input_1.value = localStorage["input-1"],
    input_2.value = localStorage["input-2"],
    input_3.value = localStorage["input-3"],
    input_4.value = localStorage["input-4"],
    input_5.value = localStorage["input-5"],
    input_6.value = localStorage["input-6"],
    input_7.value = localStorage["input-7"],
    input_8.value = localStorage["input-8"],
    input_9.value = localStorage["input-9"],
    input_10.value = localStorage["input-10"]
]


var currentDay;
currentDay = moment().format("MMMM Do YYYY")
$("#currentDay").text(currentDay)

var eightAM;
eightAM = 8
$("#8AM").text("8AM")

var nineAM;
nineAM = 9
$("#9AM").text("9AM")

var tenAM;
tenAM = 10
$("#10AM").text("10AM")

var elevenAM;
elevenAM = 11
$("#11AM").text("11AM")

var twelvePM;
twelvePM = 12
$("#12PM").text("12PM")

var onePM;
onePM = 13
$("#1PM").text("1PM")

var twoPM;
twoPM = 14
$("#2PM").text("2PM")

var threePM;
threePM = 15
$("#3PM").text("3PM")

var fourPM;
fourPM = 16
$("#4PM").text("4PM")

var fivePM;
fivePM = 17
$("#5PM").text("5PM")

var sixPM;
sixPM = 18
$("#6PM").text("6PM")

function timePassedIndicator() {

        if(currentHour < eightAM) {
            inputForm[0].style.backgroundColor = '#c8e6c9'
            formFill[0].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > eightAM) {
            inputForm[0].style.backgroundColor = '#cac8ce'
            formFill[0].style.backgroundColor = '#cac8ce'
        } else if(currentHour === eightAM) {
            inputForm[0].style.backgroundColor = '#FF0000'
            formFill[0].style.backgroundColor = '#FF0000'
        }

        if(currentHour < nineAM) {
            inputForm[1].style.backgroundColor = '#c8e6c9'
            formFill[1].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > nineAM) {
            inputForm[1].style.backgroundColor = '#cac8ce'
            formFill[1].style.backgroundColor = '#cac8ce'
        } else if(currentHour === nineAM) {
            inputForm[1].style.backgroundColor = '#FF0000'
            formFill[1].style.backgroundColor = '#FF0000'
        }

        if(currentHour < tenAM) {
            inputForm[2].style.backgroundColor = '#c8e6c9'
            formFill[2].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > tenAM) {
            inputForm[2].style.backgroundColor = '#cac8ce'
            formFill[2].style.backgroundColor = '#cac8ce'
        } else if(currentHour === tenAM) {
            inputForm[2].style.backgroundColor = '#FF0000'
            formFill[2].style.backgroundColor = '#FF0000'
        }
        
        if(currentHour < elevenAM) {
            inputForm[3].style.backgroundColor = '#c8e6c9'
            formFill[3].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > elevenAM) {
            inputForm[3].style.backgroundColor = '#cac8ce'
            formFill[3].style.backgroundColor = '#cac8ce'
        } else if(currentHour === elevenAM) {
            inputForm[3].style.backgroundColor = '#FF0000'
            formFill[3].style.backgroundColor = '#FF0000'
        }

        if(currentHour < twelvePM) {
            inputForm[4].style.backgroundColor = '#c8e6c9'
            formFill[4].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > twelvePM) {
            inputForm[4].style.backgroundColor = '#cac8ce'
            formFill[4].style.backgroundColor = '#cac8ce'
        } else if(currentHour === twelvePM) {
            inputForm[4].style.backgroundColor = '#FF0000'
            formFill[4].style.backgroundColor = '#FF0000'
        }

        if(currentHour < onePM) {
            inputForm[5].style.backgroundColor = '#c8e6c9'
            formFill[5].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > onePM) {
            inputForm[5].style.backgroundColor = '#cac8ce'
            formFill[5].style.backgroundColor = '#cac8ce'
        } else if(currentHour === onePM) {
            inputForm[5].style.backgroundColor = '#FF0000'
            formFill[5].style.backgroundColor = '#FF0000'
        }

        if(currentHour < twoPM) {
            inputForm[6].style.backgroundColor = '#c8e6c9'
            formFill[6].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > twoPM) {
            inputForm[6].style.backgroundColor = '#cac8ce'
            formFill[6].style.backgroundColor = '#cac8ce'
        } else if(currentHour === twoPM) {
            inputForm[6].style.backgroundColor = '#FF0000'
            formFill[6].style.backgroundColor = '#FF0000'
        }

        if(currentHour < threePM) {
            inputForm[7].style.backgroundColor = '#c8e6c9'
            formFill[7].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > threePM) {
            inputForm[7].style.backgroundColor = '#cac8ce'
            formFill[7].style.backgroundColor = '#cac8ce'
        } else if(currentHour === threePM) {
            inputForm[7].style.backgroundColor = '#FF0000'
            formFill[7].style.backgroundColor = '#FF0000'
        }

        if(currentHour < fourPM) {
            inputForm[8].style.backgroundColor = '#c8e6c9'
            formFill[8].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > fourPM) {
            inputForm[8].style.backgroundColor = '#cac8ce'
            formFill[8].style.backgroundColor = '#cac8ce'
        } else if(currentHour === fourPM) {
            inputForm[8].style.backgroundColor = '#FF0000'
            formFill[8].style.backgroundColor = '#FF0000'
        }

        if(currentHour < fivePM) {
            inputForm[9].style.backgroundColor = '#c8e6c9'
            formFill[9].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > fivePM) {
            inputForm[9].style.backgroundColor = '#cac8ce'
            formFill[9].style.backgroundColor = '#cac8ce'
        } else if(currentHour === fivePM) {
            inputForm[9].style.backgroundColor = '#FF0000'
            formFill[9].style.backgroundColor = '#FF0000'
        }

        if(currentHour < sixPM) {
            inputForm[10].style.backgroundColor = '#c8e6c9'
            formFill[10].style.backgroundColor = '#c8e6c9'
        } else if(currentHour > sixPM) {
            inputForm[10].style.backgroundColor = '#cac8ce'
            formFill[10].style.backgroundColor = '#cac8ce'
        } else if(currentHour === sixPM) {
            inputForm[10].style.backgroundColor = '#FF0000'
            formFill[10].style.backgroundColor = '#FF0000'
        }
    };

console.log(currentHour < twoPM)
console.log(currentHour)
console.log(twoPM)
console.log(button[0])

console.log(input_0)

function buttonPressed0() {
    localStorage.setItem("input-0", input_0.value)
    localStorage.getItem("input-0")
    input_0 = localStorage["input-0"]
    location.reload()
}

function buttonPressed1() {
    localStorage.setItem("input-1", input_1.value)
    localStorage.getItem("input-1")
    input_1 = localStorage["input-1"]
    location.reload()
}

function buttonPressed2() {
    localStorage.setItem("input-2", input_2.value)
    localStorage.getItem("input-2")
    input_2 = localStorage["input-2"]
    location.reload()
}
function buttonPressed3() {
    localStorage.setItem("input-3", input_3.value)
    localStorage.getItem("input-3")
    input_3 = localStorage["input-3"]
    location.reload()
}
function buttonPressed4() {
    localStorage.setItem("input-4", input_4.value)
    localStorage.getItem("input-4")
    input_4 = localStorage["input-4"]
    location.reload()
}
function buttonPressed5() {
    localStorage.setItem("input-5", input_5.value)
    localStorage.getItem("input-5")
    input_5 = localStorage["input-5"]
    location.reload()
}
function buttonPressed6() {
    localStorage.setItem("input-6", input_6.value)
    localStorage.getItem("input-6")
    input_6 = localStorage["input-6"]
    location.reload()
}
function buttonPressed7() {
    localStorage.setItem("input-7", input_7.value)
    localStorage.getItem("input-7")
    input_7 = localStorage["input-7"]
    location.reload()
}
function buttonPressed8() {
    localStorage.setItem("input-8", input_8.value)
    localStorage.getItem("input-8")
    input_8 = localStorage["input-8"]
    location.reload()
}
function buttonPressed9() {
    localStorage.setItem("input-9", input_9.value)
    localStorage.getItem("input-9")
    input_9 = localStorage["input-9"]
    location.reload()
}
function buttonPressed10() {
    localStorage.setItem("input-10", input_10.value)
    localStorage.getItem("input-10")
    input_10 = localStorage["input-10"]
    location.reload()
}

function cleanForm() {
    if (valueArray[0] === undefined) {
        input_0.value = ""
    }
    if (valueArray[1] === undefined) {
        input_1.value = ""
    }
    if (valueArray[2] === undefined) {
        input_2.value = ""
    }
    if (valueArray[3] === undefined) {
        input_3.value = ""
    }
    if (valueArray[4] === undefined) {
        input_4.value = ""
    }
    if (valueArray[5] === undefined) {
        input_5.value = ""
    }
    if (valueArray[6] === undefined) {
        input_6.value = ""
    }
    if (valueArray[7] === undefined) {
        input_7.value = ""
    }
    if (valueArray[8] === undefined) {
        input_8.value = ""
    }
    if (valueArray[9] === undefined) {
        input_9.value = ""
    }
    if (valueArray[10] === undefined) {
        input_10.value = ""
    }
}

function clearAll() {
    localStorage.clear()
    location.reload()
}

console.log(typeof(valueArray[2]))
input_0.value = localStorage["input-0"]
input_1.value = localStorage["input-1"]
input_2.value = localStorage["input-2"]
input_3.value = localStorage["input-3"]
input_4.value = localStorage["input-4"]
input_5.value = localStorage["input-5"]
input_6.value = localStorage["input-6"]
input_7.value = localStorage["input-7"]
input_8.value = localStorage["input-8"]
input_9.value = localStorage["input-9"]
input_10.value = localStorage["input-10"]

button[0].addEventListener("click", buttonPressed0);
button[1].addEventListener("click", buttonPressed1);
button[2].addEventListener("click", buttonPressed2);
button[3].addEventListener("click", buttonPressed3);
button[4].addEventListener("click", buttonPressed4);
button[5].addEventListener("click", buttonPressed5);
button[6].addEventListener("click", buttonPressed6);
button[7].addEventListener("click", buttonPressed7);
button[8].addEventListener("click", buttonPressed8);
button[9].addEventListener("click", buttonPressed9);
button[10].addEventListener("click", buttonPressed10);

button[11].addEventListener("click", clearAll)

timePassedIndicator()
cleanForm()