// const btn = document.getElementById('button')
let result = document.getElementById('risultato')
for (let i = 1; i <= 100; i++){
    i = Math.floor(Math.random() * 100) + 1
    console.log(i)
    if (i % 15 === 0) {
        result = 'FizzBuzz'
        console.log(result, '15')
    } else if (i % 3 === 0) {
        result = 'Fizz'
        console.log(result, '3')
    } else if (i % 5 === 0) {
        result = 'Buzz'
        console.log(result, '5')
    }
}

    
   
   

