/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let message="";
        const tableauString = document.getElementById("numbers").value.split(",");
        console.log(tableauString);
        console.log(typeof tableauString);
        for(let i=0;i<tableauString.length;i++)
        {
            console.log("élément d'indice "+i+" :" + tableauString[i]);
        }
        //retirer tout ce qui n'est pas un nombre
        let tableauNombre=[];
        for(let i=0;i<tableauString.length;i++)
        {
            if(isNaN(tableauString[i]))
            {
                console.log("retiré de l'input :"+i+" " + tableauString[i]);
            }
            else
            {
                tableauNombre.push(parseInt(tableauString[i]));
                console.log(typeof tableauString[i]);
                console.log(typeof tableauNombre[i]);
            }
        }
        message+="Tableau non triè :\n"+tableauNombre+"\n";
        //trier les nombres dans l'ordre
        tableauNombre.sort(function(a, b){return a-b;});
        message+="Tableau triè :\n"+tableauNombre+"\n";
        alert(message);
    });
})();
