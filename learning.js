// alert('This is the dev page. Where I made some tests. So it is not organized and tied up.')



console.log('Hello World'); /*on va dans la console et dans la console on va voir la fonctionnalité qui s'appelle log.*/
/*norme : on utilise des single quotes*/
console.log(42);
console.log('42');
//alert('fichier javascript')
//alert(45)

/*    IMPLEMENTATION JAVASCRIPT DANS HTML
3 manières d'importer du css:
  - fichier a part (recommandé)-> quand on link une page js à une page html (depuis le fichier html) on peut le mettre n'importe ou.
  - dans head (a la fin)
  - dans body
c'est mieux (pour la performance et pour la clareté de la lecture du code de mettre tout le code javascript dans la meme balilse <script>)
exécuté dans l'ordre (head d'abord puis body...)
lier un fichier .js:      <script src="index.js"></script>
*/

//      VARIABLES
var x = 25;
var X = 100;
console.log(x, X)
var prenom = "Pierre", nom = "Giraud", dpt = 83;
var age;  //pas bien: vaut mieux lui attribuer une valeur nulle
age = 26
var ville='';
ville='Toulon';
var homme = true;
console.log(homme, age, ville, prenom, nom, dpt)

//TYPE DE VARIABLES
var ville2 = "j'habite a toulon";
var dpt2 = 'je vis dans le "83"'
console.log(ville2,"et",dpt2);

var n = null;
var u = undefined;
var nn = NaN; //(not a number)
console.log(typeof(ville2)+"\n"+
  typeof(n)+"\n"+
  typeof(u)+"\n"+
  typeof(nn)+"\n");

//CONDITIONS
var x = 7, y = 14;
var vrai = x<y;
var faux = 14 <= 7;
var egalval = 4 == "4"; //on teste si 4 est égal en valeur simplement à la chaine de caractère "4"
var egalvaltype = 4 === "4";  //on teste si 4 est égal en valeur et en type à la chaine de caractère "4" (donc flase puisque la valeur est la même mais pas le type.)
var difval = 4 != "4";

var heure = 15;
if (heure <= 18 == true) {    //si le test heure inférieur à 18 est vrai alors on affiche bonjour
  //alert('bonjour')
  console.log("bonjour");
}
else{
  //alert('Bonsoir')
  console.log("bonsoir");
}

//if, else if, else : si, sinon si, sinon
//on peut insérer autant de else if que l'on veut dans notre condition pour gérer un nombre infini de cas.
heure = Date();
console.log(heure)
if (typeof(heure)=="number"==true) {
  if (heure < 12 == true) {
    console.log("c'est le matin");
    //alert("c'est le matin");
  }
  else if (heure == 12 == true) {
    console.log("c'est le midi");
    //alert("c'est le midi");
  }
  else if (heure <= 18 == true) {
    console.log("c'est l'après midi");
    //alert("c'est l'après midi");
  }
  else {    //dans tous les autres cas (on finit toujours par un else)
    console.log("c'est le soir");
    //alert("c'est le soir");
  }
}
else {
  console.log("mauvais type de valeur");
}

x = 1;
y = 2;
if (x == 1 && y == 2) {   //&& = ET
  console.log("c'est bon lol");
}
if (x == 1 || y == 2) {   //|| = OU
  console.log("c'est bon aussi lol")
}
if (!(x==1 ==true)) {     //dans le cas contraire que x = 1
  console.log("bah vouala koua");
}

//structure ternaire
heure = 18;
var bon =""
bon = (heure <= 18) ? "Bonjour" : "Bonsoir";    //la condition est entre parenthèses. si la condition est vérifiée on attribue à bon la première valeur apres le ?. sinon, on lui attribue la valeur d'après les :.
console.log("ternaire: "+bon);
// c'est mieux de stocker le resultat de la ternaire dans une variable car on peut s'en reservir plus tard, meme si on est pas obliger de l'affecter.

//switch
//dans des conditions on va pt vouloir dissocier de nombreux cas afin de traiter chacun d'entre eux différemment.
//switch: semblable à une condition dans laquelle on va pouvoir générer autant d'issues que l'on souhaite.(les issues sont appelées des 'cases')
// le switch ne peut tester que l'égalité des valeures et non pas de l'inégalité
heure = 7;
switch (heure) {
  case 8:
    console.log("il est 8H");
    break;  //break sert à ne pas exécuter les cas suivants (je sors du switch)
  case 9:
    console.log("il est 9H");
    break;
  case 10:
    console.log("il est 10H");
    break;
  case 11:
    console.log("il est 11H");
    break;
  case 12:
    console.log("il est 12H");
    break;
  default:  //comme un else: traite tous les autres cas
    console.log("rien à afficher pour cette valeur");
}

//BLOUCLES
while (heure<20) {    //teste au debut: donc pas forcément réalisée
  console.log("tu peux encore travailler !"+heure);
  heure ++;
}

do {    //teste a la fin : donc au moins réalisée une fois
  console.log("tu peux encore travailler");
  heure ++;
} while (heure <20);

for (var i = 0; i < 10; i++) {  //on connait le nombre de répétitions (la plus utilisée, la plus lisible)
  console.log("i contient la valeur : "+i);
}

//FONCTIONS
function multiplication(x, y){
  //console.log(x*y);
  return x*y;
}

console.log(multiplication(5, 10));
var resultat = multiplication(2, 5);
console.log(resultat);

//OBJECTS
/*
en js casiment tout est objet. donc les chaines de caractères, les nombres et booléens peuvent être soit des objets soit des valeurs primitives qui seront traitées comme des objets.Les fonctions sont des objets, les tableaux et les expressions régulières aussi
propriétés : constituées d'un nom et d'une valeur séparés par :. (couleur, age, taille...)
methodes: fonctions qui vont être stockées dans des propriétés.
*/
var moi = {   //objet
  prenom: "Pierre",
  nom: "Giraud",
  age: 25,

  identite: function(){ //on a assigné à la propriété identité non pas une valeur mais une fonctin.(une fonction qui n'a pas de nom: c'est une fonction "anonyme")
    return 'Prénom: ' + this.prenom +
            '\nNom: ' + this.nom +
            '\nAge: ' + this.age;

  }
}
console.log(moi.identite())
