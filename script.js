function sumDivisors(num){
    var sum = 0;
    for (var i = 1; i <= num; i++){
        if (!(num % i)) {
            sum += i;
        }
    }
    console.log(sum);
}
sumDivisors(5)