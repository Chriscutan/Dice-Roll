const numberList = [1, 2, 3, 4, 5, 6];
let roll = document.getElementById('roll').addEventListener('click', playAnimation)

function showRandomNumber(){
    let randomDigit = Math.floor(Math.random() * numberList.length);
    let numText = document.getElementById('number');
    numText.innerHTML = numberList[randomDigit];
}

function playAnimation(){
    document.getElementById('dice').classList.add('play-animation');
    setTimeout( ()=>{
        document.getElementById('dice').classList.remove('play-animation');
    }, 1000);
    showRandomNumber();
}