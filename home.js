document.getElementById('addMoney').addEventListener('click', function(e){
    e.preventDefault()
    console.log('btn clicked')

    const bank = document.getElementById('bank').value
    const accountNum = document.getElementById('accountNum').value
    const amount = parseInt(document.getElementById('addAmount').value)
    const pin = document.getElementById('pinNumber').value

    const availableBalance = parseInt(document.getElementById('availableBalance').innerText)
    console.log(availableBalance)

    const totalNewBalance = amount+availableBalance
    document.getElementById('availableBalance').innerText = totalNewBalance
})