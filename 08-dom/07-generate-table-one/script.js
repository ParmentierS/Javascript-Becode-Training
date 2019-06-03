/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const target = document.getElementById("target");
    const completeTab=document.createElement("TABLE");
    
    for(let i=1;i<=10;i++)
    {
        const rowTab=document.createElement("TR");
        rowTab.appendChild(document.createElement("TD"));
        completeTab.appendChild(rowTab);
    }
    target.appendChild(completeTab);

})();
