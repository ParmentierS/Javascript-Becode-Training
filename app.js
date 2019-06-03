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
alert("suppression des li");

const nombreEnfants = firstOL.children.length;
//faire une boucle sur tous les enfants de ce dernier grâce à sa propriété children

for(let i=0;i<nombreEnfants;i++)
{
    //supprimer chaque enfant de 'ol' grâce à removeChild()
    const child = firstOL.children[0];

    alert("suppression de "+i + " " +child);
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

let a =[];
let b=a;
a.push(5);
b.push(3);
b[4]=8;
a[6]=22;
b.push(33);
b.pop();
b.pop();
console.log(a);
console.log(b);

