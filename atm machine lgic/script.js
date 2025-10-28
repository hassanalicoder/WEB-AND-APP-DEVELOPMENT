let message = prompt("Enter YOur Message Here")
 console.log(message)

  let correctPin = 1234
 let amountInAcc = 10000;
 alert("Hello User!")

 let pinCode = prompt("Enter your pin code")
 console.log(pinCode)

 if(correctPin == pinCode){
  console.log("correct pin")
 let withdrawlAmount = prompt("Enter your debit amount")
 if(amountInAcc < withdrawlAmount){
 console.log("Insufficient Balance")
 }else {
     amountInAcc = amountInAcc - withdrawlAmount
 }
 console.log("withdrawl Amount --->",withdrawlAmount)
 }else {
     console.log("Please Enter a correct pin code")
 }

 console.log("Amount In Account -->",amountInAcc)