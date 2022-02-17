
// income part function
function incomeFunction() {
    const incomeValue = document.getElementById("income-value").value;
    const income = parseFloat(incomeValue);
    if (isNaN(income)) {
        alert("enter a valid number");
    }
    else if (income < 0) {
        alert("enter a valid number");
    }

    return income;


}
// Expenses

function expensesFunction(product) {
    const productValue = document.getElementById(product + "-input");
    const productNumber = parseFloat(productValue.value);
    if (isNaN(productNumber)) {
        alert(" a valid number");
    }
    else if (productNumber < 0) {
        alert(" a valid number");
    }
    productNumber.value = " ";
    return productNumber;


}
// saving Money
function saving(){
    const saveMoney = document.getElementById("save-maney").value;
    const save = parseFloat(saveMoney);
    const savingMoney = (save * incomeFunction()) / 100 ;  
    return savingMoney;
}


function total() {
    const incomes = incomeFunction();
    const cost = expensesFunction("food") + expensesFunction("clothes") + expensesFunction("rent");

    const total = incomes - cost;
    return total;
}
document.getElementById("calculate").addEventListener("click", function () {

    // Expenses
    const costExpenses = document.getElementById("cost-value");
    costExpenses.innerText = expensesFunction("food") + expensesFunction("clothes") + expensesFunction("rent");
    // balance 
    const expans = document.getElementById("balance-cost-value");
    expans.innerText = total();



});



function remainManey(){
    const remain = document.getElementById("Remaining-value");
    const showRemain = total() - saving();
    remain.innerText = showRemain;
    return
}
document.getElementById("save-btn").addEventListener("click", function () {
    const afterSaving = document.getElementById("saving-value");
    afterSaving.innerText = saving();

    remainManey();
})