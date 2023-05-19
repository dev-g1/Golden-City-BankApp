"use strict";
const createAcc = document.querySelector('.create-acc');
const form = document.querySelector('.createAcc');
createAcc === null || createAcc === void 0 ? void 0 : createAcc.addEventListener('click', (e) => {
    // createAcc.style.visibility = "hidden";
    form.style.visibility = "visible";
});
const createNewAcc = document.querySelector('.createNewAccount');
createNewAcc === null || createNewAcc === void 0 ? void 0 : createNewAcc.addEventListener('click', createAccount);
const deposit = document.querySelector(".deposit");
const withdraw = document.querySelector(".withdraw");
const transfer = document.querySelector(".transfer");
let userName;
let accNo;
let newUser1;
const userBal = document.querySelector(".account_bal");
const account_name = document.querySelector('.acct-name');
const userInfo = document.querySelector(".user-info");
const hero_page = document.querySelector(".hero-page");
const acct_num = document.querySelector(".account-num");
const users_page = document.querySelector(".users-page");
function createAccount(e) {
    e.preventDefault();
    // createAcc.style.visibility = "hidden";
    const firstName = document.querySelector('.first_name');
    const lastName = document.querySelector('.last_name');
    const phoneNumber = document.querySelector('.phone_no');
    const number_error_msg = document.querySelector(".number-error-msg");
    if (firstName.value && lastName.value && phoneNumber.value != '') {
        if (phoneNumber.value.length > 10) {
            number_error_msg.style.display = "block";
            number_error_msg.innerHTML = '10 digits only - Please remove the first zero';
        }
        else {
            form.style.visibility = "collapse";
            hero_page.style.display = 'none';
            users_page.style.display = 'block';
        }
        // alert("Please enter a value")
        // form.style.visibility = "visible"
    }
    // console.log(firstName);
    // console.log(firstName.value);
    userName = `${firstName.value}  ${lastName.value}`;
    console.log(userName);
    account_name.innerHTML = userName;
    // userBal.innerHTML = '0';
    acct_num.innerHTML = phoneNumber.value;
    newUser1 = new BankAppSystem(" ", 0);
    console.log(newUser1.account_Name = userName);
    // const link = document.querySelector('.createNewAccountlink') as HTMLAnchorElement;
    // link.href = "userAccountPage.html"
    // console.log(link.href)
    // if (userName != null) {
    //     ? ;
    //     console.log(userName);
    // }
}
// userInfo.style.backgroundColor = '#ff0980';
// const checking_stn = document.querySelector('.checking-something') as HTMLDivElement;
// checking_stn.innerHTML = "checking something"
deposit === null || deposit === void 0 ? void 0 : deposit.addEventListener("click", makeDeposit);
withdraw === null || withdraw === void 0 ? void 0 : withdraw.addEventListener("click", makeWithdraw);
transfer === null || transfer === void 0 ? void 0 : transfer.addEventListener("click", makeTransfer);
const deposit_form = document.querySelector(".deposit-form");
const withdraw_form = document.querySelector(".withdraw-form");
const transfer_form = document.querySelector(".transfer-form");
const deposit_amount = document.querySelector(".deposit-amount");
const withdraw_amount = document.querySelector(".withdraw-amount");
const transfer_amount = document.querySelector(".transfer-amount");
const click_deposit = document.querySelector(".click-to-deposit");
click_deposit.addEventListener("click", deposit_money);
const click_withdraw = document.querySelector(".click-to-withdraw");
click_withdraw.addEventListener("click", withdraw_money);
const click_transfer = document.querySelector(".click-to-transfer");
click_transfer.addEventListener("click", transfer_money);
const click_close = document.querySelector(".transfer-receipt");
click_close.addEventListener("click", transfer_money);
function deposit_money() {
    let amount = deposit_amount.value;
    // let amount = (prompt("How much?"))
    if (amount == '') {
        alert('Please enter an amount');
    }
    else {
        if (amount != null) {
            newUser1 === null || newUser1 === void 0 ? void 0 : newUser1.deposit(parseInt(amount));
        }
    }
    console.log(newUser1 === null || newUser1 === void 0 ? void 0 : newUser1.accBal);
    // userBal.innerHTML = newUser1.accBal.toString();
    userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
    deposit_form.style.display = "none";
}
function withdraw_money() {
    let amount = withdraw_amount.value;
    // let amount = (prompt("How much?"))
    let amount_num = parseInt(amount);
    console.log(newUser1 === null || newUser1 === void 0 ? void 0 : newUser1.accBal);
    userBal.innerHTML = newUser1.accBal.toString();
    userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
    withdraw_form.style.display = "none";
}
function transfer_money() {
    let amount = transfer_amount.value;
    // let amount = (prompt("How much?"))
    // let amount = (prompt("How much?"));
    let toWho = document.querySelector(".to-who");
    let to_whos_account = document.querySelector(".to-whos-number");
    let to_whos_bank = document.querySelector(".to-whos-bank");
    // let toWho = document.querySelector(".to-who") as HTMLInputElement;
    // let acc_num = (prompt("Account Number: "));
    // let toBank = (prompt("Name of Bank: "));
    if (amount != null) {
        newUser1 === null || newUser1 === void 0 ? void 0 : newUser1.transfer(parseInt(amount));
    }
    console.log(newUser1 === null || newUser1 === void 0 ? void 0 : newUser1.accBal);
    // userBal.innerHTML = newUser1.accBal.toString();
    userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
    transfer_form.style.display = "none";
    const transfer_receipt = document.querySelector(".transfer-receipt");
    transfer_receipt.innerHTML = `You have transferred ${amount} to ${toWho.value} ${to_whos_account.value} ${to_whos_bank.value}`;
}
function makeDeposit() {
    deposit_form.style.display = "block";
}
function makeWithdraw() {
    withdraw_form.style.display = "block";
    // let amount = (prompt("How much?"))
    // if (amount != null) {
    //     newUser1.withdraw(parseInt(amount))
    // }
    // console.log(newUser1.accBal);
    // // userBal.innerHTML = newUser1.accBal.toString();
    // userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
}
function makeTransfer() {
    transfer_form.style.display = "block";
    // if (amount === null) {
    //     alert("Please input")
    //     // newUser1.transfer(parseInt(amount))
    // }
    // console.log(newUser1.accBal);
    // alert(`You have transferred ${amount} to ${toWho} ${toBank} ${acc_num}`)
    // // userBal.innerHTML = newUser1.accBal.toString();
    // userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
}
const show_bal = document.querySelector(".show-account-bal");
const acc_bal2 = document.querySelector(".account_bal2");
function hide_acc_bal() {
    // acc_bal2.style.display = "block"
    // const hide_bal = document.querySelector(".hide_acc_bal") as HTMLButtonElement;
    if (userBal.innerText === "****") {
        userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
        show_bal.innerHTML = "Hide Acc. Bal.";
    }
    else {
        userBal.innerHTML = "****";
        show_bal.innerHTML = "Show Acc. Bal.";
    }
}
class BankAppSystem {
    constructor(name, num) {
        this.accountBalance = 0.00;
        this.accountName = name;
        this.accountNumber = num;
    }
    ;
    deposit(depos) {
        this.accountBalance += depos;
    }
    withdraw(wdraw) {
        if (this.accountBalance < wdraw) {
            alert("Insufficient Funds");
        }
        else {
            this.accountBalance -= wdraw;
        }
    }
    transfer(trans) {
        if (this.accountBalance < trans) {
            alert("Insufficient Funds");
        }
        else {
            this.accountBalance -= trans;
        }
        // this.accountBalance -= trans;
        // alert(`You have transferred ${trans}`)
    }
    get accName() {
        return this.accountName;
    }
    get accNumber() {
        return this.accountNumber;
    }
    get accBal() {
        return this.accountBalance;
    }
    set account_Name(v) {
        this.accountName = v;
    }
}
class UserAccount extends BankAppSystem {
    constructor(name, num) {
        super(name, num);
    }
}
const newUser = new BankAppSystem("G1", 8050340350);
// console.log(newUser.accName);
// newUser.deposit(2000)
// console.log(newUser.accBal);
// newUser.deposit(2000)
// console.log(newUser.accBal);
// newUser.transfer(10000)
// console.log(newUser.accBal);
// const newUserName  = firstName.value;
// console.log(newUserName);
// // Create a Bank System using OOP
// // This bank system has Account for Users
// // Simulate these operations using class methods and properties
// // 1. Depositing into the bank
// // 2. Withdrawing from the account
// // 3. Transferring to another bank [Assignment]
// // The Account class for the user should contain properties such as 
// // 1. Bank name
// // 2. The owner
// // 3. Balance
// // 4. Account Number
// // Implement methods such as 
// // 1. Deposit
// // 2. Withdraw
// // 3. Transfer[Assignment]
// // make the properties of the account class private and assign getters to each of them 
