// Реализуй функцию getRandomNumber, которая возвращает случайное значение в пределах от min до max (включительно) 
//var min = document.getElementById("minimum").value; 
//var max = document.getElementById("maximum").value;
const getRandomNumber = (min, max) => {
  min = Number(min);
  max = Number(max);
  //alert(min);
  //alert(Math.floor(min+Math.random()*(max-min+1)));
  return Math.floor(min+Math.random()*(max-min+1));
  //return 0;
}
//console.log(getRandomNumber(-5, 0));
module.exports = getRandomNumber
