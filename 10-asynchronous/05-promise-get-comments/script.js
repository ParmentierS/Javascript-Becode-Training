/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
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
                console.log("article modifié normalement");
                console.log(articleTab[index]);
            }
        }
    }
    function displayArticles(articleTab)
    {
        const promise2 = window.lib.getComments() 
        promise2.then(addComments(articleTab),handleError)
        for(index in articleTab)
        {
            console.log("article non modifié car la fonction getComments est asynchrone");
            console.log(articleTab[index]);
        }
    }
    function addCommentsProcedure()
    {
        const promise1=window.lib.getPosts();
        promise1.then(displayArticles,handleError);
    }
    document.getElementById("run").addEventListener("click",addCommentsProcedure);
})();
/*function displayArticles(articleTab)
    {
        for(index in articleTab)
        {
            console.log(articleTab[index]);
        }
    }
    function handleError(error)
    {
        console.error(error);
        console.error("Je suis dans la fonction handleError");
    }
    function useGetPost()
    {
        const promise1=window.lib.getPosts();
        promise1.then(displayArticles,handleError);

    }
    document.getElementById("run").addEventListener("click",useGetPost);
     */
