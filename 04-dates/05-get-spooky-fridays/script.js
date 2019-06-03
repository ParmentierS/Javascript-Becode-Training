/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //interesting algorithm to find which day of the week a given date is
    const sakamotoAlgorithm= function(day,month,year)
    {
        

        const fixedNumbers =[0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        year -= month < 3;
        return (year + Math.floor(year/4) - Math.floor(year/100) + Math.floor(year/400) + fixedNumbers[month-1] + day) % 7;

    }
    const displayFriday13=function()
    {

        console.log(sakamotoAlgorithm(31,5,2019));
        const input = document.getElementById("year");
        const year = input.value;
        let message="Liste des vendredi 13 :\n";
        if (year == parseInt(year,10))
        {
            for(let i=1;i<=12;i++)
            {
                if(sakamotoAlgorithm(13,i,year)==5)
                {
                    message+="Vendredi 13/"+i+"/"+year+"\n";
                }
            }
            
        }
        else
        {
            message="Vous n'avez pas entré d'année";
        }
        alert(message);
    }
    const bouton = document.getElementById("run");
    button.addEventListener("click",displayFriday13)


})();
/*if (data === parseInt(data, 10))
    alert("data is integer")
else
    alert("data is not an integer")*/