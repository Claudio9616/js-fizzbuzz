// 1
let result = ''
// 2
for (let i = 1; i <= 100; i++){
    result = i
    // 3
    if (i % 15 === 0) {
        result = 'FizzBuzz';
    } else if (i % 3 === 0) {
        result = 'Fizz';
     } else if (i % 5 === 0) {
        result = 'Buzz';
     }
     console.log(result)
}


