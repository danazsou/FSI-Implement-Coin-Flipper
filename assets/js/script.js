// TODO: Declare any global variables we need
let headsFlips = 0
let tailsFlips = 0

document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#flip').addEventListener('click', () => {
        let flippedHeads = Math.random() <.5;
        if(flippedHeads) {
            document.querySelector('#penny-image').src = './assets/images/penny-heads.jpg';
            document.querySelector('#message').textContent = "You Flipped Heads!";
            headsFlips++;
       
        }else {
            document.querySelector('#penny-image').src = './assets/images/penny-tails.jpg';
            document.querySelector('#message').textContent = "You Flipped Tails!";
            tailsFlips++;
    }

    let totalFlips = headsFlips + tailsFlips;
    let percentHeads = 0;
    let percentTails = 0;

    if (totalFlips > 0) {
        percentHeads = Math.round((headsFlips / totalFlips)* 100);
        percentTails = Math.round((tailsFlips / totalFlips)* 100);
    }


    document.querySelector("#heads").textContent = headsFlips;
    document.querySelector("#heads-percent").textContent = percentHeads + '%';
    document.querySelector("#tails").textContent = tailsFlips;
    document.querySelector("#tails-percent").textContent = percentTails + '%';


     // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector("#clear").addEventListener("click", function() {
        headsFlips = 0;
        tailsFlips = 0;

        document.querySelector('#message').textContent = "Lets Get Rolling!";

        let totalFlips = headsFlips + tailsFlips;
        let percentHeads = 0;
        let percentTails = 0;

        //best practice to add below as well to avoid potential bugs!!
        if (totalFlips > 0) {
            percentHeads = Math.round((headsFlips / totalFlips)* 100);
            percentTails = Math.round((tailsFlips / totalFlips)* 100);
        }
    
        document.querySelector("#heads").textContent = headsFlips;
        document.querySelector("#heads-percent").textContent = percentHeads + '%';
        document.querySelector("#tails").textContent = tailsFlips;
        document.querySelector("#tails-percent").textContent = percentTails + '%';
    })
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

        //Make Sure everything is closed out so that code runs properly
})})