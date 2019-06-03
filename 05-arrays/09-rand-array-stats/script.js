/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const filltheTabs=function()
    {
        const stupidTab =[];
        for(let i=0;i<10;i++)
        {
            stupidTab.push(Math.ceil(Math.random()*100));
        }
        console.log(stupidTab);
        for(let i=0;i<10;i++)
        {
            const id = "n-"+(i+1);
            document.getElementById(id).innerHTML=stupidTab[i];
        }
        stupidTab.sort((a,b) => {return a-b;});
        document.getElementById("min").innerHTML=stupidTab[0];
        document.getElementById("max").innerHTML=stupidTab[stupidTab.length-1];
        let somme=0;
        //could use reduce instead
        stupidTab.forEach(number => {
            //console.log(number,somme);
            somme+=number;
        });
        document.getElementById("sum").innerHTML=somme;
        const moyenne=somme/stupidTab.length;
        document.getElementById("average").innerHTML=moyenne;
    }
    document.getElementById("run").addEventListener("click",filltheTabs);

})();
