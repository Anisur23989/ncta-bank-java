document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
   
// update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // for input-field clear
    depositInput.value = '';

       
});

// update withdraw function

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

// // update withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawText);
const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

//update Account Balance
const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

// //for input-field clear
withdrawInput.value = '';


})