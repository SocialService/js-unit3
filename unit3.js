// UNIT 3

// 1. Дан целочисленный массив размера N. 
// Определить максимальное количество его одинаковых элементов.


var arr = [0,1,1,2,1,3,1,4,5,6,0,0];                        // 
var dupl = [];
for (let i = 0; i<= arr.length; i++) {
    if (arr.filter(el => el === arr[i]).length > 1) {
        dupl.push(arr[i])                      // запихни что получил в пустой массив
    }
}
console.log(dupl)

// 2. Проверить истинность высказывания:
//  "Данное четырехзначное число читается одинаково слева направо и справа налево".

var a = 1221;
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


// 3. Дан целочисленный массив размера N. 
// Удалить из массива все элементы, встречающиеся 
// [менее двух раз]1|
// [более двух раз]2|
// [ровно два раза]3|
// [ровно три раза]4.;

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

// 4. Скорость первого автомобиля V1 км/ч, второго — V2 км/ч, расстояние между ними S км. 
// Определить расстояние между ними через T часов, 
// если автомобили первоначально движутся навстречу друг другу.

var v = 1 // авто 1 
var w = 1 // авто 2
var dist = 5 // дистанция
var t = 2 // время 
var btw = null // расстояние между авто
btw = dist - (v+w)*t 
console.log(btw)

if ( btw < dist ){
    console.log( "Расстояние между машинами " + btw + " км");
} else {
    console.log("Машины разменулись " + Math.abs(btw) + ' км' ) 
    // тут Math.abs(btw) не срабатывает, есть идеи почему???
} 

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

// 6. Найти минимальный и максимальный из данных десяти элементов массива.

var a = [10,0,1,4,2,1009,3,0,4,5,54,6,7,1009,8,9];

console.log(Math.max(...a));
console.log(Math.min(...a));

// 7. Дан номер некоторого года (положительное целое число). 
// Вывести соответствующий ему номер столетия, 
// учитывая, что, к примеру, началом 20 столетия был 1901 год.

var a = 1293;
a = a.toString();

if (a.length <= 2){
    console.log ('Первый век');
} else if (a.length >= 3){
    console.log (+a.slice(0, -2)+1 + " век");
} else {
    console.log ( "Это не год или что-то еще")
}

// 8. Расчитать сумму элементов от 1 до 100 в цикле. 


const summ = null

for (let i = 1; i <= 100; i++) {
    console.log(summ += i);
}
