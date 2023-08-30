//!JavaScript Date and Time
/*
In JavaScript, date and time are represented by the Date object. The Date object provides the date and time information and also provides various methods.

A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).


*/

//! Creating Data Objects
//* There are four ways to create a data object

/*
new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

/*

There are various methods available in JavaScript Date object.

Method	Description
now()  ----	Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)
getFullYear()------	Gets the year according to local time
getMonth() -----	Gets the month, from 0 to 11 according to local time
getDate()-------	Gets the day of the month (1–31) according to local time
getDay()	---- Gets the day of the week (0-6) according to local time
getHours()---------	Gets the hour from 0 to 23 according to local time
getMinutes---------	Gets the minute from 0 to 59 according to local time
getUTCDate()------------	Gets the day of the month (1–31) according to universal time
setFullYear()-------	Sets the full year according to local time
setMonth()-----	Sets the month according to local time
setDate()--------	Sets the day of the month according to local time
setUTCDate()-------	Sets the day of the month according to universal time

*/