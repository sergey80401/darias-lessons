// Написать функцию isPalindrome, которая принимает в качестве параметра строку и возвращет true, если эта строка является палиндромом и false, если нет.

const isPalindrome = (str) => {
  str=str.toLowerCase();
  j=true;
  for (let i=0; i<=Math.floor((str.length-1)/2);i++){
    if(str[i]==str[str.length-1-i]){
      continue;
    }
    else{
      j=false;
    }
  }
  return j;
}
console.log(isPalindrome("123321"));

module.exports = isPalindrome
