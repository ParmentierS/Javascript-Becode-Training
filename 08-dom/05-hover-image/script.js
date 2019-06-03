/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const image = document.querySelector("figure > img")
    const src=image.getAttribute("src");
    const hoverSource = image.getAttribute("data-hover");
    console.log(image);
    function changeImageHover()
    {
        image.setAttribute("src",hoverSource);
    }
    function changeImageNotHover()
    {
        image.setAttribute("src",src);
    }

    image.addEventListener("mouseover",changeImageHover);
    image.addEventListener("mouseleave",changeImageNotHover);
})();
