//! Converting JSON to JavaScript Object
/*
we can convert JSON to JavaScript object with help of JSON.parse()

*/
//? Json object
const jsonData = '{"name":"Bakar", "age":23}';
//* converting to javascript object
const obj = JSON.parse(jsonData);
console.log(obj);

//* accessing the data 
console.log(obj.name);//Bakar

//! Converting JavaScript Object to JSON

//*JavaScript object
const jsObj= {
    "name":"abu bakar",
    "age":23
} ;

//* converting to json
const jsonObj = JSON.stringify(jsObj);

console.log(jsonObj);

