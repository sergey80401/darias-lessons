// Написать функцию rhombus, которая принимает в качестве параметра число n. А Возвращает двумерный массив состоящий из строк " " или "0", выводя который на экран, получался бы ромб
//
// Пример: 
// n = 3
// 
// Результат выполнения функции: [
//   [" ", "0", " "],
//   ["0", "0", "0"],
//   [" ", "0", " "]
// ]
//
// n = 5
// 
// Результат выполнения функции: [
//   [" ", " ", "0", " ", " "],
//   [" ", "0", "0", "0", " "],
//   ["0", "0", "0", "0", "0"],
//   [" ", "0", "0", "0", " "],
//   [" ", " ", "0", " ", " "]
// ]
//
// n = 4
// 
// Результат выполнения функции: [
//   [" ", "0", "0", " "],
//   ["0", "0", "0", "0"],
//   ["0", "0", "0", "0"],
//   [" ", "0", "0", " "],
// ]


//var n = 6;
const rhombus = (n) => {
var array = [];
var mid = Math.floor((n-1)/2);
if (n%2==0){
for (var i = 0; i<=mid; i++){
  array[i]=[];
  for (var j = 0; j<n; j++){
    array[i][j]="0";
    if (j<(mid-i)||j>mid+1+i){
      array[i][j]=" ";
    }
  }
}
array = [...array, ...array.reverse()];
  }
  
  else{
    for (var i = 0; i<mid; i++){
      array[i]=[];
      for (var j = 0; j<n; j++){
        array[i][j]="0";
        if (j<(mid-i)||j>(mid+i)){
          array[i][j]=" ";
        }
      }
    }
    array = [...array, Array(n).fill("0"), ...array.reverse()];
  }
return array;
}

module.exports = rhombus