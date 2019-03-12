TASK1 FAIL
TASK2 PASS
TASK3 FAIL
TASK4 PASS
TASK5 FAIL
TASK6 FAIL
TASK7 PASS
TASK8 PASS

// UNIT 3
// FAIL
// 1. Дан целочисленный массив размера N. 
// Определить максимальное количество его одинаковых элементов.
// Задача не решена. Так как не подсчитывается кол-во одинаковых элементов!!!
// при массиве  arr  = [0,1,1,2,1,2,2,3,1,4,5,6,0,0]; в массив dupl добавляются и 2 хотя их на 1 меньше
// данное решение не годится.

var arr  = [0,1,1,2,1,3,1,4,5,6,0,0];                        // 
var dupl = [];
for (let i = 0; i<= arr.length; i++) {
    if (arr.filter(el => el === arr[i]).length > 1) {
        dupl.push(arr[i])                      // запихни что получил в пустой массив
    }
}
console.log(dupl)


//  PASS
// 2. Проверить истинность высказывания:
//  "Данное четырехзначное число читается одинаково слева направо и справа налево".


// слишком много манипуляций, ввода ненужных переменных,  проще через индексную арифметикy.
// К примеру:
var a = 1221;
var key = 0;
var res = (a[key] == a[key + 3] && a[key] == a[key + 2])? true: false;
console.log(res);

var b = null;
var c = null;
var d = null;
var e = null;
var f = null;

b = Array.from(String(a));
// console.log(b);
c = b.slice(0,2);
d = b.slice(2,4);
// console.log(c);
// console.log(d);
e = +c.join('');
// console.log(e);
f = +d.reverse().join('');
// console.log(f);

if ( e === f) {
    console.log ("Данное четырехзначное число читается одинаково слева направо и справа налево");
}
else {
    console.log ("Увы и ах");
}

// FAIL
// Нужно использовать оператор удаления из массива!
// Организавать проход по массиву с удержанием предыдущего значения и подсчетом совпадения с текущим.

// 3. Дан целочисленный массив размера N. 
// Удалить из массива все элементы, встречающиеся 
// [менее двух раз]1|
// [более двух раз]2|
// [ровно два раза]3|
// [ровно три раза]4.;

// // Здесь нужно написать switch 
// var toggle = 2;
// switch(toggle) {
//   case 1: 
//  логика [менее двух раз]1|
//     break

//   case 2:  
//  логика [более двух раз]2|
//     break
 
//   case 3:  
//  [ровно два раза]3|
//     break
    
//   default:
//     ...
//     break
// }


var a = [1,2,2,3,3,3,4,4,4,4];

var arr = [0,1,1,2,1,3,1,4,5,6,0,0];                       
var dupl = [];
for (let i = 0; i<= arr.length; i++) {
    if (arr.filter(el => el === arr[i]).length < 2) { // [менее двух раз]1|
    // if (arr.filter(el => el === arr[i]).length > 2) { // [более двух раз]2|
    // if (arr.filter(el => el === arr[i]).length == 2) { // [ровно два раза]3|
    // if (arr.filter(el => el === arr[i]).length == 3) { // [ровно три раза]4.;
        dupl.push(arr[i])
    }
}
console.log(dupl) 


// PASS
// 4. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. 
// Определить расстояние между ними через T часов, 
// если автомобили первоначально движутся навстречу друг другу.
// 
//Лучше вводить заданные обозначения

var V1 = 1 // авто 1 
var V2 = 1 // авто 2
var S = 5 // дистанция
var T = 2 // время 
var btw = null // расстояние между авто
btw = S - (V1+V2)*T 
console.log(btw)

if ( btw < S ){
    console.log( "Расстояние между машинами " + btw + " км");
} else {
    console.log("Машины разменулись " + Math.abs(btw) + ' км' ) 
    // тут Math.abs(btw) не срабатывает, есть идеи почему???
} 


// FAIL (стандартные методы в таких задачах нельзя применять и ежик может так решить)
// Нужно это сделать через любой алгоритм сортировки. См.
// https://tproger.ru/translations/sorting-for-beginners/

// 5. Упорядочить массив размера N по возрастанию1 | убыванию2.

// Asending
arr = [4, 2, 5, 1, 3, 6, 7, 9, 3]
arr.sort(function(a, b) {
  return a - b;
});
console.log(a)
// Dissending
arr = [4, 2, 5, 1, 3, 6, 7, 9, 3]
arr.sort(function(a, b) {
  return b - a;
})
console.log(a)


// FAIL (стандартные методы в таких задачах нельзя применять)
// Нужно самому придумать алгоритм по которому ты найдешь максимальное(минимальное) число.
// 6. Найти минимальный и максимальный из данных десяти элементов массива.
var a = [10,0,1,4,2,1009,3,0,4,5,54,6,7,1009,8,9];

console.log(Math.max(...a));
console.log(Math.min(...a));


// 7. Дан номер некоторого года (положительное целое число). 
// Вывести соответствующий ему номер столетия, 
// учитывая, что, к примеру, началом 20 столетия был 1901 год.

// Учись на таких маленьких задачах вводить читабельные переменные !
var a = 1293;
a = a.toString();

if (a.length <= 2){
    console.log ('Первый век');
} else if (a.length >= 3){
    console.log (+a.slice(0, -2)+1 + " век");
} else {
    console.log ( "Это не год или что-то еще")
}

// PASS
// 8. Расчитать сумму элементов от 1 до 100 в цикле. 

const summ = null  // при таком подходе summ не будет меняться так как переменная константа.
var summ = 0;     // при арефметических действиях лучше инициализировать 0

for (let i = 1; i <= 100; i++) {
    console.log(summ += i);
}
