/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    const assignDefaultProperties=function()
    {
        for(index in computers)
        {
            for(key in defaultProps)
            {
                //debugging checks
                /*console.log(key);
                console.log(typeof(computers[index][key]));
                console.log(typeof(computers[index][key])=="undefined");*/
                if(typeof(computers[index][key])=="undefined")
                {
                    computers[index][key]=defaultProps[key];
                }
            }
        }
        console.log(computers);
        for(index in computers)
        {
            console.log(computers[index]);
        }
    }
    document.getElementById("run").addEventListener("click",assignDefaultProperties);
})();
