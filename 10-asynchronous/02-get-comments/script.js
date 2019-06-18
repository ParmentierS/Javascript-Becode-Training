/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function callback1(stupiderror,articleTab)
    {
        for(index in articleTab)
        {
            window.lib.getComments(index,callback2(articleTab,index));
            console.log("article pas encore modifié",articleTab[index]);//la magie de l'asynchrone qui prend du temps à s'exécuter
        }
        for(index in articleTab)
        {
            console.log("article pas encore modifié",articleTab[index]);//la magie de l'asynchrone qui prend du temps à s'exécuter
        }
    }
    function callback2(articleTab, index)
    {
        return (stupiderror,commentsTab)=>
        {
            articleTab[index].comments=commentsTab;
            console.log("article modifié : ",articleTab[index]);//s'exécute après le chargement des commentaires donc le changement est effectué
        }
    }
    function addComments()
    {
        window.lib.getPosts(callback1);
    }
    document.getElementById("run").addEventListener("click",addComments);
})();
