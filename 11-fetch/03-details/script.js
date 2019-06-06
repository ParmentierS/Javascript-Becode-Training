/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const heroIdBlock =document.getElementById("hero-id");
    async function afficherUnHeros()
    {
        //télécharger le héros grâce à l'id
        const id = heroIdBlock.value;
        const req = new Request("http://localhost:3000/heroes/"+id,{method: 'GET'});
        let hero=null;
        await fetch(req)
        .then(response => 
            {
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
                console.log(response);
                hero =response;
            })
        .catch(error => 
            {
                console.error(error);
            });
        //maintenant qu'on a les héros dans des objets JS
            
        // On vérifie si le navigateur prend en charge
        // l'élément HTML template
        if(hero===null)
        {
            console.log("id non existant ou problème de téléchargement");
            return;
        }
        if("content" in document.createElement("template"))
        {
           
            const template = document.getElementById("tpl-hero");
            const olTarget = document.getElementById("target");
            const clone=document.importNode(template.content, true);
            const currentHero=hero;
            const liHero=clone.querySelector(".hero");
            const strongName = clone.querySelector(".name");
            const emAlter =clone.querySelector(".alter-ego");
            const pPowers =clone.querySelector(".powers");
            strongName.innerHTML =currentHero.name;
            emAlter.innerHTML=currentHero.alterEgo;
            pPowers.innerHTML=currentHero.abilities;
            olTarget.appendChild(liHero);
            console.log(currentHero);
            console.log(clone);
            console.log(liHero);        
        }
    }
    document.getElementById("run").addEventListener("click",afficherUnHeros);

})();
