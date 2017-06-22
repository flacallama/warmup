var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
}

function testFun(myObj) {
  for (var key in myObj) {
    (myObj[key]) = 2* (myObj[key])
  }
return myObj;

}


// ---  1) FIND THE SUM OF ALL THE VALUES --- //
// function warmupOne(myObj) {
//   var sum = 0;
//   for (var key in numbers) {
//     sum += (numbers[key]);
//   }
//   return sum;
// }
// warmupOne(numbers);

// ---PUSH ALL THE VALUES INTO A NEW ARRAY --- //
// function warmupOne(myObj) {
//   var arr = [];
//   for (var key in numbers) {
//     arr.push(numbers[key]);
//   }
//   return arr;
// }
// warmupOne(numbers);

// --- SUBTRACT THE ODD NUMBERS FROM THE EVEN NUMBERS --- //
// function warmupOne(myObj) {
//   var sum = 0;
//   for (var key in numbers) {
//     if ((numbers[key]) % 2 === 0 ) {
//       sum += (numbers[key]);
//     } else {
//       sum -= (numbers[key]);
//     }
//   }
//   return sum;
// }
// warmupOne(numbers);


// ---PUSH ALL THE VALUES INTO A NEW ARRAY * 2 --- //
function warmupOne(myObj) {
  var arr = [];
  for (var key in numbers) {
    arr.push(2*numbers[key]);
  }
  return arr;
}
warmupOne(numbers);
