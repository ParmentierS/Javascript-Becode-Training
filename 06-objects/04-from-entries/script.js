/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    const createObject = function()
    {

        const map = new Map();
        for (let i=0;i<keys.length;i++)
        {
            map.set(keys[i],values[i]);
        }
        const newObject = Object.fromEntries(map);
        console.log("Keys :",keys,"\n","Values :",values,"\n","Map : :",map,"\n","Object :",newObject)
    }
    document.getElementById("run").addEventListener("click",createObject);
})();
