/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
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
            passwordBox1.style["border-color"]="red";
            passwordBox2.style["border-color"]="red";
        }
        else
        {
            passwordBox1.style["border-color"]="";
            passwordBox2.style["border-color"]="";
        }
    }
    document.getElementById("run").addEventListener("click",compare);
})();
