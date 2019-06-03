/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let message="";
    document.getElementById("run").addEventListener("click", () => {
        const input=document.getElementById("number").value;
        //vérifier q
        if (input == parseInt(input, 10))
        {
            console.log("C'est un int : "+input + " type :" + typeof input);
            if(input <0)
            {
                message="Entrez un nombre entier positif SVP !";
                alert(message);
                document.getElementById("number").value=message;
            }
            else
            {
                let factorielle=1;
                for(let i=1;i<=input;i++)
                {
                    factorielle=factorielle*i;
                }
                alert("La factorielle de "+input+" est de "+factorielle);
                document.getElementById("number").value=factorielle;
            }
        }
        else
        {
            console.log("Pas un int : "+input + " type :" + typeof input + "parse : "+parseInt(input));
            message="Entrez un nombre entier SVP !";
            alert(message);
            document.getElementById("number").value=message;
        }
    });
})();
