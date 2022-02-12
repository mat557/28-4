function updateProductNumber(product , price , isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber  * price;
    calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById('phone-number').value;
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1200;
    console.log(parseInt(phoneTotal));
    const caseTotal = getInputValue('case') * 60;
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('Sub-total').innerText = subTotal;
}





//handle phone increase  decrease event
document.getElementById('phone-plus').addEventListener('click',plusPhoneFunction);

function plusPhoneFunction(){
    updateProductNumber('phone',1200, true);
}

document.getElementById('phone-minus').addEventListener('click',minusPhoneFunction);

function minusPhoneFunction(){
    updateProductNumber('phone',1200, false);
}


//handle cse increase decrease events

document.getElementById('case-plus').addEventListener('click',plusFunction);

function plusFunction(){
    updateProductNumber('case',60,true);
}

document.getElementById('case-minus').addEventListener('click',minusFunction);

function minusFunction(){
    updateProductNumber('case',60, false);
}


