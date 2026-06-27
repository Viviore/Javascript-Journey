// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a ariable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

const employeeChecker = document.getElementById("employeeChecker");
let employeeStatus = document.getElementById("employeeStatus");

const graduateTrue = document.getElementById("graduateTrue");
const graduateFalse = document.getElementById("graduateFalse");
let graduateStatus = document.getElementById("graduateStatus")

const submit = document.getElementById("submit");

submit.onclick = function(event) {
    event.preventDefault()

    let employeeInput = Number(employeeChecker.value);
    employeeStatus = employeeInput >= 18 ? employeeStatus.textContent = `You are allowed to work` : employeeStatus.textContent = `You are not allowed to work`;

    graduateStatus = graduateTrue.checked ? graduateStatus.textContent = `You are a graduate employee` : graduateStatus.textContent = 'You are not a graduate employee'
    
}