const users = [
{firstName: "Ankit", lastName: "Pandey", age: 20},
{firstName: "donald", lastName: "duck", age: 45},
{firstName: "baba", lastName: "snoopDog", age: 78},
{firstName: "Narendra", lastName: "Modi", age: 20},
];

const output = users.map((x)=> x.firstName + " " + x.lastName);

console.log(output);

//tricky reduce

const output1 = users.reduce(function(acc,curr) {
    
if(acc[curr.age]){
  acc[curr.age] = ++acc[curr.age];
}
else{
  acc[curr.age]=1
}
return acc;

}, {});
console.log(output1);

//printing first name of people whose age is less than 30

const output3 = users.filter((x) => x.age<30).map((x) => x.firstName);
console.log(output3);

