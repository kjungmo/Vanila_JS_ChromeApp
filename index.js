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