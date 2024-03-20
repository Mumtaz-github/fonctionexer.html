/* 
 exercise les variables 2

    Créer un script qui demande successivement à l'utilisateur son nom puis son prénom. 
    La page affichera les informations sur l'utilisateur via une "alert()"
var nom
var prenom
nom = prompt ("Saisissez votre nom")
prenom = prompt ("Saisissez votre prenom")
alert(nom)
alert(prenom)*/
 
/*Ecrire un programme qui calcule le produit de deux nombres entrés par l'utilisateur et affiche le résultat.!!!
var x ;
var y ;

x = prompt ("saisissez result");
y = prompt ("saisissez numbre")
 alert(x*y)
 */

 /*Ecrire un programme qui convertit des degrés Celsius en degrés Fahrenheit en utilisant la formule suivante :
let c = 50;
let f = 0 ;
c = prompt ("saissiez degrès")
 alert (F = (c *(9/5)) + 32);
*/

//exercise les opérateurs

/* var a,b,c,d
   a = 100
   b = 100
   c =1.00
   d = true


   alert("Ceci est une chaînes de caractère:"+a);   

    a = b--;                         //appliquez à b l'opérateur de décrémentation
   console.log(b);
   
   alert(c+a);                      // ajoutez à c le valeur de a

   d=!d                             // inversez la valeur de d
   console.log(d)
   */
  




// 5. Les Conditions 

// let a = prompt("entrer un nombre ");                        Exercise 1 Parité

// if  (a%2 == 0) {
//    alert("ce nombre et pair")
// } else {
//    alert ("ce nombre est impair")
// }

// let naissance =prompt("Entre date de naissance");            Exercise 2 Age
//  let date = 2024;
 
//  age =  date -naissance; 

// if (age < 18) {
  
//    alert("tu as"+age+"ans donc tu est mineur")
// }else {
//    alert("tu as" +age+"ans donc tu est majeur")
// }

// let nombre01 = Number(prompt("Entre votre nombre01"));        Exercice 3 Calculette
// let operator = prompt("choissisez entre /,*,-, ou +")
// let nombre02 = Number(prompt("Entre vote nombre02"));

// if (operator == "+") {
//    console.log(nombre01+nombre02)
// }
//  else if (operator == "-") {
//    document.write(nombre01-nombre02)
// }
//  else if (operator == "*") {
//    document.write(nombre01 +"*"+nombre02+"="+nombre01*nombre02)
// }
//  else if (operator == "/" && nombre02!=0) {
//    document.write(nombre01/nombre02)
// }else {
//    alert ('operateur érroné ou on ne peut pas diviser par 0')
// }

/*
nb = prompt("entrer le nb")                      //example de bucles
console.log("Table de multiplication par"+nb);
console.log("=============================");


for (i=0; i<=10; i++)
{
    resultat = nb * i;

    document.write(nb +"*"+i+" = "+resultat );
    console.log(nb +"*"+i+" = "+resultat );
}

// instructions exécutées après le for (i vaut 10)
console.log("fin de la boucle");
*/



//   let prenom = [];                           Exercise 1  Les Boucles
//   for(let i =0;i<10;i++){
//       prenom [i] = prompt("Saisissez le prénom N°"+i+" ou Clic sur Annuler pour arrêter le saisie");
//       if (prenom[i] == ""){
//          break
//       }
//       console.log("prenom");
//   }
// alert("Your name is " + prenom +"."+prenom.length);

//  
                                              

                                                    //Exercice 2 Entier inférieurs à N
/*
// var N = 0;
// var  int = prompt("veuillez saisissez le nombre");

// for (n = 10;  int >= 0; int--) {
//     alert(int);
//     console.log(n);
//     n - int;
// }

*/

function sum()
{
    var a,b,c,d,p,s
    a=parseInt(entry.t1.value);
    b=parseInt(entry.t2.value);
    c=parseInt(entry.t3.value);
    d=parseInt(entry.t4.value);
    s=(a+b+c+d)
    p=(a+b+c+d)/5
  entry.t3.value=s;
  entry.t3.value=p;

}
