const validPin = 1234

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