/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person
    {
        constructor(firstname,lastname)
        {
            this.firstname=firstname;
            this.lastname=lastname;
        }
        get name()
        {
            return this.firstname + " "+this.lastname;
        }
        set name(string)
        {
            const nameTab=string.split(" ");
            //console.log(nameTab);
            this.firstname=nameTab[0];
            this.lastname=nameTab[1];
        }
    }
    function setget()
    {
        const person = new Person("Archie","Bald");//a very bald person
        console.log(person.name);
        person.name ="Afro Man";
        console.log(person.name);
    }
    document.getElementById("run").addEventListener("click",setget);
})();
