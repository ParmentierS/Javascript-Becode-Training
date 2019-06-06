/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function Hero(id,name,alterEgo,abilities)
    {
        this.id=id;
        this.name=name;
        this.alterEgo=alterEgo;
        this.abilities=abilities;
        this.changeId=(newId)=>
        {
            this.id=newId;
        };
    }

    const nameInput = document.getElementById("hero-name");
    const alterEgoInput = document.getElementById("hero-alter-ego");
    const powerInput=document.getElementById("hero-powers");
    async function addHero()
    {
        const heroName=nameInput.value;
        const alterEgo=alterEgoInput.value;
        const superPowersString=powerInput.value;
        if(heroName.length===0 || alterEgo.length===0 || superPowersString.length===0)
        {
            alert("Tu n'as pas le droit de laisser un champs vide");
            return;
        }
        //on a relevé la valeur des champs
        //créons donc notre nouvel objet héros
        const superPowerTab=superPowersString.split(",");
        const newHero = new Hero("jesaispasencore",heroName,alterEgo,superPowerTab);
        console.log(newHero);
        //on ne connait pas encore l'id du héros
        //ça va dépendre de la taille du tableau des héros 
        //qu'on va télécharger maintenant

        //téléchargement du tableau avec fetch
        const req = new Request("http://localhost:3000/heroes",{method: 'GET'});
        console.log(req);
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
        //maintenant qu'on a récupéré le tableau on change l'id du nouvel héros
        newHero.id=heroes.length+1;
        console.log(newHero);
        //on l'ajoute au tableau des héros
        heroes.push(newHero);
        //et ensuite on fait une requete d'update du tableau
        const dataObject=
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, cors, *same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            
            headers: 
            {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //*/
            //redirect: 'follow', // manual, *follow, error
            //referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(newHero) //  heroes type must match "Content-Type" header
        }
        console.log(dataObject);
        const req2 =new Request("http://localhost:3000/heroes",dataObject);
        console.log(req2);
        await fetch(req2)
            .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
            .catch(error => console.error(error));
    }
    document.getElementById("run").addEventListener("click",addHero);
})();
/*// Example POST method implementation:

postData('http://example.com/answer', {answer: 42})
  .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  .catch(error => console.error(error));

function postData(url = '', data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses JSON response into native Javascript objects 
}*/ 
