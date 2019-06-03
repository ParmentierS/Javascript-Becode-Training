/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
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

    const trouver = function(element)
    {
        return function(event)
        { 
            console.log("target:",event.target,"currentTarget:",event.CurrentTarget)
            const indiceElement = fruits.indexOf(element);
            if(indiceElement <0)
            {
                console.log("L'élément",element,"n'est pas dans le tableau");
            }
            else
            {
                console.log("Ouais il est dans le tableau l'élément",element);
            }
        }
    }

    const bouton = document.getElementById("run");
    bouton.addEventListener("click",trouver("pomme"));
    bouton.addEventListener("mousemove",trouver("turlututu"));//third to appear
    bouton.addEventListener("mouseenter",trouver("poire"));//second to appear (pear)
    bouton.addEventListener("mouseover",trouver("banane"));//first to appear
})();
