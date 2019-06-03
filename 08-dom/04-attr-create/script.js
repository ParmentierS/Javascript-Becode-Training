/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const dataContainer = document.getElementById("source");
    const dataValue =dataContainer.getAttribute("data-image");
    const newImage=document.createElement("IMG");
    newImage.setAttribute("src",dataValue);
    const target = document.getElementById("target");
    target.appendChild(newImage);
    dataContainer.parentNode.removeChild(dataContainer);
})();
