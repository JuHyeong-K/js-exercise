// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
// 변수 하나에 짝수를 계속 더해주는데, 문자열로 바꿔서 더한다.
var even_str = ''
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        even_str = even_str + (i + '')
    }
}
console.log(even_str);