/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function handlingError(error)
    {
        console.error(error);
        console.log("On réessaye à nouveau");
        const promise = window.lib.getPersons();
        await promise.then(displayPerson,handlingError);
    }
    function displayPerson(personTab)
    {
        for(index in personTab)
        {
            console.log(personTab[index]);
        }
    }
    async function useGetPerson()
    {
        const promise = window.lib.getPersons();
        await promise.then(displayPerson,handlingError);//.catch(error => console.error("Merde je me suis gourré",error));
    }
    document.getElementById("run").addEventListener("click",useGetPerson);
})();
