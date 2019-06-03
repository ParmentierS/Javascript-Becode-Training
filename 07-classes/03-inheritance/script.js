/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal{
        constructor(name)
        {
            super();
            this.name=name;
        }
        static get greeting() {return "Waf";}
    }

    class Cat extends Animal{
        constructor(name)
        {
            super();
            this.name=name;
        }
        static get greeting() {return "Miaou";}
    }
    function create2classes()
    {
        const cat = new Cat("Trésor");
        const dog = new Dog("Médor");
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    }
    document.getElementById("run").addEventListener("click",create2classes);
})();
