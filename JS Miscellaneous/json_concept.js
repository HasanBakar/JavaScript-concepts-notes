// ! Introduction to JSON 
/** 
 --------------------------
Javascript and JSON
---------------------------
*** JSON stands for JavaScript Object Notation. JSON is a text-based data format that is used to store and transfer data.
*** In JSON, the data are in key/value pairs separated by a comma.
JSON was derivative from javascript.

The JSON syntax resembles the javascript object literal syntax

****                                                                          ****
    The JSON format can be accessed and be created by other programming languages
****                                                                          ****

 */

//! JSON Data
/*
*** JSON data consist of key/value pairs similar to JavaScript object properties. The key and value are written in double quotes separated by a colon : example
"name":"Abu Bakar"
*/
//* JSON data requires double quotes for the key
{
    "name": "Abu Bakar",
    "age":24,
    "status":true,
}


//! Javascript object and JSON

/*
JSON	                                            JavaScript Object
The key in key/value pair should be in double quotes.	****    The key in key/value pair can be without double quotes.
JSON cannot contain functions.    ****  	JavaScript objects can contain functions.
JSON can be created and used by other programming languages. **** 	JavaScript objects can only be used in JavaScript.
*/

//! JSON Object

/*
The JSON boject is written inside curly braces {}. JSON objects can contain multiple key/value  pairs
*/

{
    "name":"Bakar",
    "age":23
}

//! JSON Array

/*
JSON array is written inside square brackets []. For example 
*/
["Abu", "Bakar", "Hasan", "Mohammad"]

//? JSON array containing objects
[
    {"name":"Abu", "age":23},
    {"name":"Bakar", "age":24},
    {"name":"Mark", "age":25}
]

/*********************************************
JSON data cannot contain functions as values.

JSON data can contain objects and arrays.

******************************************** */

//!Use of JSON
/*
_______________________________________________


JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

JSON is language independent. we can create and use JSON in other programming languages too.


_______________________________________________ */