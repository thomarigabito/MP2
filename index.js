// Variables
let amount;
let payment;
let percent;
let interest;

// Function for Computation
function myComputation() {
     amount = Number(amount);
     payment = Number(payment);
     percent = Number(percent);
  
  // Getting values from input fields
     amount = document.getElementById("loanAmount").value; //Desire Loan Amount
     payment = document.getElementById("loanPayment").value; // Preferred Payment Period.
     percent = document.getElementById("paymentPeriod").value; // Preferred Fixed Pricing Period
    
    // Accessing form element
     var formCompution = document.getElementById("formCompution")
    
    // Constants
    const dpr = .5;
    const ltv = .95
  
    // Additional logic for select dropdown
    const select = document.getElementById('loanCompute');
    const value = select.value; 
  
    console.log(value)

    // Computation- dpr=Downpayment Ratio, ltv=Loan-to-Value ratio- "maximum loan amount that can be approved"
    let Ainterest = amount * payment * percent;
    let downpayment = amount * dpr;
    let monthyInterest = Ainterest / 12;
    let maxLoan = amount * ltv;
   
      // Parsing to numbers     
        downpayment = Number(downpayment);
        Ainterest = Number(Ainterest);
        monthyInterest = Number(monthyInterest);
        
      // Switch statement based on the selected option
      switch (value) {
        case 'option1':
          document.getElementById("desired").innerHTML = "Monthly Income?"
          document.getElementById("info1").style.display = "block";
          document.getElementById("myAmount").innerHTML = "₱" + Math.round(maxLoan);
          document.getElementById("myInterest").innerHTML = "₱ " + Math.round(Ainterest);
          document.getElementById("myDownpayment").innerHTML = "₱ " + Math.round(downpayment);
          document.getElementById("myMortage").innerHTML = "₱ " + Math.round(monthyInterest);
          document.getElementById("info2").style.display = "none";
          document.getElementById("error").style.display = "none"
          console.log(value)

        break;
        case 'option2':
          document.getElementById("desired").innerHTML = "Desired Loan Amount?"
          document.getElementById("info1").style.display = "none";
          document.getElementById("error").style.display = "none"
          document.getElementById("info2").style.display = "block";
          document.getElementById("myAmount2").innerHTML = "₱ "+ Math.round(maxLoan);
          document.getElementById("myInterest2").innerHTML = "₱ " + Math.round(Ainterest);
          document.getElementById("myMortage2").innerHTML ="₱ " + Math.round(monthyInterest);
          console.log(value)
        break;
        default:
          window.alert("What do you want to compute?");
          document.getElementById("error").style.display = "block"
          document.getElementById("error").style.margin = "auto 0"
          document.getElementById("error").style.padding = "1rem"
        } 
} 
// Resetting the form
formCompution.reset();
