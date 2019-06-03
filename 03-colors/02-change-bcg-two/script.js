/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const changebackgroundcolor = function(event)
    {
        const inputColor=document.getElementById("color").value;
        const body=document.getElementsByTagName("BODY");
        body[0].style["background-color"]=inputColor;
    }
    const runButton = document.querySelector("#run");
    runButton.addEventListener("click",changebackgroundcolor)


})();
