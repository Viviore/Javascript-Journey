// IF STATEMENTS = if a condition is true, execute the code.
//                 if not, do something else.

// Age Checker
const ageInput = document.getElementById("age");
const submitAge = document.getElementById("submitAge");
const ageStatus = document.getElementById("ageStatus");

submitAge.onclick = function () {

    const age = Number(ageInput.value);

    if(age === 0) {
        ageStatus.style.color = "orange";
        ageStatus.textContent = `Status: Input Your Age.`
       
        
    } 
    else if(age >= 30) {
        ageStatus.style.color = "orange";
        ageStatus.textContent = `Status: You are too old.`;
    }
    else if (age >= 18) {
        ageStatus.style.color = "green";
        ageStatus.textContent = `Status: CONGRATULATIONS! You are not a minor.`;
    }
    else if (age > 0){
        ageStatus.style.color = "red";
        ageStatus.textContent = `Status: You are still a minor!`;
    }
    else if (age < 0) {
        ageStatus.style.color = "red";
        ageStatus.textContent = `Stauts: Your age can't be below 0`
    }
}

// Student Checker
const studentTrue = document.getElementById("studentTrue");
const studentFalse = document.getElementById("studentFalse");
const studentStatus = document.getElementById("studentStatus");
const submitStudent = document.getElementById("submitStudent");

submitStudent.onclick = function(event) {
    event.preventDefault();


    if (studentTrue.checked) {
        studentStatus.style.color = "green"
        studentStatus.textContent = "Status: CONGRATULATIONS! You are a student!";
        
    } else if(studentFalse.checked) {
        studentStatus.style.color = "red";
        studentStatus.textContent = "Status: You are not a student.";

    } else {
        studentStatus.style.color = "orange";
        studentStatus.textContent = "Status: Please select your option.";
    }
}

//Diploma Checker
const graduateTrue = document.getElementById("graduateTrue");
const graduateFalse = document.getElementById("graduateFalse");
const graduateStatus = document.getElementById("graduateStatus");
const submitGraduate = document.getElementById("submitGraduate");

submitGraduate.onclick = function(event) {
    const diplomaForm = document.getElementById("diplomaForm");
    const diplomaTrue = document.getElementById("diplomaTrue");
    const diplomaFalse = document.getElementById("diplomaFalse");
    event.preventDefault();

    if (graduateTrue.checked) {
        diplomaForm.style.display = "block";
        if (diplomaTrue.checked) {
            graduateStatus.style.color = "green"
            graduateStatus.textContent = "Status: CONGRATULATIONS! You are a graduatee, with diploma."
        }
        else if (diplomaFalse.checked) {
            graduateStatus.style.color = "orange"
            graduateStatus.textContent = "Status: CONGRATULATIONS! You are a graduatee without a diploma yet."
        }

    }
    else if (graduateFalse.checked) {
        graduateStatus.style.color = "red"
        graduateStatus.textContent = "Status: You are not a graduatee."
         diplomaForm.style.display = "none";
    }
    else {
        graduateStatus.style.color = "orange"
        graduateStatus.textContent = "Status: Please select your option."
         diplomaForm.style.display = "none";
    }
}
