module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let step = new Set(array);
  let count = 1;
  let max = 1;
     
    step.forEach(function(value, value2, set){
      //alert(value1+" "+value2);
      if ((step.has(value-1))||step.has(value+1)) {
        
      count++;
          } else {count = 1;}
        if (count>max) {
          max = count-1;
        }
    });
return max;

}
