/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      // Sleep in loop
    async function MachineAEcrire(random) 
    {
        const target = document.getElementById("target");
        const text=target.innerHTML;
        console.log(text)
        target.innerHTML="";
        for(let i=0;i<text.length;i++)
        {
            //console.log("On se repose");
            if(random)
            {
                const randomSeconds = Math.ceil(Math.random()*500);
                await sleep(randomSeconds);
            }
            else
            {
                await sleep(200);
            }
            const letterContainer=document.createElement("SPAN");
            letterContainer.innerHTML=text[i];
            target.appendChild(letterContainer);
        }
        console.log("La secrétaire est fatiguée")
    }
    async function MachineAEcrire2(text,random) 
    {
        console.log(text);
        const target = document.getElementById("target");
        target.innerHTML="";
        for(let i=0;i<text.length;i++)
        {
            //console.log("On se repose");
            if(random)
            {
                const randomSeconds = Math.ceil(Math.random()*500);
                await sleep(randomSeconds);
            }
            else
            {
                await sleep(200);
            }
            const letterContainer=document.createElement("SPAN");
            letterContainer.innerHTML=text[i];
            target.appendChild(letterContainer);
        }
        console.log("La secrétaire est fatiguée 2")
    }
    //don't use two different async functions in the same time or there will be conflicts !!!
    //if we use two times the same function it doesn't work either :/
    //I have to learn more things
    //MachineAEcrire(true);
    //MachineAEcrire(false)
    MachineAEcrire2("Texte idiot qui n'aurait jamais du voir le jour !!!",true);
})();

/*function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two seconds later, showing sleep in a loop...');

  // Sleep in loop
  for (let i = 0; i < 5; i++) {
    if (i === 3)
      await sleep(2000);
    console.log(i);
  }
}

demo(); */