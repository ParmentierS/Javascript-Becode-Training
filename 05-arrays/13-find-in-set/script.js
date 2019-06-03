/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    const stupidSetfunction = function(name)//I put the parameters I want here
    {
        //we don't need the event parameter () stays empty
        //we need to return the function to use it in the addEventListener
        return ()=>
        {
            console.log("taille de l'ensemble : ",people.size);
            if(people.has(name))
            {
                console.log(name,"est bien présent");
            }
            else
            {
                console.log(name,"est absent");
            }
        }
    }
    document.getElementById("run").addEventListener("click",stupidSetfunction("Alexandre"));
    document.getElementById("run").addEventListener("click",stupidSetfunction("Pierre"));
    document.getElementById("run").addEventListener("click",stupidSetfunction("Lucas"));
})();
