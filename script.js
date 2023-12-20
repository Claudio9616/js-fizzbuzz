// 1
let result = ''
// 2
for (let i = 1; i <= 100; i++){
    console.log(i);
    // 3
    if (i % 15 === 0) {
        result = 'FizzBuzz';
        console.log(result)
    } else if (i % 3 === 0) {
        result = 'Fizz';
        console.log(result)
     } else if (i % 5 === 0) {
        result = 'Buzz';
        console.log(result)
     }
}


