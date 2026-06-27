let gradeInput = document.getElementById("gradeInput");
const gradeStatus = document.getElementById("gradeStatus");

const submitGrade = document.getElementById("submitGrade");

submitGrade.onclick = function() {
    let userInput = Number(gradeInput.value);

    switch(true){
        case userInput > 100 :
            gradeStatus.textContent = "Grade must not go beyond 100";
            break;
        case userInput < 0 :
            gradeStatus.textContent = "Grade must not go below 0";
            break;

        case userInput >= 90 :
            gradeStatus.textContent = "Your grade is A";
            break;
        case userInput >= 80 :
            gradeStatus.textContent = "Your grade is B";
            break;
        case userInput >= 70 :
            gradeStatus.textContent = "Your grade is C";
            break;
        
        default:
            gradeStatus.textContent = "Your grade is F"
    }
}