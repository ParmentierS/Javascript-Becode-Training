/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
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
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    const afficherElement4 = function()
    {
        console.log(fruits[3]);
        document.getElementById("run").innerHTML="Lancer le scr"+fruits[3]+"ipt";
        document.getElementsByClassName("explain")[0].innerHTML="<p>Au clic sur le bouton, affiche le quatrième élément du tableau <strong>fruits</strong> dans le scr"+fruits[3]+"ipt.</p>";
    }

    const bouton = document.getElementById("run");
    bouton.addEventListener("click",afficherElement4);
})();
