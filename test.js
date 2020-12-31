function test(num) {  
  let arr = [];
  for(let i = 1; i <= 50; i++) {
    if (num[i] % 2 === 0){
      arr.push(num[i]);
    }
  }
  return arr;
}
test([1,2,3,4,5,6,7,8,9,10]);