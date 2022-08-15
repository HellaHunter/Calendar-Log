var inputForm = document.querySelectorAll(".input-zone")
var currentMoment = moment().format()
var formFill = document.querySelectorAll('.form-control')

var currentDay;
currentDay = moment().format("MMMM Do YYYY")
$("#currentDay").text(currentDay)

var eightAM;
eightAM = moment().set('hour', 8).format("hA")
$("#8AM").text(eightAM)

var nineAM;
nineAM = moment().set('hour', 9).format("hA")
$("#9AM").text(nineAM)

var tenAM;
tenAM = moment().set('hour', 10).format("hA")
$("#10AM").text(tenAM)

var elevenAM;
elevenAM = moment().set('hour', 11).format("hA")
$("#11AM").text(elevenAM)

var twelvePM;
twelvePM = moment().set('hour', 12).format("hA")
$("#12PM").text(twelvePM)

var onePM;
onePM = moment().set('hour', 13).format("hA")
$("#1PM").text(onePM)

var twoPM;
twoPM = moment().set('hour', 14).format("hA")
$("#2PM").text(twoPM)

var threePM;
threePM = moment().set('hour', 15).format("hA")
$("#3PM").text(threePM)

var fourPM;
fourPM = moment().set('hour', 16).format("hA")
$("#4PM").text(fourPM)

var fivePM;
fivePM = moment().set('hour', 17).format("hA")
$("#5PM").text(fivePM)

var sixPM;
sixPM = moment().set('hour', 18).format("hA")
$("#6PM").text(sixPM)

function timePassedIndicator() {

        if(currentMoment > eightAM) {
            inputForm[0].style.backgroundColor = '#c8e6c9'
            formFill[0].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < eightAM) {
            inputForm[0].style.backgroundColor = '#cac8ce'
            formFill[0].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > nineAM) {
            inputForm[1].style.backgroundColor = '#c8e6c9'
            formFill[1].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < nineAM) {
            inputForm[1].style.backgroundColor = '#cac8ce'
            formFill[1].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > tenAM) {
            inputForm[2].style.backgroundColor = '#c8e6c9'
            formFill[2].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < tenAM) {
            inputForm[2].style.backgroundColor = '#cac8ce'
            formFill[2].style.backgroundColor = '#cac8ce'
        }
        
        if(currentMoment > elevenAM) {
            inputForm[3].style.backgroundColor = '#c8e6c9'
            formFill[3].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < elevenAM) {
            inputForm[3].style.backgroundColor = '#cac8ce'
            formFill[3].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > twelvePM) {
            inputForm[4].style.backgroundColor = '#c8e6c9'
            formFill[4].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < twelvePM) {
            inputForm[4].style.backgroundColor = '#cac8ce'
            formFill[4].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > onePM) {
            inputForm[5].style.backgroundColor = '#c8e6c9'
            formFill[5].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < onePM) {
            inputForm[5].style.backgroundColor = '#cac8ce'
            formFill[5].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > twoPM) {
            inputForm[6].style.backgroundColor = '#c8e6c9'
            formFill[6].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < twoPM) {
            inputForm[6].style.backgroundColor = '#cac8ce'
            formFill[6].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > threePM) {
            inputForm[7].style.backgroundColor = '#c8e6c9'
            formFill[7].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < threePM) {
            inputForm[7].style.backgroundColor = '#cac8ce'
            formFill[7].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > fourPM) {
            inputForm[8].style.backgroundColor = '#c8e6c9'
            formFill[8].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < fourPM) {
            inputForm[8].style.backgroundColor = '#cac8ce'
            formFill[8].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > fivePM) {
            inputForm[9].style.backgroundColor = '#c8e6c9'
            formFill[9].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < fivePM) {
            inputForm[9].style.backgroundColor = '#cac8ce'
            formFill[9].style.backgroundColor = '#cac8ce'
        }

        if(currentMoment > sixPM) {
            inputForm[10].style.backgroundColor = '#c8e6c9'
            formFill[10].style.backgroundColor = '#c8e6c9'
        } else if(currentMoment < sixPM) {
            inputForm[10].style.backgroundColor = '#cac8ce'
            formFill[10].style.backgroundColor = '#cac8ce'
        }
    }

console.log(currentMoment)

timePassedIndicator()