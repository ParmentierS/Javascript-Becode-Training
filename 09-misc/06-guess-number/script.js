/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let condition=true;
    let counter=0;
    const randomNumber=Math.ceil(Math.random()*100);
    while(condition)
    {
        counter++;
        const guessNumber= +prompt("Devinez le nombre");
        if(guessNumber>randomNumber)
        {
            alert("C'est moins!")
        }
        else if(guessNumber<randomNumber)
        {
            alert("C'est plus!")
        }
        else
        {
            alert("Vous avez trouvé le nombre en "+counter+" essais, félicitations !");
            condition=false;
        }
    }
})();
