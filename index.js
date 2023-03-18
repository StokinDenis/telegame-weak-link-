let money=0
let counter=0
let bankMoney=0
let totalBank = 0;
let time;
const textA = document.querySelector('.button-start')
const startButton = document.getElementById("start");
const SumMainBank = document.querySelector('.sumMainBank')
startButton.addEventListener('click', () => {
    while(time<=0 || !time || isNaN(time)){
        time=prompt('введите время на раунд(секунды)')
    }
    button.addEventListener("click", sumMoney)
    buttonFalse.addEventListener("click", zeroMoney)
    buttonBank.addEventListener("click", bank) 
    timerr.textContent=time+'  секунд'
    const intervalId=setInterval (timer, 1000)


    function timer(){
    time=time-1
    timerr.textContent=time+'  секунд'
    if(time===0){
        console.log(time)
        console.log(totalBank)
        clearInterval(intervalId)
        bankMoney = 0;
        sumBank.textContent= bankMoney
        money=0
        counter=0
        zero()
        SumMainBank.textContent=totalBank
        setTimeout(() => {
            alert('Раунд закончен')
        }, 100)
        button.removeEventListener("click", sumMoney)
        buttonFalse.removeEventListener("click", zeroMoney)
        buttonBank.removeEventListener("click", bank) 
    }
    if(bankMoney >= 500){
       
        console.log(time)
        console.log(totalBank)
        clearInterval(intervalId)
        bankMoney = 0;
        sumBank.textContent = bankMoney
        money=0
        counter=0
        zero()
        SumMainBank.textContent=totalBank
        setTimeout(() => {
            alert('Раунд закончен')
        }, 100)
        time=0
        button.removeEventListener("click", sumMoney)
        buttonFalse.removeEventListener("click", zeroMoney)
        buttonBank.removeEventListener("click", bank) 
    }

}
})
textA.textContent="Старт"
console.log(textA.textContent)
let moneyCounter = document.querySelectorAll('.money')
let sumBank = document.querySelector('.sumBank')
let timerr = document.querySelector('.timer')
const button = document.querySelector('.button-true')
const buttonFalse = document.querySelector('.button-false')
const buttonBank = document.querySelector('.button-bank')

function sumMoney(){
 switch(counter){
    case 0: {
      money=10
      break
    }
    case 1:{
        money=20
        break
    }
    case 2:{
        money=50
        break
    }
    case 3:{
        money=100
        break
    }
    case 4:{
        money=200
        break
    }
    case 5:{
        money=300
        break
    }
    case 6:{
        money=400
        break
    }
    case 7:{
        money=500
        break
    }
    default:{
        counter=0
        totalBank += money;
        zero()
    }
 }
 zero()
 moneyCounter[moneyCounter.length-1-counter]?.classList.add('active')
 counter++
     
    // button.removeEventListener("click", showConsole)
}
function zero(){
    moneyCounter.forEach(element => {
        element.classList.remove('active')
     });
}
function zeroMoney(){
    money=0
    counter=0
    zero()
}
let temp=0
function bank(sum){
bankMoney=bankMoney+money

sumBank.textContent=bankMoney 
console.log("сумма выигрыша =", bankMoney)

temp += money;
if(temp>500){
    temp=500
}
totalBank=temp
money=0
counter=0
zero()
}
