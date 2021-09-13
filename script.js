const initialPrice=document.querySelector('#initial-price');
const quantityStocks=document.querySelector('#quantity-stocks');
const currentPrice=document.querySelector('#current-price');
const submitBtn=document.querySelector('#submit-btn');
const outputEl=document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    const ip=Number(initialPrice.value);
    const qty=Number(quantityStocks.value);
    const curr=Number(currentPrice.value);

    calculateLossAndProfit(ip,qty,curr);

}

function calculateLossAndProfit(initial,quantity,current){
    if(initial>current){
        const loss= (initial - current) * quantity;
        const lossPercentage = (loss / initial) * 100;
        showOutput(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%😞`);

        if(lossPercentage < 50){
            document.body.style.backgroundColor ="aqua";
        }

    }else if(current>initial){
        const profit=(current-initial)*quantity;
        const profitPercentage=(profit/initial)*100;
        showOutput(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%🎉`);

        if(profitPercentage > 50){
            document.body.style.backgroundColor ="yellow";
        }

    }else{
        showOutput(`No pain no gain and no gain no pain!!😎`);
    }
}

function showOutput(message){
    outputEl.innerHTML=message;
}