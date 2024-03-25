// Написать функцию isPalindrome, которая принимает в качестве параметра строку и возвращет true, если эта строка является палиндромом и false, если нет.

const isPalindrome = (str) => {
  str=str.toLowerCase();
  for (let i=0; i<=Math.floor((str.length-1)/2);i++){
    if(str[i]==str[str.length-1-i]){
      continue;
    }
    else{
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome
