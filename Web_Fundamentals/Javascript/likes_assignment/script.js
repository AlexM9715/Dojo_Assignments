var counter = {
    1: 9
}
var counter2 = {
    1: 12
}
function like() {
    var element = document.querySelector("#like-1");
    console.log(element.innerText);
    counter[1]++;
    element.innerText = counter[1];
}

function like2() {
    var element = document.querySelector("#like-2");
    console.log(element.innerText);
    counter2[1]++;
    element.innerText = counter2[1];
}

function like3() {
    var element = document.querySelector("#like-3");
    console.log(element.innerText);
    counter[1]++;
    element.innerText = counter[1];
}