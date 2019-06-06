/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const firstButton=document.getElementById("part-one");
    const secondButton=document.getElementById("part-two");
    const thirdButton=document.getElementById("part-three");
    const fourthButton=document.getElementById("part-four");
    const target =document.getElementById("target");

    function increment1(buttonNumber)
    {
        return ()=>
        {
            let currentButton;
            console.log(buttonNumber);
            switch (buttonNumber) 
            {
                case 1:
                    currentButton=firstButton;
                    break;
                case 2:
                    currentButton=secondButton;
                    break;
                case 3:
                    currentButton=thirdButton;
                    break;
                case 4:
                    currentButton=fourthButton;
                    break;    
            
                default:
                    console.log("Vérifie tes paramètres, gros!")
                    break;
            }
            let min =currentButton.getAttribute("data-min");
            const max =currentButton.getAttribute("data-max");
            let currentValue = currentButton.innerHTML;
            console.log(min,":",max,":",currentValue);
            if(min==="00")
            {
                min="0";
            }
            if(currentValue<max)
            {
                currentValue++;
            }
            else
            {
                currentValue=min;
            }
            if(currentValue>=10)
            {
                currentButton.innerHTML=currentValue;
            }
            else
            {
                currentButton.innerHTML="0"+currentValue;
            }
            target.innerHTML="+"+firstButton.innerHTML+secondButton.innerHTML+thirdButton.innerHTML+fourthButton.innerHTML;
        }
    }
    firstButton.addEventListener("click",increment1(1));
    secondButton.addEventListener("click",increment1(2));
    thirdButton.addEventListener("click",increment1(3));
    fourthButton.addEventListener("click",increment1(4));

})();
