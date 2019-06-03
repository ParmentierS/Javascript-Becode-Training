/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
        const cellTab=document.createElement("TD");
        cellTab.innerHTML=i*10;
        rowTab.appendChild(cellTab);
        completeTab.appendChild(rowTab);
    }
    target.appendChild(completeTab);
})();
