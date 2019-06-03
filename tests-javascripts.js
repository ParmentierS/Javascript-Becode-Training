        /*Best function ever : never use a parseInt in your code anymore :DDD*/ 
const promptInteger = function(message)
{
    const texteaparser =prompt(message);
    return parseInt(texteaparser);
}


        /*//---------->>>Exercices operateurs<<<--------------\\

const x=5, y="Oudsiplou", z="Jules", n=3;
alert(`Vous serez `+x+` et habiterez à `+y+`, et marié a `+z+` avec `+n+` enfants.`);
alert("Vous serez "+x+" et habiterez à "+y+", et marié a "+z+" avec "+n+" enfants.");
const annecourante=2019;
const anneenaissance=1989;
const agepossible= annecourante-anneenaissance;
alert("Vous avez "+ (agepossible) + " ans si votre anniversaire est déjà passé cette année ou "+ (agepossible - 1) + " ans si votre anniversaire n'est pas encore passé.")

const vraiage= 30;
const agemaximum=100;
const denree="paquets de pates";
const consommationparjour=1;
const nombrerestantsjoursàvivre =(agemaximum-vraiage)*365;
alert("Il vous reste " + (nombrerestantsjoursàvivre*consommationparjour) + " " + denree + " avant d'atteindre l'age de "+ agemaximum+ " ans");

const result = (1 + 2) * 3 + 4 / 2;
const resultetape1 = (1 + 2);
const resultetape2 = (1 + 2) * 3;
const resultetape3 = 4 / 2;
const resultetape4 = resultetape2 + resultetape3;

alert("Calcul : (1 + 2) * 3 + 4 / 2  \nEtape 1 (1 + 2) : " + resultetape1 + "\nEtape2 (1 + 2) * 3 : " + resultetape2 + "\nEtape3 4 / 2 : " + resultetape3 +  "\nEtape4 la somme des 2 : " + resultetape4 + "\nResultat  : " + result);
alert("FIN");
//*/


    // Encountered Bugs
//alert(`Vous serez `$x` et habiterez à `$y`, et marié a `$z` avec `$n` enfants.`); //make the script bug

    /*these instructions don't work T_T */
/*alert(`Vous serez $(x) et habiterez à $(y), et marié a $(z) avec $(n) enfants.`);
alert('Vous serez $x et habiterez à $y, et marié a $z avec $n enfants.');
alert('Vous serez $(x) et habiterez à $(y), et marié a $(z) avec $(n) enfants.');
alert('Vous serez $X et habiterez à $Y, et marié a $Z avec $N enfants.');
alert('Vous serez $(X) et habiterez à $(Y), et marié a $(Z) avec $(N) enfants.');
alert('Vous serez $X et habiterez à $Y, et marié a $Z avec $N enfants.');
alert("Vous serez $(X) et habiterez à $(Y), et marié a $(Z) avec $(N) enfants.");*/
//*/

/*    //---------->>>Exercices operateurs<<<--------------\\

//alert(15,234 == 15,234); //display 15 ! alert seems to not understand boolean operators

const langue=prompt("Quel est votre langue? (en, es ou fr et pas autre chose !!!!)");
let message;

if(langue=="es")
{
    message="Hola, Mundo";
}
else if(langue=="en"){
    message= "Hello world";
}
else if(langue=="fr"){
    message="Bonjour tout le monde";
}
else{
    message="EEEEEEEEHHHHHH?????";
}
alert(message);


let rangresultat;
let score = 91;
if(score >= 90)
{
    rangresultat="A";
}
else if(score <= 50){

    rangresultat="C";
}
else{
    rangresultat="B";
}
alert(rangresultat);
score = 89;
if(score >= 90)
{
    rangresultat="A";
}
else if(score <= 50){

    rangresultat="C";
}
else{
    rangresultat="B";
}
alert(rangresultat);
score = 50;
if(score >= 90)
{
    rangresultat="A";
}
else if(score <= 50){

    rangresultat="C";
}
else{
    rangresultat="B";
}
alert(rangresultat);

const mot=prompt("Entrez un mot");
let resultatmotpluriel;
let nombreelements=5;
if(nombreelements>1){
    resultatmotpluriel = mot + "s";
}
else{
    resultatmotpluriel=mot;
}
alert("je possède "+nombreelements+" "+resultatmotpluriel);
nombreelements=1;
if(nombreelements>1){
    resultatmotpluriel = mot + "s";
}
else{
    resultatmotpluriel=mot;
}
alert("je possède "+nombreelements+" "+resultatmotpluriel);
nombreelements=-31;
if(nombreelements>1){
    resultatmotpluriel = mot + "s";
}
else{
    resultatmotpluriel=mot;
}
alert("je possède "+nombreelements+" "+resultatmotpluriel);
alert("FIN");
//*/

        /*//---------->>>Exercices Fonctions<<<--------------\\

const soustraire = function(x,y) 
{
    return x-y;
}
const soustraire2 = (x,y)=>x-y;

const multiplication = function(x,y)
{
    return x*y;
}
const multiplication2 = (x,y)=>x*y;

const division = function(a, diviseur)
{
    if(diviseur==0){
        alert("Arrête tu vas créer un crash informatique en divisant par 0 et j'ai pas envie de faire une exception pour toi D:")
        return "NaNmaistutecroisoù";
    }
    else{
        return a/diviseur;
    }
}
const calculPourcentage = function(valeur,pourcentage)
{
    return ((pourcentage*valeur)/100);
}
const calculVitesse= function(distance, temps)
{
    if(temps <= 0){
        alert("Arrête tu vas courber l'espace temps et faire péter le radar si tu te déplace instantanément d'un point A à un point B D:")
        return "NaNmaistutecroisoù";
    }
    else{
        return distance/temps;
    }
    
}

//test de mes fonctions

const premiernombre=promptInteger("Entrez un nombre ");
const deuxiemenombre=promptInteger("Entrez un autre nombre ");
const unmoinsdeux= soustraire(premiernombre,deuxiemenombre);
const unfoisdeux = multiplication(premiernombre,deuxiemenombre);
const deuxdiviseun=division(premiernombre,deuxiemenombre);
const deuxpourcentagedeun=calculPourcentage(premiernombre,deuxiemenombre);
const vitessededistanceunentempsdeux=calculVitesse(premiernombre,deuxiemenombre);
alert("Nombre 1 : "+premiernombre+" (base,valeur,distance en km) \nNombre 2 : "+deuxiemenombre+" (diviseur,pourcentage,temps en heure)\nSoustraction: "+ unmoinsdeux +"\nMultiplication : "+ unfoisdeux + "\nDivision: "+ deuxdiviseun + "\nPourcentage : "+ deuxpourcentagedeun + "\nVitesse: " + vitessededistanceunentempsdeux+ " km/h");


alert("FIN");
//*/

       /*//---------->>>Exercices Boucles<<<--------------\\

for(let i=0;i<21;i++){
    if(i%2==0)
    {
        console.log(i+" est pair");
    }
}
for(let i=0;i<11;i++)
{
    console.log(i+"*9 = "+(i*9));
}
for(let i=0;i<101;i++)
{
    let grade;
    if(i<65)
    {
        grade="F";
    }
    else if(i<70)
    {
        grade="D";
    }
    else if(i<80)
    {
        grade="C";
    }
    else if(i<90)
    {
        grade="B";
    }
    else
    {
        grade="A";
    }
    if(i==0 || i==1)
    {
        console.log("Pour "+ i +" point vous avez le grade "+grade);
    }
    else
    {
        console.log("Pour "+ i +" points vous avez le grade "+grade);
    }
}

for(let i=1;i<6;i++)
{
    let line=""
    for(let j=1;j<i+1;j++)
    {
        line = line + "* ";
    }
    line = line + " \n";
    console.log(line);
}
alert("FIN");
//*/

/*      //---------->>>Exercices Tableaux<<<--------------\\

const tableau1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somme=0;
for(let i=0;i<tableau1.length;i++)
{
    somme+=tableau1[i];
}
alert("La somme des éléments du tableau "+tableau1+ " est de "+somme);


const tableauActeurs=["Kevin Bacon", "Bruce Lee", "Samuel lee Jackson"];
const tableauEnumerationFrançais=["premier", "second", "troisième"];

for(let i=0;i<tableauActeurs.length;i++)
{
    console.log("Le "+ tableauEnumerationFrançais[i] + " est " + tableauActeurs[i]);
}

const tableauPersosJV = ["Mario", "Luigi", "Peach"];

//these instructions won't work since both javascript array are linked to the same array in memory, changing one will also change the other
//let tableaudupliqué = tableauPersosJV;
//tableaudupliqué.push("Bowser");

//we have to recreate the duplicate array from scratch

//first way
let tableaudupliqué=[];
for(let i=0;i<tableauPersosJV.length;i++)
{
    tableaudupliqué.push(tableauPersosJV[i]);
}
tableaudupliqué.push("Bowser");

alert("Manière 1 : \nTableau avant : ["+tableauPersosJV+"]\nTableau après : ["+tableaudupliqué+"]");

//second way
let tableaudupliqué2=[];
for(let i=0;i<tableauPersosJV.length;i++)
{
    tableaudupliqué2[i]=tableauPersosJV[i];
}
tableaudupliqué2[tableaudupliqué2.length]="Bowser";

alert("Manière 2 : \nTableau avant : ["+tableauPersosJV+"]\nTableau après : ["+tableaudupliqué2+"]");

alert("FIN");
//*/
      /*//---------->>>Exercices Pendu<<<--------------\\

const guessLetter = function(letter,word,guessedWord)
{
    for(let i=0;i<word.length;i++)
    {
        if(letter==word[i])
        {
            guessedWord[i]=word[i];
            console.log("Vous avez deviné la lettre "+letter);
        }
    }
}

const displayWord = function(wordArray)
{   
    let word="";
    for(let i=0;i<wordArray.length;i++)
    {
        word+=wordArray[i];
        word+=" ";
    }
    console.log(word);
}
const endofGame = function(wordArray)
{
    let returningValue=true;
    for(let i=0;i<wordArray.length;i++)
    {
        if(wordArray[i]=='_')
        {
            returningValue=false;
            return returningValue;
        }
    }
    return returningValue;
}
const threeFunctionsInOne=function(guessedletter,wordArray,guessedLettersArray)
{
    let returningValue=true;
    word="";
    for(let i=0;i<wordArray.length;i++)
    {
        word+=wordArray[i];
        if(letter==wordArray[i])
        {
            guessedLettersArray[i]=wordArray[i];
        }
        if(guessedLettersArray[i]=='_')
        {           
            returningValue=false;
        }
    }
    return returningValue;
}

const penduSimple=function()
{
    console.log("testpendu");
    const word=['B','O','N','J','O','U','R'];
    let guessedletters=['_','_','_','_','_','_','_'];
    while(!endofGame(guessedletters))
    {
        let letter=prompt("Veuillez entrez une lettre");
        guessLetter(letter,word,guessedletters);
        displayWord(guessedletters);
    }
    alert("Félicitations tu as trouvé le mot mystère");
}
penduSimple();

alert("FIN");
//*/
      /*//---------->>>Exercices Math<<<--------------\\

const min = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
const max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
const min2 = Math.min(...[7, 5, -12, 6, 32, 18, 14, -2]);
const max2 = Math.max(...[-3, 9, 21, 36, 27, 54, 17, 35]);
const somme = min + max;
const somme2 = min2 + max2;
alert("Le min de [7, 5, -12, 6, 32, 18, 14, -2] est de "+min+" ou "+min2+"\nLe max de [-3, 9, 21, 36, 27, 54, 17, 35] est de "+max+" ou "+max2+"\nLa somme des 2 est "+somme+" ou "+ somme2);

const floatBateau = 10.4;
const couleBateau = Math.floor(floatBateau);
const voleBateau = Math.ceil(floatBateau);
alert("floatBateau : "+floatBateau+"\ncouleBateau : "+couleBateau+"\nvoleBateau : "+voleBateau);

const aleatoire_0_1 = Math.random(); //[0,1[
const aleatoire_50_100 = (Math.random()*50)+50; //[50,100[
const aleatoire_0à10 = Math.round(Math.random()*10); //{0,...,10}
const aleatoire_0ou1 = Math.round(Math.random()); // {0, 1}
const aleatoire_0inclusà10exclus_float = Math.random()*10; //[0,10[
const aleatoire_0exclusà10inclus_float = (Math.random()*(-10))+10;//]0,10]
const aleatoire_0inclusà10inclus_float =  aleatoire_0ou1 * aleatoire_0inclusà10exclus_float + (1 - aleatoire_0ou1 )* aleatoire_0exclusà10inclus_float;//je choisis l'un ou l'autre
alert("Valeur entre 0 et 1(exclus): "+aleatoire_0_1+"\nValeur entre 50 et 100(exclus):  "+aleatoire_50_100+"\nValeur est 0 ou 1 :  "+aleatoire_0ou1+"\nValeur entière entre 0 et 10 (inclus):  "+aleatoire_0à10+"\nValeur entre 0 et 10 (inclus):  "+aleatoire_0inclusà10inclus_float);

const persosMortalKombat = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
const indiceRandom=Math.round(Math.random()*(persosMortalKombat.length-1));
const persoRandom= persosMortalKombat[indiceRandom];
alert("Je choisis le perso d'indice "+ indiceRandom+": "+persoRandom+"\n dans "+persosMortalKombat);
alert("FIN");
//*/
        /*//---------->>>Exercices Objets<<<--------------\\

//the old way to define objects
let CharacterMorti = 
{
    name: "Mortifère",
    age: 45,
    items_to_give:["Marteau","Canard en plastique", "Vin", "Hache de guerre", "Trousse à maquillage", "Carte du donjon", "Baton de dynamite allumé"],
    display : function()
    {
        console.log("Nom : "+this.name+"\nAge : "+this.age+"\nItems to give : "+this.items_to_give+"\n")
    },
    giveItem : function()
    {
        const tailleTableau=this.items_to_give.length;
        if(tailleTableau ==0)
        {
            alert(this.name+" n'a rien à vous donner! \n Passez votre chemin manant !");
        }
        else
        {
            const indiceRandom=Math.round(Math.random()*(tailleTableau-1));
            const  objet = this.items_to_give[indiceRandom];
            alert(this.name+" vous a donné l'objet "+objet);
        }
	}
};
CharacterMorti.display();
CharacterMorti.giveItem();

//the new way to define objects !!!
function Character(name, age, items) 
{
    this.name = name;
    this.age = age;
    this.items_to_give = items;
    this.display = function()
    {
        console.log("Nom : "+this.name+"\nAge : "+this.age+"\nItems to give : "+this.items_to_give+"\n")
    }
    this.giveItem = function()
    {
        const tailleTableau=this.items_to_give.length;
        if(tailleTableau ==0)
        {
            alert(this.name+" n'a rien à vous donner! \n Passez votre chemin manant !");
        }
        else
        {
            const indiceRandom=Math.round(Math.random()*(tailleTableau-1));
            const  objet = this.items_to_give[indiceRandom];
            alert(this.name+" vous a donné l'objet "+objet);
        }
	}
}
let character1 = new Character("Truc","26",[])
let character2 = new Character("Machin", "-2", ["Excalibur"])
let character3 = new Character("Mortifère", "44",["Marteau","Canard en plastique", "Vin", "Hache de guerre", "Trousse à maquillage", "Carte du donjon", "Baton de dynamite allumé"] )
character1.display();
character2.display();
character3.display();
character1.giveItem();
character2.giveItem();
character3.giveItem();

function Objetàvendre(title, physic, magic, minLevel, available) 
{

    this.title=title;
    this.physic=physic;
    this.magic=magic;
    this.minLevel=minLevel;
    this.available=available;
    this.display = function()
    {
        console.log("Title : "+this.title+"\nPhysic : "+this.physic+"\nMagic : "+this.magic+"\nMinLevel : "+this.minLevel+"\nAvailable ? : "+this.available);
    }
}
let shopArray = [];
const epee = new Objetàvendre("Épée", 100, 0, 5, true);
shopArray.push(epee);
const hache = new Objetàvendre("Hache", 200, 0, 15, true);
shopArray.push(hache);
const sceptre = new Objetàvendre("Sceptre", 33, 200, 12, true);
shopArray.push(sceptre);
const baguetteMagique = new Objetàvendre("Baguette Magique", 5, 100, 5, true);
shopArray.push(baguetteMagique);
const bouclierenbois = new Objetàvendre("Bouclier en Bois", -75, 0, 5, true);
shopArray.push(bouclierenbois);
const bouclierenfer = new Objetàvendre("Bouclier en Fer", -150, -30, 10, true);
shopArray.push(bouclierenfer);
const boucliermiroir = new Objetàvendre("Bouclier Miroir", -150, -3000, 20, true);
shopArray.push(boucliermiroir);
const bouclierdiamant = new Objetàvendre("Bouclier en Diamant", -500, -150, 25, true);
shopArray.push(bouclierdiamant);
const tesseract = new Objetàvendre("Tesseract", 1000, 1000, 56, false);
shopArray.push(tesseract);
console.log(shopArray);

function Shop(items)
{
    this.items=items;
    this.displayItems = function()
    {
        console.log("display before");
        for(let i=0; i < this.items.length ; i++)
        {
            console.log("display "+ i);
            this.items[i].display();
            console.log("display "+ i);
            
        }
    }
    this.displayAvailableItems = function()
    {
        for(let i=0;i<this.items.length;i++)
        {
            if(this.items[i].available)
            {
                this.items[i].display();
            }
        }
    }
    this.displayItemsForLevel = function(level)
    {
        for(let i=0;i<this.items.length;i++)
        {
            if(this.items[i].minLevel <= level)
            {
                this.items[i].display();
            }
        }
    }
}
let shop = new Shop(shopArray);
console.log("Afficher tous les objets du magasin");
shop.displayItems();
console.log("Afficher tous les objets du magasin disponibles");
shop.displayAvailableItems();
console.log("Afficher tous les objets du magasin dont le niveau est au moins 10");
shop.displayItemsForLevel(10);
console.log("Afficher tous les objets du magasin dont le niveau est au moins 7");
shop.displayItemsForLevel(7);

function MainCharacter(name, level, life, weapon) 
{

    this.name=name;
    this.level=level;
    this.life=life;
    this.weapon=weapon;
    this.attack=function()
    {
        const messageRetour=""+this.name+" attaque avec l'arme "+ this.weapon.name +", les dégâts sont de "+(this.level*this.weapon.damage) + "";
        return messageRetour;
    }
    this.display = function()
    {
        console.log("Name : "+this.name+"\nLevel : "+this.level+"\nlife: "+this.life+"\nWeapon: "+this.weapon.name);
    }
}

function Weapon(name, damage)
{
    this.name =name;
    this.damage=damage;
}
const epeeWyoming=new Weapon("Epee du Wyoming", 8);
const mainCharacter= new MainCharacter("Hector", 15, 100, epeeWyoming);
alert(mainCharacter.attack());
const excaliburEpeeMagique=new Weapon("Excalibur l'épée magique", 20);
const mainCharacter2= new MainCharacter("Minus", 3, 15, excaliburEpeeMagique);
alert(mainCharacter2.attack());

function BattleCharacter(name, level, life, weapon)
{
    this.name=name;
    this.level=level;
    this.life=life;
    this.weapon=weapon;
    this.attack=function(opponentCharacter)
    {
        const damage = this.level * this.weapon.damage;
        console.log(this.name+" attaque "+opponentCharacter.name);
        console.log("avec l'arme "+this.weapon.name);
        console.log("et lui inflige "+damage+ " de dégats");
        opponentCharacter.receiveDamage(damage);
        console.log(opponentCharacter.name + " a maintenant " +opponentCharacter.life+ " de vie");
    }
    this.display = function()
    {
        console.log("Name : "+this.name+"\nLevel : "+this.level+"\nlife: "+this.life+"\nWeapon: "+this.weapon.name);
    }
    this.receiveDamage=function(damage)
    {
        if(this.life <=0)
        {
            console.log(this.name+" est déjà mort !\n Laissez le tranquille !")
        }
        else
        {
            this.life -= damage;
            if(this.life <= 0)
            {   
                console.log(this.name+" est mort !\n Repose en paix !");
            }
        }     
    }
}
const batonMagique =new Weapon("Baton Magique", 50);
const mainCharacter3= new BattleCharacter("Son Goku", 5, 500, batonMagique);
const zangetsu =new Weapon("Zangetsu", 15);
const mainCharacter4= new BattleCharacter("Ichigo Kurosaki", 7, 458, zangetsu);
const gantInfini =new Weapon("Gant de l'Infini", 100000);
const mainCharacter5= new BattleCharacter("Thanos", 36, 3000, gantInfini);
const sabrebanal =new Weapon("Sabre Banal", 5);
const opponentCharacter = new BattleCharacter("Zaraki Kampachi", 99, 3500, sabrebanal);

mainCharacter3.attack(opponentCharacter);
mainCharacter4.attack(opponentCharacter);
mainCharacter3.attack(opponentCharacter);
mainCharacter4.attack(opponentCharacter);
mainCharacter5.attack(opponentCharacter);//thanos too strong : opponent is killed instantly
mainCharacter4.attack(opponentCharacter);
mainCharacter3.attack(opponentCharacter);
mainCharacter4.attack(opponentCharacter);
mainCharacter3.attack(opponentCharacter);
mainCharacter4.attack(opponentCharacter);

alert("FIN");
//*/
/*//---------->>>Exercices Juste Prix<<<--------------\\
let message="";
let counter=0;
const min=20;
const max=80;

const getRandomMinMax = function(minimum,maximum)
{
    if(minimum > maximum)
    {
        return 0;
    }
    const ecart = maximum-minimum;
    const nombreFlottantEntreMinetMax = Math.random()*ecart + minimum;
    const nombreEntierEntreMinetMax = Math.round(nombreFlottantEntreMinetMax);
    return nombreEntierEntreMinetMax;
}

const rightPrice=getRandomMinMax(min,max);

const checkPrice = function(guessedPrice)
{
    counter++;
    if(rightPrice > guessedPrice)
    {
        return "C'est plus !";
    }
    else if(rightPrice < guessedPrice)
    {
        return "C'est moins !";
    }
    else
    {
        return "C'est juste tu as trouvé en "+counter+" coups !";
    }

}
do 
{
    let guessedPrice = promptInteger("Entrez un prix !");
    message=checkPrice(guessedPrice);
    alert(message);
}while(message == "C'est plus !" || message == "C'est moins !" );


alert("FIN");
//*/
/*//---------->>>Exercices DOM 1<<<--------------\\
const bodyContainer = document.getElementsByTagName("BODY");
console.log("bodyContainer"); // HTML Collection of Nodes
console.log(bodyContainer); // HTML Collection of Nodes
console.log(bodyContainer.length); // length of the collection
console.log("élement 0 de bodyContainer"); 
const body = bodyContainer[0]; //first element of the collection
console.log(body); // HTMLBodyElement
console.log("liste d'enfants de élement 0 de bodyContainer"); 
console.log(body.childNodes); // list of Nodes
console.log(body.childNodes.length); // length of the list of Nodes
for(let i=0;i<body.childNodes.length;i++)
{
    console.log("enfant numéro "+i); 
    console.log(body.childNodes[i]);
    console.log("les enfants de l'enfant numéro "+i); 
    console.log(body.childNodes[i].childNodes);
}
console.log("liste de classes de élement 0 de bodyContainer"); 
const classBody = body.classList; //list of classes of body element
console.log(classBody); //DOMTokenList 
console.log(classBody.length);//length of DOMTokenList 
console.log("première classe de élement 0 de bodyContainer"); 
const firstClass = classBody[0];
console.log(firstClass);
alert("Attention les yeux au changement du body");
classBody.remove("bg-aqua");
alert("Classe bg aqua Retirée T_T");
classBody.add("bg-olive");
alert("Classe bg olive Ajoutée :D");

const fp = document.getElementById("first-paragraph"); //id is attached to only one element
const fpClassList = fp.classList;
alert("Attention les yeux au changement du premier paragraphe");
fpClassList.remove("bg-lime");
alert("Classe bg lime Retirée T_T");
fpClassList.remove("gray");
alert("Classe gray Retirée T_T");
fpClassList.add("aqua");
alert("Classe aqua Ajoutée :D");

const bgsilverContainer= document.getElementsByClassName("bg-silver");
alert("Attention l'argent taille :"+bgsilverContainer.length);
for (let i=0; i<bgsilverContainer.length; i++)
{
    bgsilverContainer[i].classList.add("bg-teal");
    alert("Bonjour tealc :D "+bgsilverContainer[i]+" "+i);
}
for (let i=0; i<bgsilverContainer.length; i++)
{
    bgsilverContainer[i].classList.remove("bg-silver");
    alert("Adieu silver T_T "+bgsilverContainer[i]+" "+i);
}

const blockQContainer = document.getElementsByTagName("blockquote");
alert("Attention les blockquotes taille :"+blockQContainer.length);
for (let i=0; i<blockQContainer.length; i++)
{
    blockQContainer[i].classList.add("bg-white");
    alert("Bonjour blockquote blanc "+blockQContainer[i]+" "+i);
}
alert("FIN partie 1");
//*/
/*//---------->>>Exercices DOM 2<<<--------------\\
const elementMyTable = document.querySelector("#my-table");
alert("Attention le pourpre");
elementMyTable.classList.add("bg-purple");
alert("Bonjour le pourpre");
const paragraphList =document.querySelectorAll(".container > p");
for (let i=0; i<paragraphList.length; i++)
{
    alert("Attention les paragraphes de container");
    paragraphList[0].classList.add("shadow");
    alert("Bonjour l'ombre");
}

//sélectionner tous les éléments qui ont la classe 'bg-silver'

alert("FIN partie 2");
//*/
/*//---------->>>Exercices DOM 3<<<--------------\\
const preList = document.getElementsByTagName("PRE");
alert("attention les pre !");
for(let i=0;i<preList.length;i++)
{
    
    preList[i].style.color="green";
    alert("En vert ! "+ i);
    preList[i].style.backgroundColor="yellow";
    alert("En jaune ! "+ i);
    preList[i].style["border-top"]="3px solid red";
    alert("Un bord en haut! "+ i);
    preList[i].style["border-bottom"]="3px solid red";
    alert("Un bord en bas! "+ i);
}
const h3Container = document.getElementsByTagName("H3");
const firsth3=h3Container[0];
firsth3.innerHTML="<em>Italic title ! yeah !</em>";

const h2Container = document.getElementsByTagName("H2");
const firsth2=h2Container[0];
firsth2.innerHTML="<strong>HTML doens't work !</strong>";
console.log(""+h3Container+"\n"+h2Container+"\n"+firsth3+"\n"+firsth2+"\n"+firsth3.innerHTML+"\n"+firsth2.innerHTML)




alert("FIN partie 3");
//*/
/*//---------->>>Exercices DOM 4<<<--------------\\
const ulContainer = document.getElementsByTagName("UL");
const firstUl=ulContainer[0];
const newLi = document.createElement("LI");
//doesn't work because it doesn't recreate the html tags like <a> inside the li
//const textNode = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com'>Google</a>");
//newLi.appendChild(textNode);
//doesn't work because it doesn't recreate the html tags like <a> inside the li
//newLi.innerText="Mon meilleur ami est <a href='http://www.google.com'>Google</a>"
console.log(newLi.childNodes);
newLi.innerHTML="Mon meilleur ami est <a href='http://www.google.com'>Google</a>"
console.log(newLi.childNodes);
firstUl.appendChild(newLi);
const thatLink = firstUl.querySelector("a");
thatLink.style.color="red"
alert("FIN partie 4");
//*/
/*//---------->>>Exercices DOM 5<<<--------------\\




//sélectionner le premier élément 'ol'
const firstOL = document.getElementsByTagName("OL")[0];

//faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children
for(let i=0;i<firstOL.children.length;i++)
{
    //supprimer chaque enfant de 'ol' grâce à removeChild()
    const child = firstOL.children[i];
    firstOL.removeChild(child);
}

//déclare dans un tableau les valuers suivantes : ["Silent Teacher","Code Monkey", "CodeCombat"]
const tableauEtrange=["Silent Teacher","Code Monkey", "CodeCombat"];
//faire une boucle sur tous les enfants du tableau précédement crée
for(let i=0;i<tableauEtrange.length;i++)
{
    //pour chaque valeur du tableau crée un élément 'li' crâce à document.createElement()
    const newLi = document.createElement("LI");
    //ajouter à chaque 'li' la valeur courrante tableau
    newLi.innerHTML=tableauEtrange[i];
    //ensuite ajouter chaque 'li' à l'élément 'ol' précédement sélectionné
    firstOL.appendChild(newLi);
}

alert("FIN partie 5");
//*/

                    /* //EXERCICES AJAX\\
const req = new XMLHttpRequest();
req.onload= function()
{
    const tableauPersonnes = JSON.parse(this.responseText);
    for(let i=0;i<tableauPersonnes.length;i++)
    {
        console.log("Voici l'Objet "+ i);
        console.log(tableauPersonnes[i]);
    }   
    for(let i=0;i<tableauPersonnes.length;i++)
    {
        const randomNumber = Math.round(Math.random()*1000) ;
        tableauPersonnes[i].score = randomNumber;
        console.log("Voici l'Objet "+ i +" modifié");
        console.log(tableauPersonnes[i]);
    }   
    function compareScore(objetA,objetB)
    {
        return objetA.score - objetB.score;
    }
    tableauPersonnes.sort(compareScore);
    for(let i=0;i<tableauPersonnes.length;i++)
    {
        console.log("Voici l'Objet "+ i +" trié");
        console.log(tableauPersonnes[i]);
    }   
    const categorie1=[];
    const categorie2=[];
    const categorie3=[];
    const categoriedesoublies=[];
    function classer(objet)
    {
        if(objet.score < 500)
        {
            categorie1.push(objet);
        }
        else if(objet.score > 500 && objet.score < 750)
        {
            categorie2.push(objet);
        }
        else if(objet.score > 750)
        {
            categorie3.push(objet);
        }
        else{
            categoriedesoublies.push(objet);
        }
    }
    tableauPersonnes.forEach(classer);
    for(let i=0;i<categorie1.length;i++)
    {
        console.log("Voici l'Objet "+ i +" de la catégorie 1 triée");
        console.log(categorie1[i]);
    }  
    for(let i=0;i<categorie2.length;i++)
    {
        console.log("Voici l'Objet "+ i +" de la catégorie 2 triée");
        console.log(categorie2[i]);
    }  
    for(let i=0;i<categorie3.length;i++)
    {
        console.log("Voici l'Objet "+ i +" de la catégorie 3 triée");
        console.log(categorie3[i]);
    } 

    function checkBahrain(objet) 
    {
        return objet.country === "Bahrain";
    }
    const tableauBahrain = tableauPersonnes.filter(checkBahrain);
    console.log("Le nombre de personnes vivant au Bahrain est de "+ tableauBahrain.length);
    console.log(tableauBahrain);
    console.log("Le plus petit score est de " + tableauPersonnes[0].score)
    console.log("Le plus gros score est de " + tableauPersonnes[tableauPersonnes.length - 1].score)
}
req.open("GET","data.json");
//open json on github repository instead
//req.open("GET","https://raw.githubusercontent.com/becodeorg/CRL-Turing-3.11/master/Parcours/04-Javascript/11-AJAX/files/data.json?token=ALFYWWQDH6KAYY43OTU36SC45Y3XO")
req.send();
alert("FIN Ajax");
//*/
            //---------->>>AJAX WEB<<<--------------\\

//XMLHttpRequest.DONE vaut toujours 4 -> peut s'utiliser dans la requ

 //onreadystatechange s'exécute onreadystatechange quand on a reçu le code 200?
// retourne le code de retour du serveur on dirait


const quote = document.querySelector("#quote");
const fonctionStateLudo=(event)=>
{
    if(this.readyState === XMLHttpRequest.DONE)
    {
        if(this.status ===200)
        {
            const citation=this.response;
            console.log(citation)
            const objetCitation=JSON.parse(citation);
            console.log(objetCitation);
            console.log(objetCitation.quote);
            const text = document.createTextNode(objetCitation.quote);
            quote.appendChild(text);
            let cite = document.createElement("cite");
            cite.innerHTML = objetCitation.author;
            cite.appendChild(cite);
            
        }
        else
        {
            console.log("Erreur", this.status);
        }
    }
}

const procedureLudo = () =>
{
    const req = XMLHttpRequest();
    req.onreadystatechange = fonctionStateLudo;
    req.open("GET","https://thatsthespir.it/api");
    req.send();
}

const createADOM = function(tableauObjets)
{
    for(let i = 0; i < tableauObjets.length; i++)
    {
        console.log(tableauObjets[i]);
    }
}
const req = new XMLHttpRequest();
let quotealacon ="NULL";
req.onload= function()
{

    if (this.readyState == 4 && this.status == 200) 
    {
        console.log("chargement réussi");
        quotealacon = JSON.parse(this.responseText);
        let quote = document.querySelector("#quote");
        console.log(quotealacon);
        if(quotealacon.gender =="m")
        {
            quote.innerHTML = "<h1>RANDOM QUOTE</h1><p><b>"+quotealacon.quote+ "</b></p>"
            +"<p>"+"Auteur : "+quotealacon.author + "</p>"
            +"<img src=\""+quotealacon.photo+"\" alt=\"photo du gars\" >"
            +"<p><a href=\""+quotealacon.permalink+"\">Lien vers la citation</a></p>"
            +"<p> Nombre de citations du gars : "+quotealacon.total_quotes+ "</p>" ;
        }
        else if(quotealacon.gender =="f")
        {
            quote.innerHTML = "<h1>RANDOM QUOTE</h1><p><b>"+quotealacon.quote+ "</b></p>"
            +"<p>"+"Auteur : "+quotealacon.author + "</p>"
            +"<img src=\""+quotealacon.photo+"\" alt=\"photo de la dame\" >"
            +"<p><a href=\""+quotealacon.permalink+"\">Lien vers la citation</a></p>"
            +"<p> Nombre de citations de la dame : "+quotealacon.total_quotes+ "</p>" ;
        }
        else
        {
            quote.innerHTML = "<h1>RANDOM QUOTE</h1><p><b>"+quotealacon.quote+ "</b></p>"
            +"<p>"+"Auteur : "+quotealacon.author + "</p>"
            +"<img src=\""+quotealacon.photo+"\" alt=\"photo de l'alien\" >"
            +"<p><a href=\""+quotealacon.permalink+"\">Lien vers la citation</a></p>"
            +"<p> Nombre de citations de l'alien' : "+quotealacon.total_quotes+ "</p>" ;
        }
    }
    else{
        console.log("Même pas foutu de charger un truc correctement")
        console.log("this.ready : "+this.readyState);
        console.log("this.status : "+this.status);

    }
};
    
//ne sert à rien finalement
/*req.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status <= 200) 
    {
        console.log("Changement d'état réussi")
        quotealacon = JSON.parse(this.responseText);
        createADOM(quotealacon);
    }
    else{
        console.log("Même pas foutu de changer d'état newbie")
        console.log("this.ready : "+this.readyState);
        console.log("this.status : "+this.status);
    }
};*/
req.open("GET","https://thatsthespir.it/api", true);
req.send();

alert("FIN Ajax WEB");
//*/
            /*//EXERCICES MOUSE\\

const tableHoverDiv = document.querySelectorAll(".hoverMe");
const resetDiv = document.querySelector(".reset"); 
const disparaitre = function(event) 
{
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
    const insideTarget = event.target;
    const trueTarget = event.currentTarget;
    //trueTarget.style["display"]="none";
    //trueTarget.style["visibility"]="hidden";
    //trueTarget.hidden=true;
    //trueTarget.parentNode.removeChild(event.target);
    //trueTarget.style["width"]=0;
    //trueTarget.style["height"]=0;
    //trueTarget.style["overflow"]="hidden";
    //this.style.opacity = 0;
    //trueTarget.style.opacity=0;
    //insideTarget.parentNode.style.opacity=0;
    insideTarget.parentNode.style["display"]="none";
}
const reapparaitre = function() 
{
    //const tableHoverDiv = document.querySelectorAll(".hoverMe");
    for(let i=0 ; i<tableHoverDiv.length ; i++)
    {
        console.log(tableHoverDiv[i] + "  " + i);
        console.log(tableHoverDiv[i].style + "  " + i);
        console.log(tableHoverDiv[i].style.opacity + "  " + i);

        tableHoverDiv[i].style["display"]="block";
        //tableHoverDiv[i].style["visibility"]="visible";
        //tableHoverDiv[i].hidden=false;
        //resetDiv.parentNode.appendChild(tableHoverDiv[i]);
        //tableHoverDiv[i].style["width"]="100%";
        //event.target.style["height"]="500px";
        //tableHoverDiv[i].style["overflow"]="visible";
        //tableHoverDiv[i].style.opacity=1;
        console.log(tableHoverDiv[i].style.opacity + "  " + i);

        
    }
}
console.log(tableHoverDiv);
for(let i=0; i < tableHoverDiv.length ; i++)
{
    console.log(tableHoverDiv[i]);
    tableHoverDiv[i].addEventListener("mouseover", disparaitre);
}
resetDiv.addEventListener("click",reapparaitre);

const axeX = document.querySelector(".axe-x");
const axeY = document.querySelector(".axe-y");
const getPosition = function(event)
{
    axeX.innerHTML = "Poistion X : "+event.x;
    axeY.innerHTML = "Position Y : "+event.y;
}

document.addEventListener("mousemove", getPosition);

alert("FIN MOUSE");
//*/
        /*//EXERCICES KEYBOARD\\
const changeColorKeyPress=function(event)
{
    const characterDiv = document.querySelector(".character");
    const keyNum=event.which || event.keyCode;
    console.log("which : "+ event.which + " keycode : "+ event.keyCode + " charCode : " + event.charCode);
    console.log(event.keyCode);
    let color="white";
    switch (keyNum) 
    {
        case 192:
            color="green";
            break;
        case 48:
            color="green";
            break;
        case 38:
            color="red";
            break;
        case 49:
            color="red";
            break;
        case 201:
            color="blue";
            break;
        case 50:
            color="blue";
            break;
        case 34:
            color="yellow";
            break;
        case 51:
            color="yellow";
            break;
        case 39:
            color="pink";
            break;
        case 52:
            color="pink";
            break;
        case 40:
            color="purple";
            break;
        case 53:
            color="purple";
            break;
        case 167:
            color="silver";
            break;
        case 54:
            color="silver";
            break;
        case 200:
            color="goldenrod";
            break;
        case 55:
            color="goldenrod";
            break;
        case 33:
            color="brown";
            break;
        case 56:
            color="brown";
            break;
        case 199:
            color="orange";
            break;
        case 57:
            color="orange";
            break;
        default:
            color="white";
    }
    console.log(keyNum);
    characterDiv.style["background-color"]=color;
}

const addHightlightKeyDown = function(event)
{
    const upDiv = document.querySelector("#up");
    const downDiv = document.querySelector("#down");
    const leftDiv = document.querySelector("#left");
    const rightDiv = document.querySelector("#right");
    const keyNum = event.which || event.keyCode;
    console.log(upDiv.classList+ " "+ keyNum);
    switch (keyNum) {
        case 37:
            leftDiv.classList.add("highlight");
            break;
        case 38:
            upDiv.classList.add("highlight");
            break;
        case 39:
            rightDiv.classList.add("highlight");
            break;
        case 40:
            downDiv.classList.add("highlight");
            break;
        default:
            break;
    }

}

const removeHightlightKeyUp = function(event)
{
    const upDiv = document.querySelector("#up");
    const downDiv = document.querySelector("#down");
    const leftDiv = document.querySelector("#left");
    const rightDiv = document.querySelector("#right");
    const keyNum = event.which || event.keyCode;
    console.log(upDiv.classList+ " "+ keyNum);
    switch (keyNum) {
        case 37:
            leftDiv.classList.remove("highlight");
            break;
        case 38:
            upDiv.classList.remove("highlight");
            break;
        case 39:
            rightDiv.classList.remove("highlight");
            break;
        case 40:
            downDiv.classList.remove("highlight");
            break;
        default:
            break;
    }

}


//const characterDiv = document.querySelector(".character");
document.addEventListener("keypress",changeColorKeyPress);
document.addEventListener("keydown",addHightlightKeyDown);
document.addEventListener("keyup",removeHightlightKeyUp);
alert("FIN KEYBOARD");
//*/

/*
0 192 tests-javascripts.js:997:13
1 38 tests-javascripts.js:997:13
2 201 tests-javascripts.js:997:13
3 34 tests-javascripts.js:997:13
4 39 tests-javascripts.js:997:13
5 40 tests-javascripts.js:997:13
6 167 tests-javascripts.js:997:13
7 200 tests-javascripts.js:997:13
8 33 tests-javascripts.js:997:13
9 199 tests-javascripts.js:997:13
48 tests-javascripts.js:997:13
49 tests-javascripts.js:997:13
50 tests-javascripts.js:997:13
51 tests-javascripts.js:997:13
52 tests-javascripts.js:997:13
53 tests-javascripts.js:997:13
54 tests-javascripts.js:997:13
55 tests-javascripts.js:997:13
56 tests-javascripts.js:997:13
57 tests-javascripts.js:997:13


*/ 