const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// GET RANDOM NUMBER FUNCTION
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


btn.addEventListener('click', () => {
    // GET RANDOM NUMBER BETWEEN 1-3 FOR ARRAY INDEX
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})