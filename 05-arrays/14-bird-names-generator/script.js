/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    const displayRandomBirdName= function(birds,adjectives)//I put the parameters I want here
    {
        //we don't need the event parameter () stays empty
        //we need to return the function to use it in the addEventListener
        return ()=>
        {
            const numberOfBirds=birds.length;
            const numberOfAdjectives=adjectives.size;
            const randomIndexBird=Math.floor(Math.random()*numberOfBirds);
            let randomIndexAdjective=Math.floor(Math.random()*numberOfAdjectives);
            const selectedBird=birds[randomIndexBird];
            let selectedAdjective="";
            for (let adjective of adjectives)
            {
                console.log(adjective);
                if(randomIndexAdjective==0)
                {
                    selectedAdjective=adjective;
                    break;
                }
                randomIndexAdjective--;
            } 
            if(selectedBird.fem==true)
            {
                document.getElementById("target").innerHTML="La "+selectedBird.name+" "+selectedAdjective+"e";
            }
            else
            {
                document.getElementById("target").innerHTML="Le "+selectedBird.name+" "+selectedAdjective;
            }
        }
    }
    document.getElementById("run").addEventListener("click",displayRandomBirdName(birds,adjectives));
})();
