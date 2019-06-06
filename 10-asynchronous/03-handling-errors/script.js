/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function callbackPerson(error,personTab)
    {
        if(error != null)
        {
            console.error(error);
            console.log("On réessaye");
            window.lib.getPersons(callbackPerson);

        }
        else
        {
            for(index in personTab)
            {   
                console.log("oh une personne",personTab[index]);
            }
        }
    }
    function useGetPerson()
    {
        window.lib.getPersons(callbackPerson);
    }
    document.getElementById("run").addEventListener("click",useGetPerson);

})();
