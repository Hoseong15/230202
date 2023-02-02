let txt = document.querySelector('h1').innerHTML = "Hello";
txt = ("안녕하세요")
console.log(txt)



// null //
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null값을 할당하는 것은 변수가 이전에 참조하던 
// 값을 더이상 참조하지 않겠다는 의미
let name = 'hoseong';
console.log(name)
name = null;
console.log(name);



// undefined //
// 자바스크립트에서 var , let 키워드로 선언한 변수는  값이 들어오기 전까지 undefined 초기화 된다.
// 변수 선언에 의해 확보된 메모리 공간에 값이 할당되기 전까지 undefined 상태
let a;
console.log(a);


// number //
// NaN (Not a Number)
// Javascript는 대소문자를 구분


// string 문자, 문자열 // 
// 1. 큰따옴표 ""
// 2. 작은따옴표 ''
// 3. 역따옴표(backtick) ``
let text1 = "hello1";
let text2 = 'hello2';
let text3 = `hello3`;

let num = 4;
let text4 = `hello${num}`


console.log(text1, text2, text3)
console.log(text4)