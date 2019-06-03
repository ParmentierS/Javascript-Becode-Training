/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const date = new Date();
    const joursSemaine =["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
    const tableauMois=["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
    const dateObject=
    {
        jourNombre : date.getDate() <  10 ? "0" + date.getDate() : date.getDate() ,
        jourSemaine : joursSemaine[date.getDay()], 
        moisNombre : date.getMonth()+1,
        moisLettre : tableauMois[date.getMonth()],
        annee : date.getFullYear(),
        heure : date.getHours(),
        minute : date.getMinutes() < 10 ? "0" +date.getMinutes() : date.getMinutes(),
        seconde :  date.getSeconds() < 10 ? "0" +date.getSeconds() : date.getSeconds(),
        display : function()
        {
            for(attribute in this)
            {
                console.log(attribute,": ",this[attribute]);
            }
        },
        display2 : function()
        {
            let message="";
            message="Nous sommes le "+ this.jourSemaine + " "+this.jourNombre
            +" "+this.moisLettre+ " "+this.annee
            +"\n et il est "+this.heure+"h "+this.minute+"m "+this.seconde+"s";
            document.getElementById("target").innerHTML=message;
            document.getElementById("target").style[]
            
        }
    }
    dateObject.display();
    dateObject.display2();

})();
