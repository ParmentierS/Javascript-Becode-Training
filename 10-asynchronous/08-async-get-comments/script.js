/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function handleError(error)
    {
        console.error(error);
        console.error("Je suis dans la fonction handleError");
    }
    function addComments(articleTab)
    {
        return (commentsTab)=>
        {
            for(index in articleTab)
            {
                articleTab[index].comments=commentsTab[index];
                //console.log("article modifié normalement");
                //console.log(articleTab[index]);
            }
        }
    }
    async function displayArticles(articleTab)
    {
        const promise2 = window.lib.getComments() 
        await promise2.then(addComments(articleTab),handleError)
        for(index in articleTab)
        {
            console.log("article modifié car on a attendu que les fonctions de la promesse (promises) s'exécutent");
            console.log(articleTab[index]);
        }
    }
    //async/await is not necessary here since we don't do anything after the await
    async function addCommentsProcedure()
    {
        const promise1=window.lib.getPosts();
        await promise1.then(displayArticles,handleError);
    }
    document.getElementById("run").addEventListener("click",addCommentsProcedure);
})();
