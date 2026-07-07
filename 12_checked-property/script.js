// .checked = property that dete,omes tje cjecled state pf an HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const radioContainer = document.getElementById("radioContainer");

document.getElementById("mySubmit").onclick = function() {

   if(myCheckbox.checked) {
    subResult.textContent = 'You are SUBSCRIBED!'
    radioContainer.style = 'display: block'
   } else {
    subResult.textContent = 'You are NOT SUBSCRIBED'
   }

   if(visaBtn.checked) {
    paymentResult.textContent = 'Purchased via VISA'
   } else if(masterCardBtn.checked) {
    paymentResult.textContent = 'Purchased via MASTERCARD'
   } else if(paypalBtn.checked) {
    paymentResult.textContent = 'Purchased via PAYPAL'
   } else {
    paymentResult.textContent = 'select PAYMENT METHOD'
    paymentResult.style = 'display: block'
   }
   
}
