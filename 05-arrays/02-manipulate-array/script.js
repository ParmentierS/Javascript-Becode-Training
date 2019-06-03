/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    const manipulate = function()
    {
        console.log(fruits);
        fruits.pop();
        fruits.shift();
        fruits.push("kiwi")
        fruits.unshift("banane");
        console.log(fruits);
        document.getElementsByClassName("explain")[0].innerHTML="<p>Pour terminer, affiche le tableau résultant dans la con"+fruits+"sole.</p>";
    }

    const bouton = document.getElementById("run");
    bouton.addEventListener("click",manipulate);
})();
