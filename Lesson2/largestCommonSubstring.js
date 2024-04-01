// Написать функцию largestCommonSubstring, которая принимает в качестве параметров две строки: str1 и str2. И Возвращает наибольшую общую подстроку, УЧИТЫВАЯ ПРОБЕЛЫ
// Пример: 
// str1 = "Даше нравится кодить на JavaScript"
// str2 = "Программистам на Java нравится пить кофе"
//
// P.S. В str1 и str2 много общих подстрок, например " на Java", "ить", и даже " " будет считаться общей подстрокой, так как обе строки содержат пробелы. Но надо найти наибольшую
// 
// Результат выполнения функции: " нравится "

//str1 = "ABC_A"
//str2 = "CAB_BC_A"
const largestCommonSubstring = (str1, str2) => {
  var array = [];
  var substr="";
  //String largestSubstring;
  for (i=0; i<str1.length; i++){
      for (j=0; j<str2.length; j++){
          if (str1[i]==str2[j]){
              var substr = substr+str1[i];
              //array.push(substr);
              i++;
          }else{
              array.push(substr);
              substr="";
          }
      }
  }
  array.push(substr);
  var largestSubstring=array[0];
  for (k=1; k<array.length; k++){
      if (largestSubstring.length<array[k].length){
      largestSubstring=array[k];
      }
  }
  return largestSubstring;
}

module.exports = largestCommonSubstring
