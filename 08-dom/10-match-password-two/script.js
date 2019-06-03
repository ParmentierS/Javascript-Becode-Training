/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const passwordBox1=document.getElementById("pass-one");
    const passwordBox2=document.getElementById("pass-two");
    function compare()
    {
        const password1 = passwordBox1.value;
        const password2 = passwordBox2.value;
        if(! (password1===password2))
        {
            passwordBox1.classList.add("error");
            passwordBox2.classList.add("error");
        }
        else
        {
            passwordBox1.classList.remove("error");
            passwordBox2.classList.remove("error");
        }
    }
    document.getElementById("run").addEventListener("click",compare);
})();
