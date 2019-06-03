/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const passwordBox = document.getElementById("pass-one");
    const validityBox=document.getElementById("validity");
    let passwordInput=passwordBox.value;
    if(checkPassword(passwordInput))
    {
        validityBox.innerHTML="ok";
    }
    
    function checkPassword(password)
    {
        if(password.length<8)
        {
            return false;
        }
        let numberOfDigits = 0;
        for(let i=0;i<password.length;i++)
        {
            if(!isNaN(password[i]))
            {
                numberOfDigits++;
            }
            console.log(password[i],isNaN(password[i]))
        }
        if(numberOfDigits<2)
        {
            return false;
        }
        return true;
    }
    const displayObject = function(object)
    {
        for(element in object)
        {
            console.log(element,":",object[element]);
        }
    }
    function checkPasswordBox(event)
    {      
        //console.log(displayObject(event));  
        passwordInput = passwordBox.value;
        console.log(passwordInput);
        
        if(checkPassword(passwordInput))
        {
            validityBox.innerHTML="ok";
        }
        else
        {
            validityBox.innerHTML="Pas ok";
        }
    }
    passwordBox.addEventListener('input', checkPasswordBox);
})();
