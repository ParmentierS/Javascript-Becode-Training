/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let counter=0;
    function useFetch()
    {
        console.log("etape avant requete",counter++);
        const request = new Request("http://localhost:3000/heroes", {method: 'GET'});//renvoie une Promesse
        console.log("etape après requete",counter++);
        const URL = request.url;
        const method = request.method;
        const credentials = request.credentials;
        const bodyUsed = request.bodyUsed;
        console.log("etape après stockage des attributs",counter++);
        fetch(request).then(response => 
            {
                console.log("etape dans la première fonction réponse",counter++);
                if (response.status === 200) 
                {
                    return response.json();
                } 
                else 
                {
                    throw new Error('Something went wrong on api server!');
                }
            })
        .then(response => 
            {
                console.log("etape dans la deuxième fonction réponse",counter++);
                console.debug(response);
                // ...
            })
        .catch(error => 
            {
                console.log("etape dans la fonction d'erreur",counter++);
                console.error(error);
            });
            console.log("etape après la chaine de promesse",counter++);
    }
    document.getElementById("run").addEventListener("click",useFetch)
    

})();
