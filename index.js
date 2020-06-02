console.log('Im Working. Im JS. Im Beautiful. Im worth it');  //python이나 java의 print와 같은 기능을 해주는 것이 console.log이다.

let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);

// const변수를 사용하면 변수에 값을 변경할 시 에러가 생긴다
// var 를 사용해도 된다. let 처럼 var도 변수 값을 변경할 수 있다.

//변수를 처음 사용할 때 const를 사용해라 . 진짜 필요할 때만 let을 사용하자


/*String  텍스트라고 보면 된다.
const what = "Jungmo";
*/

/* boolean 에서의 true 와 false는 텍스트가 아니다
boolean
const wat = true;
*/

/*
Number
const what = 2312;
*/

/*
Float 는 소숫점이 있는 숫자이다.
const what = 33.2;
*/

//Array는 []안에 값을 넣는다. DB에서 가져온 데이터라면 Array쓰는게 좋다. 그 경우 많은 Array를 만들게 된다.
const something = "Something";

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, "stuff", something];
console.log(dayOfWeek);

//이것과는 다르게 {}로 묶으면 object가 된다. object 안에 Array 넣을 수 있다. array안에 object넣을 수도 있다.
const jungInfo = {name:"Jungmo", age:33, gender:"Male", isHandsome:true, favMovies: ["aasdf", "adsfasf", "asdfasfd"], favFood: [{name:"kimchi", fatty:false}, {name:"mandoo", fatty:true}]}

console.log(jungInfo.gender);  //하나의 값으로의 접근은 . 하나로 한다

jungInfo.gender = "namek";

console.log(jungInfo.gender);

console.log(jungInfo);


//Quiz DAY2
console.log('hello', "hello");

const myplan = ['eat', 'play', 'love', [2,3,4], {name:'kang'}];
console.log(myplan);
const whoami = {name: "kang", age:"29", favHobby:["car", "jam", {kind:"cool"}]}
console.log(whoami);
/*const obinob = {name:"who", {mana:"kind", "matters"}}
console.log(obinob);
*/  // object(객체)안에는 객체를 넣지 못한다. 

//console은 object이다. log는 function (function is a piece of code that you can use as many times as you want)
console.log(console)

//function
function sayHello(){
  console.log('Hello!');
}

sayHello();// console.log사용하지 않고도 가능하다. sayHello어떤 기능을 가졌는지 이미 알기 때문이다.
console.log("Hi!") //괄호 안에는 argument(인자)가 넣어져있어야 값이 출력된다. log함수가 그것을 사용할 수 있다. aurgument는 parameter같은 것이다. 그래서 아래왜같이 함수 괄호안에 넣어줄 수 있다.

function sayHelllo(name, age){   //이게 함수에게 외부에 있는 데이터를 주는 방법이다.
  console.log("Hello!", name, " you have ", age, " years of age.")  
} // 이처럼 console.log function은 무한으로 arguments를 가질 수 있다.
sayHelllo("JM", 15);

//신기한 방식 ''또는 ""이 아닌 ``을 사용하는 방식(백틱이라고 부른다)
function sayHelllo(name, age){
  console.log(`Hello ${name} you are ${age} years old`)
}
sayHelllo("JM", 22);

//return 쓰면 어떨까?
function sayHelllo(name, age){
  console.log(`Hello ${name} you are ${age} years old`)
}

const greetNicolas = sayHelllo("JM", 26)
console.log(greetNicolas)  //-> 이 경우 undefined라고 뜬다. 왜냐하면 const에서의 greetnicolas는 sayHelllo의 실행된 결과 값이다. 위의 function 에서 console.log값에 JM 과 22를 넣어서 출력하는데 그 밑의 greetnicolas가 인자로 들어간 console.log에는 반환할 값이 없게 된다. 즉 return하는 값이 없기 때문에 "undefined"라고 뜬다. undefined 라고 나오지 않게 하려면
function sayHelllo(name, age){
  return `Hello ${name} you are ${age} years old` ;
}

const greetNicola = sayHelllo("JM", 22)
console.log(greetNicola)  // undefined 안 뜬다.


// object 다뤄보기
const calculator = {
  plus: function(a, b){
    return a + b;
  }
  minus: function(a, b){
    return a - b;
  }
  divide: function(a, b){
    return a / b;
  }
  multiply: function(a, b){
    return a * b;
  }
  powerof: function(a, b){
    return a ** b;
  }
}
//console.log(greetmama)
const plus = calculator.plus(5, 5)
const minus = calculator.minus(5, 2)
const divide = calculator.divide(5, 5)
const multiply = calculator.multiply(5, 5)
const powerof = calculator.powerof(5, 5)
console.log(plus);
console.log(minus);
console.log(divide);
console.log(multiply);
console.log(powerof);
