/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    function removeDuplicates()
    {
        //create an object to reduce the number of elements using unique keys of objects
        //each key is visited more than once but there is only one key of each fruit in the end
        const fruitsObject={};
        fruits.forEach(element => 
        {
            fruitsObject[""+element]="";
        });
        const fruitsWithoutDuplicates = Object.keys(fruitsObject);
        console.log(fruitsWithoutDuplicates);
    }
    document.getElementById("run").addEventListener("click",removeDuplicates);
})();

//was supposed to create a set here
