/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let operande1 = parseFloat(document.getElementById("op-one").value);
        let operande2 = parseFloat(document.getElementById("op-two").value);
        switch (operation) 
        {
            case "addition":
                document.getElementById("op-one").value = operande1+operande2;
                break;
            case "substraction":
                document.getElementById("op-one").value = operande1-operande2;
                break;
            case "multiplication":
                document.getElementById("op-one").value = operande1*operande2;
                break;
            case "division":
                if(operande2 == "0")
                {
                    document.getElementById("op-two").value="Ne divise pas par zero :(";
                }
                else{
                    document.getElementById("op-one").value = operande1/operande2;
                }
                break;
            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
