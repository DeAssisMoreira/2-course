
/* Домашка 4, Игра Угадай число 

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


/* Домашка 3, задание 1 

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


/* Домашка 2, Задание 1

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




/* Домашка 1
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

