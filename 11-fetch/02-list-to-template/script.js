/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function ajouterLesHeros()
    {
        //télécharger les héros à l'adresse fournie
        const req = new Request("http://localhost:3000/heroes",{method: 'GET'});
        let heroes;
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
                heroes =response;
            })
        .catch(error => 
            {
                console.error(error);
            });
        //maintenant qu'on a les héros dans des objets JS
            
        // On vérifie si le navigateur prend en charge
        // l'élément HTML template
        if("content" in document.createElement("template"))
        {
            //si oui on se sert du template
            const template = document.getElementById("tpl-hero");
            const olTarget = document.getElementById("target");
            for(index in heroes)
            {
                if(heroes[index].id === undefined)
                {

                }
                else
                {
                    const clone=document.importNode(template.content, true);
                    const currentHero=heroes[index];
                    const liHero=clone.querySelector(".hero");
                    const strongName = clone.querySelector(".name");
                    const emAlter =clone.querySelector(".alter-ego");
                    const pPowers =clone.querySelector(".powers");
                    strongName.innerHTML =currentHero.name;
                    emAlter.innerHTML=currentHero.alterEgo;
                    pPowers.innerHTML=currentHero.abilities;
                    olTarget.appendChild(liHero);
                    console.log(index);
                    console.log(currentHero);
                    console.log(clone);
                    console.log(liHero);
                }
            }
        }
    }
    document.getElementById("run").addEventListener("click",ajouterLesHeros);
})();
/*if ("content" in document.createElement("template")) {

  // On prépare une ligne pour le tableau 
  var template = document.querySelector("#productrow");

  // On clone la ligne et on l'insère dans le tableau
  var tbody = document.querySelector("tbody");
  var clone = document.importNode(template.content, true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);
  
  // On fait de même pour une autre ligne
  var clone2 = document.importNode(template.content, true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans";

  // Puis on insère
  tbody.appendChild(clone2);

} else {
  // Une autre méthode pour ajouter les lignes
  // car l'élément HTML n'est pas pris en charge.
} */