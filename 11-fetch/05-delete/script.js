/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
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

    const idInput = document.getElementById("hero-id");
    async function removeHero()
    {
        const idHero=idInput.value;
        //téléchargement du tableau avec fetch
        const dataObject=
        {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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
        }
        console.log(dataObject);
        const req2 =new Request("http://localhost:3000/heroes/" + idHero,dataObject);
        console.log(req2);
        await fetch(req2)
            .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
            .catch(error => console.error(error));
                //télécharger les héros à l'adresse fournie
        const req = new Request("http://localhost:3000/heroes",{method: 'GET'});
        let heroes;
        console.log(1);
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
    }
    document.getElementById("run").addEventListener("click",removeHero);
})();
/*fetch('https://example.com/delete-item/', {
  method: 'DELETE',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({id: '5bdcdfa40f0a326f858feae0'})
})
.then(res => res.text()) // OR res.json()
.then(res => console.log(res))*/ 