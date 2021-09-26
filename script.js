const form = document.forms[0];
const initialPrice=document.querySelector('#initial-price');
const quantityStocks=document.querySelector('#quantity-stocks');
const currentPrice=document.querySelector('#current-price');
// const submitBtn=document.querySelector('#submit');
const outputEl=document.querySelector('#output-box');

form.addEventListener("submit", submitHandler);

function submitHandler(event){
    event.preventDefault();
    console.log(event.preventDefault());

    const ip=Number(initialPrice.value);
    const qty=Number(quantityStocks.value);
    const curr=Number(currentPrice.value);

    calculateLossAndProfit(ip,qty,curr);

}

function calculateLossAndProfit(initial,quantity,current){
    if(initial>current){
        const loss= ((initial - current) * quantity).toFixed(2);;
        const lossPercentage = (((initial - current)* 100)/initial).toFixed(2);
        showOutput(`You have incurred ${lossPercentage}% loss worth Rs ${loss} 😞`);

        if(lossPercentage < 50){
            document.body.style.backgroundColor ="aqua";
        }else{
            document.body.style.backgroundColor ="lightgreen";

        }

    }else if(current>initial){
        const profit=((current-initial)*quantity).toFixed(2);
        const profitPercentage=(((current-initial)*100)/initial).toFixed(2);
        showOutput(`You have gained ${profitPercentage}% profit worth Rs ${profit} 🎉`);

        if(profitPercentage > 50){
            document.body.style.backgroundColor ="yellow";
        }else{
            document.body.style.backgroundColor ="pink";

        }

    }else{
        showOutput(`No pain no gain and no gain no pain!!😎`);
    }
}

function showOutput(message){
    outputEl.innerHTML=message;
}