// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var sumOfNum = 0;
var i = 0;
while (i < 20) {
    if (i % 2 === 0 || i % 3 === 0) {
        sumOfNum += i
    }
    i++
}
console.log(sumOfNum);