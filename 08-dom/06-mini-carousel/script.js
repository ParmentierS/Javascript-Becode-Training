/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let index=0;
    const image = document.querySelector("figure > img");
    function nextCarousel()
    {
        index=(index+1)%gallery.length;
        image.setAttribute("src",gallery[index]);
    }

    document.getElementById("next").addEventListener("click",nextCarousel);

})();
