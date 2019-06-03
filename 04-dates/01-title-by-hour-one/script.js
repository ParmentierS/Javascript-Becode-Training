/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const date = new Date();
    const hour = date.getHours();
    const targetElement = document.getElementById("target");

    if(hour<18)
    {
        targetElement.innerHTML="Bonjour";
    }
    else
    {
        targetElement.innerHTML="Bonsoir";
    }


})();
/*getFullYear() 	Get the year as a four digit number (yyyy)
getMonth() 	Get the month as a number (0-11)
getDate() 	Get the day as a number (1-31)
getHours() 	Get the hour (0-23)
getMinutes() 	Get the minute (0-59)
getSeconds() 	Get the second (0-59)
getMilliseconds() 	Get the millisecond (0-999)
getTime() 	Get the time (milliseconds since January 1, 1970)
getDay() 	Get the weekday as a number (0-6)
Date.now() 	Get the time. ECMAScript 5.
The getTime() Method

The getTime() method returns the number of milliseconds since January 1, 1970:
Example
var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();*/

