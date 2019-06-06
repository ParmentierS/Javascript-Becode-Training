/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function displayArticles(articleTab)
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
    async function useGetPost()
    {
        const promise1=window.lib.getPosts();
        await promise1.then(displayArticles,handleError);
        console.log("On a attendu que la promesse s'exécute")

    }
    document.getElementById("run").addEventListener("click",useGetPost);
})();
