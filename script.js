const btn = document.getElementById('button')
let result = document.getElementById('risultato')
btn.addEventListener('click', function(){
    const userNumber = Math.floor(Math.random() * 100) + 1
    console.log(userNumber)
    if (userNumber % 15 === 0) {
        result = 'FizzBuzz'
        console.log(result, '15')
    } else if (userNumber % 3 === 0) {
        result = 'Fizz'
        console.log(result, '3')
    } else if (userNumber % 5 === 0) {
        result = 'Buzz'
        console.log(result, '5')
    }
})
