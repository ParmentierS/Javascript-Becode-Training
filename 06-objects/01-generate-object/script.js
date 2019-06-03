/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    function Person(firstname,lastname,age,city,country)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.city=city;
        this.country=country;
        this.display = function()
        {
            //didn't work
            /*const keys = this.keys();

            /*for (let i=0;i<keys.length;i++) 
            {
                console.log(""+keys[i]+" :",keys[keys[i]],"\n");
            }*/
            for(let key in this)
            {
                console.log(key+" :",this[key],"\n");
            }
        }
    }
    function displayPersonObject(firstname,lastname,age,city,country)
    {
        return ()=>
        {
            const person = new Person(firstname,lastname,age,city,country);
            console.log(person);
            person.display();
        }
    }
    document.getElementById("run").addEventListener("click",displayPersonObject("Seb","Parmentier",30,"Quelque part","Belgique"));



})();
