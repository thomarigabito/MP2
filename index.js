

let amount;
let payment;
let percent;
let interest;





    
function myComputation() {
    amount = Number(amount);
    payment = Number(payment);
    percent = Number(percent);
    amount = document.getElementById("loanAmount").value;
    payment = document.getElementById("loanPayment").value;
    percent = document.getElementById("paymentPeriod").value;
    
    let interest = amount * payment * percent;
    interest = Number(interest);
    document.getElementById("loanAmount").innerHTML = interest;
    console.log(interest);
}   

