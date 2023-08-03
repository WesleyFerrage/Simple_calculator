function outcome() {

    let total = 0;
    let boxOne = Number(document.getElementById("num-one").value); // value id input one
    let boxTwo = Number(document.getElementById("num-two").value); // value id input two
    let add = document.getElementById("box1").checked; // value addition
    let sub = document.getElementById("box2").checked; // value subtraction
    let mult = document.getElementById("box3").checked; // value multiplication

    if (add === true) {
        total = boxOne + boxTwo;

    } else if (sub === true) {
        total = boxOne - boxTwo;

    } else if (mult === true) {
        total = boxOne * boxTwo;

    } else {
        total = boxOne / boxTwo;

    }

    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total); // return in HTML
}
