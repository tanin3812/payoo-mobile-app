const validPin = 1234

// add money feature
document.getElementById('addMoney').addEventListener('click', function(e){
    e.preventDefault()

    const bank = document.getElementById('bank').value
    const accountNum = document.getElementById('accountNum').value
    const amount = parseInt(document.getElementById('addAmount').value)
    const pin = parseInt(document.getElementById('pinNumber').value)

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)
    console.log(availableBalance)

    if(accountNum.length < 11){
        alert('Please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('Please provide correct pin number')
        return;
    }

    const totalNewBalance = amount+availableBalance
    document.getElementById('availableBalance').innerText = totalNewBalance
})

// cashout feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    const amount = parseInt(document.getElementById('withdrawAmount').value)

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)

    const totalNewBalance = availableBalance - amount
    document.getElementById('availableBalance').innerText = totalNewBalance
})

// toggling featurs
document.getElementById('add-button').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block'
})
document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
})