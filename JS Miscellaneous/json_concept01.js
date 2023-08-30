//! Accessing JSON Data

//* we can access JSON data using the dot notation. The syntax is: variableName.key

const data = {
    "name":"Abu Bakar",
    "age":23,
    "hobby":{
        "reading":true,
        "gaming":false,
        "sport":"Criket"
    },
    "classes":["JavaScript", "HTML", "CSS3"]
}

console.log(data.name);//Abu Bakar
console.log(data.hobby);//{"reading":true"gaming":false,"sport":"Criket"}
console.log(data.hobby.sport);//Criket
console.log(data.classes[2]);//CSS3