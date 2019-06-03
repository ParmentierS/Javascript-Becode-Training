/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const convertoInt = function(string)
    {
        return ParseFloat(string);
    }
    document.getElementById("addition").addEventListener("click", () => {
        let operande1 = ParseFloat(document.getElementById("op-one").value);
        let operande2 = ParseFloat(document.getElementById("op-two").value);
        document.getElementById("op-one").value = operande1+operande2;
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let operande1 = ParseFloat(document.getElementById("op-one").value);
        let operande2 = ParseFloat(document.getElementById("op-two").value);
        document.getElementById("op-one").value = operande1-operande2;
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let operande1 = ParseFloat(document.getElementById("op-one").value);
        let operande2 = ParseFloat(document.getElementById("op-two").value);
        document.getElementById("op-one").value = operande1*operande2;
    });

    document.getElementById("division").addEventListener("click", () => {
        let operande1 = ParseFloat(document.getElementById("op-one").value);
        let operande2 = ParseFloat(document.getElementById("op-two").value);
        if(operande2 == "0")
        {
            document.getElementById("op-two").value="Ne divise pas par zero :(";
        }
        else{
            document.getElementById("op-one").value = operande1/operande2;
        }
    });
})();
