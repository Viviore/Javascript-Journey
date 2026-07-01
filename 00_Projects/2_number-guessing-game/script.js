// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
// 1
// let attempt = 0;
// let guess;
// let running = true

// while(running){
    
//     guess = window.prompt(`Guess the number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)) {
//         window.alert("Please enter a valid number!"); // FIXED: Removed =
//     } else if(guess < minNum || guess > maxNum) {
//         window.alert("Please enter a valid number!"); // FIXED: Removed =
//     } else {
//         attempt++;
//         if(guess < answer) {
//             window.alert("Too Low. Try Again!"); // FIXED: Removed =
//         } else if (guess > answer) {
//             window.alert("Too High. Try Again!"); // FIXED: Removed =
//         } else {
//             window.alert(`Congratulations! You GUESSED IT. The answer was ${answer}. Your attempts was ${attempt} attempts.`); // FIXED: Removed =
//             running = false; // Stops the loop perfectly!
//         }
//     }
// }

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempt;
let guess;
let running = true;

while(running) {
    guess = window.prompt("Please enter your answer.")
    guess = Number(guess)

    if(isNaN(guess)) {
        window.alert("Please enter valid number!")
    } else if(guess < minNum || guess >  maxNum) {
    window.alert(`Please stay within range of ${minNum} and ${maxNum}!` )
    } else {
        attempt++
        if(guess < answer) {
            window.alert("Too Low. Try Again!")
        } else if (guess > answer) {
            window.alert("Too High. Try Again!")
        } else {
            window.alert(`Congratulations you guesed the answer it's ${answer}, with a total attempts of ${attempt}`)
        running = false
        }
    }

}
