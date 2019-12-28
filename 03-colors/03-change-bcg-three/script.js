/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const bouton=document.getElementById("run");
    const body=document.getElementsByTagName("BODY")[0];
    const randomBackgroundColor = function(event)
    {
        let randomColor = "#";
        for(let i=1;i<=6;i++)
        {
            const randomNumber = Math.round(Math.random()*9);
            randomColor+=randomNumber
        }
        body.style["background-color"]=randomColor;
    }
    bouton.addEventListener("click", randomBackgroundColor)
})();