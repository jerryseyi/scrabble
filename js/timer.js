import moment from "moment";

let time = moment().add(60, 'seconds')
let interval = setInterval(() => {
    let diff = time.diff(moment());

    if (diff <= 1) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = '00:00';
        document.getElementById('timer').classList.add('danger');
    } else {
        document.getElementById('timer').innerHTML = moment.utc(diff).format("mm:ss");
    }
}, 1000);

console.log(interval);

function randomLetters(length = 10) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let words = [];

    for (let i = 0; i < length; i++) {
        let letter = letters.charAt(Math.floor(Math.random() * 26));
        words[i] = letter;
    }
    return words;
}

document.getElementById('scrabbleLetters').innerHTML = randomLetters(10).toString();