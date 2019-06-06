/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const slider = document.getElementById("slider");
    const target = document.getElementById("target");
    //let value = slider.getAttribute("value"); //doesn't work it stays fixed to 46000000
    let value = slider.value;
    target.innerHTML="+"+value;
    console.log(value);
    const changeValue = function(event)
    {
        //value = slider.getAttribute("value"); //doesn't work it stays fixed to 46000000
        value = slider.value;
        target.innerHTML="+"+value;
    }
    slider.addEventListener("input",changeValue)

})();
