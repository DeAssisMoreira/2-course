/* Домашка 6. Игра 2 */

/* Вариант 1 */

/* function sum() {
    let answer = prompt('сложи 24 и 47');
    if (answer == 71) {
        alert('Верно!');
    }
    else {
        alert('Неверно');
    }
    }
sum();

function sub() {
    let answer = prompt('вычти 31 от 71');
    alert(answer == 40 ? "Верно!" : "Неверно");
}
sub();

function mult() {
    let answer = prompt('Умножь 40 на 3');
    alert(answer == 120 ? "Верно!" : "Неверно");
}
mult();

function div() {
    let answer = prompt('Раздели 120 на 12');
    alert(answer == 10 ? "Верно!" : "Неверно");
}
div(); */


/* Вариант 2 */

 /* function randNums() {
    const operators = ["+", "-", "*", "/"];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    let a = (Math.floor(Math.random()) * 10 + 1);
    let b = (Math.floor(Math.random()) * 10 + 1);

    if (operator === '+') {
        task = `Сложите ${a} и ${b}`;
    } 
    else if (operator === '-') {
        task = `Вычтите ${a} от ${b}`;
    }
    else if (operator === '*') {
        task = `Умножьте ${a} на ${b}`;
    }
    else {
        task = `Разделите ${a} на ${b}`;
    }
    return [num1, num2];
}
    randNums();
    
    function answer(operator, a, b) {
    userAnswer = +prompt(Number(task));
    correctAnswer = calculateUserAnswer(operator, a, b);
    if (userAnswer === calculateUserAnswer) {
        alert('Верно');
    }
    else {
        alert('Неверно');
    }
    }
answer();

function correctAnswer(operator, a, b) {
    switch(operator) {
        case '+':
        return a + b;
        case '-':
        return a - b;
        case '*':
        return a * b;
        case '/':
        return a / b;
    }
}
correctAnswer(); */
 
/* Вариант 3 */

function randNums() {
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result;  

    switch(operator) {
        case '+':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            task = prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

            case '-':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            task = prompt(`Вычтите ${b} от ${a}`);
            result = a - b;
            break;

            case '*':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            task = prompt(`Умножьте ${a} на ${b}`);
            result = a * b;
            break;

            case '/':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            task = prompt(`Разделите ${b} на ${a}`);
            result = a / b;
            break;
    }
}
randNums();

    function checkAnswer(correctAnswer) {
        let userAnswer = task(operator, a, b);
        if (userAnswer === correctAnswer) {
            alert('Верно');
        }
        else {
            alert('Неверно');
        }
    }
checkAnswer();







/* Задание 1 */
/*
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]); 
if (arr[i] === 10) {
    break;
}
} */

/* Задание 2 */

/* const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
        break;
}
} */

/* Задание 3 */

/* const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' ')); */

/* Задание 4 */

/* const arr = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i++) {
        arr2.push(1);
    }
    arr.push(arr2);
}
console.log(arr); */

/* Задание 5 */

/* const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr); */

/* Задание 6 */

/* const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
console.log(arr);
const onlyNums = arr.filter((letter) => letter !== 'a');
console.log(onlyNums); */

/* Задание 7 */

 /* const guess = [9, 8, 7, 6, 5];
 let answer = +prompt('Угадай число');
if (guess.includes(answer)) {
    alert('Угадал');
}
else {
    alert('Не угадал');
} */

/* Задание 8 */

/* let alph = 'abcdef';
alph = alph.split('');
alph.reverse();
alph = alph.join('');
console.log(alph); */

/* Задание 9 */

/* const arr = [[1, 2, 3], [4, 5, 6]];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
}
console.log(newArr); */

/* Задание 10 */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
    console.log(arr[i] + arr[i + 1]);
    }
} */

/* Задание 11 */

/* const arr = [3, 4, 5];
const arrSquare = arr.map(arr => arr ** 2);
console.log(arrSquare); */

/* Задание 12 */

/* const arr = [one, two, three];
const length = arr.map(arr => arr.length);
console.log(arr(['one', 'two', 'three'])); */

/* function length(arr) {
    return arr.map(item => item.length);
}
console.log(length(['one', 'three'])); */

/* Задание 13 */

/* function nums(arr) {
    return arr.filter(item => item < 0);
}
console.log(nums([4, -6, 7, -8])); */

/* Задание 14 */

/* function random() {
    return Math.floor(Math.random() * 10);
}
    const arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(random());
    }
    const even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } 
    }
console.log(even); */

/* Задание 15 */

/* function middle() {
    return Math.floor(Math.random() * 10);
}
const arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(middle());
}
console.log(arr);
console.log(arr.reduce((a, b) => a + b) / arr.length); */


















/* Домашка 5, Игра Угадай число 

function gameOne() {
    let answer = prompt('Угадай число от 1 до 100');
    if (answer > 47) {
        alert('Ваше число больше');
    }
    else if (answer === 47) {
        alert('Вы угадали');
    } 
    else {
        alert('Ваше число меньше');
    }
}

/* Задание 1 

function less(a, b) {
    if (a < b) {
        return a;
    } 
    else {
        return b;
    }
}
    alert(less(8, 4));
    alert(less(6, 6)); 
    */

/* Задание 2 

function even(number) {
    if (number % 2 === 0) {
        return('Число четное');
    }
    else {
        return('Число нечетное');
    }
}
alert(even(4));
alert(even(5));
*/

/* Задание 3 

function square(number) {
    alert(number ** 2);
}
square(5);

const squareTwo = (num) => num ** 2;
alert(squareTwo(6));
*/

/* Задание 4 

function age() {
    let age = prompt('Сколько тебе лет?');

if (age < 0) {
        alert('Возраст введен неправильно');
    }
else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
} 
else if (age >= 13) {
    alert('Добро пожаловать!');
}
else {
    alert('Вы ввели неправильное значение');
}
}
age();
*/


/* Задание 5 

function nums(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert('Одно или оба значения не являются числом');
    } else {
        alert(a * b);
    }
}
nums(4, 6);
*/

/* Задание 6 

function enterNumber() {
    let answer = prompt('Введите число');
    if (isNaN(answer)) {
        alert('Переданный параметр не является числом');
    } else {
        alert(`${answer} в кубе равняется ${answer ** 3}`)
    }
}
enterNumber();
*/

/* Задание 7 

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

alert(circle1.methodGetArea());
alert(circle2.methodGetArea());
*/


/* Домашка 4, задание 1 

for (let i = 0; i < 2; i++) {
    console.log('Hello');
}

/* Задание 2 

for (let i = 1; i <=5; i++) {
    console.log(i);
}

/* Задание 3 

for (let i = 7; i <=22; i++) {
    console.log(i);
}

/* Задание 4 

const obj = {
    kolya: '200',
    vasya: '300',
    petya: '400'
}

for (const key in obj) {
    console.log(`${key} - ${obj[key]} долларов`);
}

/* Задание 5 

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

/* Задание 6 

let friday = 2;
let days = 31;
for (let f = friday; f < days; f += 7) {
    console.log(`Сегодня пятница, ${f}-е число. Необходимо подготовить отчет.`);
}
*/


/* Домашка 3, Задание 1

let password = 'qwerty';
let pass = prompt('Введите пароль');
alert(pass = password ? "Верно" : "Ошибка"); 



let password = 'pass';
let pass = prompt('Введите пароль');
if (pass === password) {
alert('Верно');
} else {
alert('Ошибка');
}

/* Задание 2 

let c = 4
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

/* Задание 3 

let d = 78;
let e = 178;
if (e >= 100 || d >=100) {
    alert('Верно');
} else {
    alert('Неверно');
}
    
/* Задание 4 

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

/* Задание 5 

let monthNumber = 12;
switch (monthNumber) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('Весна');
        break;
    case 4:
        alert('Весна');
        break;
    case 5:
        alert('Весна');
        break;
    case 6:
        alert('Лето');
        break;
    case 7:
        alert('Лето');
        break;
    case 8:
        alert('Лето');
        break;
    case 9:
        alert('Осень');
        break;
    case 10:
        alert('Осень');
        break;
    case 11:
        alert('Осень');
        break;
    case 12:
        alert('Зима');
        break;
    default:
        alert('Неверно');
        break;
} */




/* Домашка 2
let a = 10;
alert(10);
a = 20;
alert(a);

const b = 2007;
alert(2007);

const c = 'Brendan Eich';
alert('Brendan Eich');

let d = 10;
let e = 2;
let sum = d + e;
let difference = d - e;
let product = d * e;
let quotient = d / e;
let power = e ** 5;
alert(sum);
alert(difference);
alert(product);
alert(quotient);
alert(power);

let f = 9;
let remainder = f % e;
alert(remainder);

let g = 1;
g += 5;
g -= 3;
g *= 7;
g /= 3;
g += 1;
g -= 1;
alert(g);

let age = prompt('Сколько вам лет?');
alert(age);

const user = {
name: 'Vlad',
age: 30,
isAdmin: true
};
alert(user);

let userName = prompt('Как тебя зовут?');
console.log(`Привет, ${name}`);
alert(`Привет, ${name}!`);
<script src="./Script.js"></script> */

