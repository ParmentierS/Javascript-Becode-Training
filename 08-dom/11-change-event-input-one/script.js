/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const passwordBox = document.getElementById("pass-one");
    const counterBox=document.getElementById("counter");
    let lastPasswordInput=passwordBox.value;
    let numberOfCharacters=lastPasswordInput.length;
    counterBox.innerHTML=numberOfCharacters+"/10";
    const displayObject = function(object)
    {
        for(element in object)
        {
            console.log(element,":",object[element]);
        }
    }
    function check10CharactersOnly(event)
    {      
        //console.log(displayObject(event));  
        const passwordInput = passwordBox.value;
        numberOfCharacters = passwordInput.length;
        console.log(passwordInput,numberOfCharacters,lastPasswordInput);
        if(numberOfCharacters<=10)
        {
            counterBox.innerHTML=numberOfCharacters+"/10"
            lastPasswordInput=passwordInput;
        }
        else
        {
            passwordBox.value=lastPasswordInput;
        }

        //passwordBox.value=event.data+" "+event.data;
    }
    passwordBox.addEventListener('input', check10CharactersOnly);
})();
