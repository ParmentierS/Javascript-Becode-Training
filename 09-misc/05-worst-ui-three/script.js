/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const body = document.getElementsByTagName("BODY")[0];
    const target=document.getElementById("target");
    const firstInput=document.getElementById("part-one");
    const secondInput=document.getElementById("part-two");
    const thirdInput=document.getElementById("part-three");
    const fourthInput=document.getElementById("part-four");
    const firstStopButton=document.getElementById("fix-part-one");
    const secondStopButton=document.getElementById("fix-part-two");
    const thirdStopButton=document.getElementById("fix-part-three");
    const fourthStopButton=document.getElementById("fix-part-four");
    let loop1boolean=true;
    let loop2boolean=true;
    let loop3boolean=true;
    let loop4boolean=true;
    let number1="46";
    let number2="00";
    let number3="00";
    let number4="00";
    let tab1=[firstInput,firstStopButton,loop1boolean,number1];
    let tab2=[secondInput,secondStopButton,loop2boolean,number2];
    let tab3=[thirdInput,thirdStopButton,loop3boolean,number3];
    let tab4=[fourthInput,fourthStopButton,loop4boolean,number4];
    function sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function loop(inputNumber)
    {
        async function procedure()
        {
            let currentTab;
            console.log(inputNumber);
            switch (inputNumber) 
            {
                case 1:
                    currentTab=tab1;
                    break;
                case 2:
                    currentTab=tab2;
                    break;
                case 3:
                    currentTab=tab3;
                    break;
                case 4:
                    currentTab=tab4;
                    break;    
            
                default:
                    console.log("Vérifie tes paramètres, gros!")
                    break;
            }
            const currentInput=currentTab[0];
            let min = currentInput.getAttribute("data-min");
            if(min==="00")
            {
                min="0";
            }
            const max = currentInput.getAttribute("data-max");
            let currentValue = currentInput.value;
            while(true)
            {
                //console.log(min,":",max,":",currentValue);
                if(currentTab[2])
                {
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
                        currentInput.value=currentValue;
                    }
                    else
                    {
                        currentInput.value="0"+currentValue;
                    }
                }
                await sleep(100);
                //console.log(currentInput.value);
            }
        }
        return procedure;

    }
    function change(buttonNumber)
    {
        return ()=>
        {
            let currentTab;
            console.log(buttonNumber);
            switch (buttonNumber) 
            {
                case 1:
                    currentTab=tab1;
                    break;
                case 2:
                    currentTab=tab2;
                    break;
                case 3:
                    currentTab=tab3;
                    break;
                case 4:
                    currentTab=tab4;
                    break;    
            
                default:
                    console.log("Vérifie tes paramètres, gros!")
                    break;
            }
            currentTab[2]=!currentTab[2];
            const currentInput=currentTab[0];
            currentTab[3]=currentInput.value;
            console.log(currentTab[3]);
            console.log(currentInput.value);

            if(!currentTab[2])
            {
                target.innerHTML="+"+tab1[3]+tab2[3]+tab3[3]+tab4[3];
            }
        }
    }
    function change2(buttonNumber)
    {
        async function procedure()
        {
            let currentTab;
            console.log(buttonNumber);
            switch (buttonNumber) 
            {
                case 1:
                    currentTab=tab1;
                    break;
                case 2:
                    currentTab=tab2;
                    break;
                case 3:
                    currentTab=tab3;
                    break;
                case 4:
                    currentTab=tab4;
                    break;    
            
                default:
                    console.log("Vérifie tes paramètres, gros!")
                    break;
            }
            currentTab[2]=!currentTab[2];
            const currentInput=currentTab[0];
            await sleep(3);
            currentTab[3]=currentInput.value;
            console.log(currentTab[3]);
            console.log(currentInput.value);

            if(!currentTab[2])
            {
                target.innerHTML="+"+tab1[3]+tab2[3]+tab3[3]+tab4[3];
            }
        }
        return procedure
        
    }
    console.log("avant definition")
    //wanted to use an onload event but didn't find how to launch it
    //document.window.addEventListener("load",loop(1));
    //document.window.addEventListener("load",loop(2));
    //document.window.addEventListener("load",loop(3));
    //document.window.addEventListener("load",loop(4));
    loop(1)();
    loop(2)();
    loop(3)();
    loop(4)();
    firstStopButton.addEventListener("click",change(1));
    secondStopButton.addEventListener("click",change(2));
    thirdStopButton.addEventListener("click",change(3));
    fourthStopButton.addEventListener("click",change(4));
    console.log("après definition")

})();
