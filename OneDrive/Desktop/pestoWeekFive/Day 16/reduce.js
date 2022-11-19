const arr = [5,1,3,2,6];

//normal sum function

function findSum(arr) {
  let max = 0;
for (let i = 0; i < arr.length; i++) {
 if(arr[i] > max){
  max = arr[i];
 }
}
return max;
}
console.log(findSum(arr));
//17

//using reduce

const output = arr.reduce(function(acc,curr) { //accumulator= sum, current = arr[i]
acc= acc + curr;
return acc;
}, 0); //initial value of acc

console.log(output);
//17

//reduce max
const output1 = arr.reduce(function(max,curr) {
  if( curr > max){
    max = curr;
    }
},0)
//6 