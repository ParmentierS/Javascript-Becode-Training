/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const tableauBoutons=document.querySelectorAll("button");
    const performOperation =function(event)
    {
        console.log(event);
        console.log("Target :"+event.target);
        console.log(event.target);
        console.log("Current Target :"+event.currentTarget);
        console.log(event.currentTarget);
        //console.log("Current Global Target :"+currentTarget)
        console.log("Explicit Original Target :"+event.explicitOriginalTarget);
        console.log(event.explicitOriginalTarget);
        console.log("Original Target : "+event.originalTarget);
        console.log(event.originalTarget);
        const probableGoodTargetButton = event.currentTarget;
        const body=document.querySelector("body");
        console.log(probableGoodTargetButton);
        console.log(body);
        body.style["background-color"]=probableGoodTargetButton.id;

    }
    for(let i=0;i<tableauBoutons.length;i++)
    {
        tableauBoutons[i].addEventListener("click",performOperation);
    }

})();
