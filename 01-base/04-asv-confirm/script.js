/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const promptInteger = function(message)
    {
        const texteaparser =prompt(message);
        return parseInt(texteaparser);
    }
    let messageretour = "";
    do
    {
        const age=promptInteger("C'est quoi ton âge ? ^^")
        const ville=prompt("C'est quoi ta ville? :v")
        const sexe=prompt("Tu es un garçon ou une fille ? D: ")
        messageretour="Tu as "+age+ " ans.\n"
        +"Tu es un(e) " + sexe+".\n"
        +"Tu habites à "+ville+".\n"
        +"Si tu es d'accord clique sur OK \n";
    
    }while(!confirm(messageretour));
})();
