const prenom = prompt('Bonjour mon cher ami puis­je avoir ton prénom ?');
console.log(prenom);
const loadingFunction = function (event) 
{
    console.log(this.responseText);
    //const textArray = JSON.parse(this.responseText);
    //console.log(textArray);

}
//charger le fichier "data.json" tip : xmlHttpRequest
/*let req = new XMLHttpRequest();
req.open('get', "data.json", false);
req.send();*/

function loadJSONFile(file, parseFunction) 
{
    const rawFile = new XMLHttpRequest();
    //it lacks the following function
    //rawFile.onload = loadingFunction(); // function (event) 
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() 
    {
        if (rawFile.readyState === 4 && rawFile.status == "200") 
        {
            parseFunction(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function displayConsole(text)
{
    const data = JSON.parse(text);
    console.log(data);
}

function loadAndDisplayJSON()
{
    loadJSONFile("data.json", displayConsole);
}
function testRed()
{
    document.getElementsByClassName("body").style.backgroundColor = "red";
} 
//usage:
//readTextFile("data.json", displayConsole);


//ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
//classer l'ordre du tableau selon les scores tip : arr.sort()
//mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
//compter combien de personne viennent du "Bahrain" tip : filter()
//afficher le plus grand score dans la console tip : sort()
//afficher le plus petit score tip : sort()

const handleClick = function (event) 
{
    testRed();
}
/*const button = document.getElementsByTagName("button")[0];

console.log(button);
console.log(document.getElementsByTagName("BUTTON"));
let test;
test=document.getElementsByTagName("BUTTON");
console.log(test[0]);
console.log(document.querySelector("button"));
button.addEventListener('click', handleClick);*/



function addAttributeToObject(object)
{
    const randomNumber = Math.round(Math.random()*1000);
    object.score=randomNumber;
    return object;
}
function displayFile() 
{
    console.log(this.responseText);
    alert(this.responseText);
}
function displayTransformedFile(transformFunction)
{
    const textOfFile = JSON.parse(this.responseText);
    //textOfFile.map(transformFunction);
    for(let i=0;i<textOfFile.length;i++)
    {
        console.log(textOfFile[i]);
        textOfFile[i]=transformFunction(textOfFile[i]);
        console.log(textOfFile[i]);
    }
    
}

function parseFileOnLoadWith(file, parseFunction)
{
    const req = new XMLHttpRequest();
    req.addEventListener("load", parseFunction);
    // could be used :
    //req.overrideMimeType("application/json");
    // don't know when to use :
    //req.onreadystatechange
    req.open("GET",file);
    req.send();
}
//parseFileOnLoadWith("data.json",displayFile);

//parseFileOnLoadWith("data.json",displayTransformedFile(addAttributeToObject));




//const body = document.getElementsByTagName("BODY")[0];
//body.addEventListener("click", displayFile);
//const button = document.getElementById("#boutonstupide");
//button.addEventListener("click", displayFile);


const rawFile = new XMLHttpRequest();
const textOfFile = JSON.parse(rawFile.responseText);
//it lacks the following function
//rawFile.onload = loadingFunction(); // function (event) 
rawFile.onload=loadingData;
function loadingData()
{

}

rawFile.overrideMimeType("application/json");
for(let i=0;i<textOfFile.length;i++)
{
    console.log(textOfFile[i]);
    const randomNumber = Math.round(Math.random()*1000);
    textOfFile[i].score=randomNumber;
    console.log(textOfFile[i]);
}
rawFile.open("GET", "data.json", true);
rawFile.send(null);
//textOfFile.map(transformFunction);
alert("FIN Ajax");
//*/
function getRandomInt(min,max)
{
    return Math.round(Math.random()*(max-min)+min);
}

const req = new XMLHttpRequest();
let a=[];
let b=[];
let c=[];

req.onreadystatechange=(event)=>
{
    if(req.readyState===XMLHttpRequest.DONE) //DONE vaut 4 actuellement mais on ne sait jamais à l'avenir
    {
        if(req.status ===200)
        {
            res = JSON.parse(req.response);
            console.log(res)
            //res.map((x) => console.log(x));
            //map crée un nouveau tableau pour le modifier et le renvoie (ici ça marche car on modifie les mêmes objets en mémoire)
            res.map( (element) => element["score"] = getRandomInt(0,1000));
            res.sort((el1,el2) => el1.score-el2.score);                //sort est une fonction itérative
            //impacte le tableau res directement donc modifie le tableau directement 
            res.forEach((element) =>
            {
                if(element.score >750)
                {
                    a.push(element);
                }
                else if(element.score > 500)
                {
                    b.push(element);
                }
                else
                {
                    c.push(element);
                }
            })
            const filtre = res.filter((element) =>  element.country == "Bahrain");
            console.log(res);
            console.log(filtre);
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(res[0]);//commence à 0
            console.log(res[res.length-1]);// donc se termine 1 avant la longueur totale
        }
        else
        {
            console.error("Code d'erreur de la page renvoyé", req.status);
        }
    }
    else
    {
        console.error("Le fichier ne s'est pas chargé, code d'erreur : ", req.readyState);
    }
}
req.open("GET","data.json");//télécharge le fichier 
req.send(); //rien à renvoyer donc pas de paramètre