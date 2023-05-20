const createAcc = document.querySelector('.create-acc') as HTMLButtonElement;
const form = document.querySelector('.createAcc') as HTMLFormElement;

createAcc?.addEventListener('click', (e: Event) => {
    // createAcc.style.visibility = "hidden";
    form.style.visibility = "visible"
    
});

const createNewAcc = document.querySelector('.createNewAccount') as HTMLButtonElement;
createNewAcc?.addEventListener('click', createAccount)

const deposit = document.querySelector(".deposit") as HTMLButtonElement;
const withdraw = document.querySelector(".withdraw") as HTMLButtonElement;
const transfer = document.querySelector(".transfer") as HTMLButtonElement;

let userName: string;
let accNo: number;
let newUser1: BankAppSystem;

const userBal = document.querySelector(".account_bal") as HTMLHeadingElement;
const account_name = document.querySelector('.acct-name') as HTMLHeadingElement;

const userInfo = document.querySelector(".user-info") as HTMLHeadingElement;
const hero_page = document.querySelector(".hero-page") as HTMLDivElement;
const acct_num = document.querySelector(".account-num") as HTMLHeadingElement;
const users_page = document.querySelector(".users-page") as HTMLDivElement;

const acc_created = document.querySelector(".acc-created") as HTMLButtonElement;

function createAccount(e: Event) {
    e.preventDefault();

    // createAcc.style.visibility = "hidden";
    const firstName = document.querySelector('.first_name') as HTMLInputElement;
    const lastName = document.querySelector('.last_name') as HTMLInputElement;
    const phoneNumber = document.querySelector('.phone_no') as HTMLInputElement;
    const number_error_msg = document.querySelector(".number-error-msg") as HTMLSpanElement;
    
   
    if (firstName.value && lastName.value && phoneNumber.value != '') {
        if (phoneNumber.value.length > 10) {
            number_error_msg.style.display = "block"
            number_error_msg.innerHTML = '10 digits only - Please remove the first zero'
        }else{
            form.style.visibility = "collapse"
            hero_page.style.display = 'none';
            users_page.style.display = 'block';
            acc_created.style.display = "block";

            setTimeout(() => {
                acc_created.style.display = "none";
            }, 3000);
            
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
    console.log( newUser1.account_Name = userName);
    
    
}



// userInfo.style.backgroundColor = '#ff0980';

// const checking_stn = document.querySelector('.checking-something') as HTMLDivElement;
// checking_stn.innerHTML = "checking something"
    
deposit?.addEventListener("click", makeDeposit)
withdraw?.addEventListener("click", makeWithdraw)
transfer?.addEventListener("click", makeTransfer)

const deposit_form = document.querySelector(".deposit-form") as HTMLFormElement;
const withdraw_form = document.querySelector(".withdraw-form") as HTMLFormElement;
const transfer_form = document.querySelector(".transfer-form") as HTMLFormElement;

const deposit_amount = document.querySelector(".deposit-amount") as HTMLInputElement;
const withdraw_amount = document.querySelector(".withdraw-amount") as HTMLInputElement;
const transfer_amount = document.querySelector(".transfer-amount") as HTMLInputElement;

const click_deposit = document.querySelector(".click-to-deposit") as HTMLButtonElement;
click_deposit.addEventListener("click", deposit_money);

const click_withdraw = document.querySelector(".click-to-withdraw") as HTMLButtonElement;
click_withdraw.addEventListener("click", withdraw_money);

const click_transfer = document.querySelector(".click-to-transfer") as HTMLButtonElement;
click_transfer.addEventListener("click", transfer_money);

const click_close = document.querySelector(".transfer-receipt") as HTMLButtonElement;
click_close.addEventListener("click", transfer_money);



function deposit_money(){
    let amount = deposit_amount.value;
    // let amount = (prompt("How much?"))
   if (amount == '') {
        alert('Please enter an amount')
   } else {
         newUser1?.deposit(parseInt(amount));
        userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
        deposit_form.style.display = "none";
 
   }
    console.log(newUser1?.accBal);
    // userBal.innerHTML = newUser1.accBal.toString();
   

    
}

function withdraw_money(){
    let amount = withdraw_amount.value;
    // let amount = (prompt("How much?"))
    let amount_num = parseInt(amount);
    if (amount == '') {
        alert('Please enter an amount')
   } else {
       if (amount != null) {
           newUser1?.withdraw(amount_num)
       }
    
   }
    console.log(newUser1?.accBal);
    // userBal.innerHTML = newUser1.accBal.toString();
    userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";

    withdraw_form.style.display = "none";
}

function transfer_money(){
    let amount = transfer_amount.value;
    // let amount = (prompt("How much?"))
    // let amount = (prompt("How much?"));
    let toWho = document.querySelector(".to-who") as HTMLInputElement;
    let to_whos_account = document.querySelector(".to-whos-number") as HTMLInputElement;
    let to_whos_bank = document.querySelector(".to-whos-bank") as HTMLInputElement;
    // let toWho = document.querySelector(".to-who") as HTMLInputElement;
    // let acc_num = (prompt("Account Number: "));
    // let toBank = (prompt("Name of Bank: "));
    
    if (amount != '' ) {
        if (to_whos_account.value != '') {
            newUser1?.transfer(parseInt(amount)) ;
            
            transfer_form.style.display = "none";
            const transfer_receipt = document.querySelector(".transfer-receipt") as HTMLDivElement;
            transfer_receipt.innerHTML = `You have transferred ${amount} to ${toWho.value} ${to_whos_account.value} ${to_whos_bank.value}`
        }
        else{
            alert("Enter Receipients details")
        }
    }
    else{
        alert("Enter an amount!")
    }
    console.log(newUser1?.accBal);
    // userBal.innerHTML = newUser1.accBal.toString();
    userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";

}

function makeDeposit() {
    deposit_form.style.display = "block";
    
}

function makeWithdraw() {
    withdraw_form.style.display = "block"
   
}

function makeTransfer() {
    transfer_form.style.display = "block"
   

}

const show_bal = document.querySelector(".show-account-bal") as HTMLButtonElement;
const acc_bal2 = document.querySelector(".account_bal2") as HTMLHeadingElement;

function hide_acc_bal() {
    

    // acc_bal2.style.display = "block"

    // const hide_bal = document.querySelector(".hide_acc_bal") as HTMLButtonElement;

    if (userBal.innerText === "****"){
        userBal.innerHTML = "₦ " + newUser1.accBal.toString() + " . 00";
        show_bal.innerHTML = "Hide Acc. Bal."
    }else{
        userBal.innerHTML = "****";
        show_bal.innerHTML = "Show Acc. Bal."   
    }
}







class BankAppSystem {

    private accountName: string;
    private accountNumber: number;
    private accountBalance: number = 0.00;
    constructor(name: string, num: number) {
        this.accountName = name;
        this.accountNumber = num;
    };

    deposit(depos: number){
        if (depos < 0) {
            alert("Invalid number!")
        }
        else{
            this.accountBalance += depos;
        }
        // this.accountBalance += depos;
    }
    withdraw(wdraw: number){
        if (wdraw > 0) {  
            if (this.accountBalance > wdraw) {
                this.accountBalance -= wdraw;
            }
            else{
                alert("Insufficient Funds")
            }
        }
        else{
            alert("Invalid number!");
        }
    }
    transfer(trans: number){
        if (trans > 0) {
            if (this.accountBalance > trans) {
                this.accountBalance -= trans;
            }
            else{
                alert("Insufficient Funds")
            }
        }
        else{
            alert("Invalid number!")
        }
        // this.accountBalance -= trans;
        // alert(`You have transferred ${trans}`)
    }

 
    get accName() : string {
        return this.accountName;
    }
    get accNumber() : number {
        return this.accountNumber;
    }
    get accBal() : number {
        return this.accountBalance ;
    }
    
    set account_Name(v : string) {
        this.accountName = v;
    }
    
}

class UserAccount extends BankAppSystem {
    constructor(name: string, num: number) {
        super(name, num)
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