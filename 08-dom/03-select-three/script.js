/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetTab = document.querySelectorAll(".target");
    console.log(targetTab);
    for(index in targetTab)
    {
        targetTab[index].innerHTML="\"owned\"";
    }
})();
