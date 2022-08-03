// // les fonctions javaScripte 28-07-2022 Baptiste 🐅🐘 
// // explication:

// // return paramettre:
// // applé notre fonction
// function helloWorld(){
//     console.log("hello");
//     console.log("word"); 
//     }
//     // première fois
//     helloWorld()
//     // deux fois
//     helloWorld()
//     //  troisième fois
//     helloWorld()
    
//     // appelé notre fonction lui donner un autre nom
//     function helloWorld(name){ 
//         // helloword()==>paramettre ca rend ta fonction dynamique
//         console.log("hello" + name);
//         }
    
//     //  on peut dire bonjour dynamiquement ==>
//         helloWorld("adil");
    
//     // Déclarer une foncction ==> Paramettre
//     // Quand tu appels ta fonction ==> Argument
//     //----methode de base-------
//     //---1-----// un va charger notre fonction automatiquement ----------------------------------------------------------------------------------------------------------------------------
    
//     // nouvele fonction 
//     //deux paramettre:
    
//     // ici on declar le fonction
//     function Sum(a, b){
//         console.log(a + b);
    
//         return 
//     }
    
//     // on lui donne un nom pour la réutiliser
//     // on lui donne des paramettre utilisé par la fonction
//     function Sum(a, b){
//     let c = a +b 
    
//     // retourne une valeu pour pouvoir la réutiliser
//         return c
//     }
//     // ici on appelle la fonction grace a son nom
//     // on lui passe les arguments necessaire 
//     // et on ounlie pas de capter le "return" de la fonction dans une variable (ici "somme")
//     //
    
//     // comme il arrive pas a recupré comme ca il faut appelé la fonction
//     // comment return : en le stoquant dans une variable
    
//     // quand tu appel la fonction tu peux mettre des calcules 
//     let somme = sum (4, 9);
    
//     console.log(somme);
//     // c pas diso en dehors de la function pourquoi ? car on la definit dans la fonction
//     // indexOf
//     let fruits = ["pomme", "poire"]
//     let index = fruits.indexOf("pommes")
//     // il va la stoké dans index.
//     console.log(index);
//     // indexof si il trouve pas il renvoye -1
    
//     // fin ----------------------------
//     //---expression fonction------
//     ///--2----// va charger notre fonction  seulement si declare la fonction ---------------------------------------
//     // plusieur manière de declarer des fonction 
    
//     function hello() {
//         console.log("say hello");
//     }
    
//     // on delare une fonction on va stoquer une variable dans un fonction:
//     const hello = function hello() {
//         console.log("say hello");
//     }
    
//     hello()
//     // pour applé notre fonction pas oublié les paranthèse 
//     // une fonction tu peux pas la re definir
//     // on eut la reassiner car ca se fait pas.
    
//     // synthax diffrance fonction de bas expression fonction 
    
//     // -----------------3. fonction fleché --------------------------------------------
//     // on va mettre une fleche 
//     const hello = () => {
//         console.log("say hello");
//     }
    
//     // un seule paramettre pas obliger de mettre parenthèse 
//     const hello = name => {
//         console.log("say hello" + name);
//     }
    
//     //function console log element 
//     // une fonction dans une fonction (fonction dans un paramettre)
//     fruits.forEach(element) => {
//         console.log(element);
//     }
//     hello();
    
//     // synthax: 
//     const hello = (name) => {
//     return("say hello" + name);
//     } 
//     // autre synthax: 
    
//     const hello = (name) => "say hello" + name
//     // dernier precision on va utilisé la fonction fleché plus recent ou les expression fonction max les deux dernière 
    
//     // ²
//     // Fonctions Partie 3
//     // [16:36]
//     // // Créer un tableau [codingSchoolX] vide.
//     // // Créer une fonction qui permet d'ajouter quelqu'un au tableau
//     // // Créer une fonction qui permet de retirer quelqu'un au tableau
//     // // Avec la console reproduisez les entrées / sorties de la classe
//     // let table = [];
//     // let tabl2 =["amandine","quentin","walid","hugo","cyril"]
    
//     // function table(p){
//     //     table.push(tabl2)
//     //     tabl2.shift(table)
//     // }
//     // console.log(tableaux);
    
//     // Correction 2. EXO2 
//     // // Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
//     // // Qui répond "Le num x est divisible par 2 x:2 = z"
//     // // Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
    
//     let chiffre = +prompt("choisi un chiffre !")
//     const divpar2 = (nbr)=>{
//         switch(nbr%2){
//             case 0:
//                 alert("Le num est divisble par 2" + nbr + ":2=" + nbr/2);
//             case 1:
//                 alert("ce" + nbr + "n'est pas divisible par 2")
//         }
//     }
//     divpar2(chiffre)
    
    
//     les objets :
//     //  Baptiste 🐅🐘 -- les objets :
//     // // rassemblé plusieurs caractéristique
//     playernom = "player"
//     playerPv = 30
//     playerAtk =10
    
//     // monstreNom = "monstre1"
//     // pv = 20
//     // // rasseblé des infos au seins d'une meme structure 
//     // // crée deux boite:
//     // // boite player
//     nom 
//     pv 
//     atk 
//     // boite monstre
//     nom 
//     pv 
    
//     // il veule le meme nom crée des objets({})
//     // exemple 
//     // crée à player 3 attribue 
//     let player = {
//     nom: "player"
//     pv: 30;
//     atk: 20
//     sayHello: function(toSomone){
//         console.log("hi ${toSomone}");
//     }
//     };
//     console.log(player); 
    
//     player.sayHello("nom")
//     // crée un monstre
//     let monstre = {
//         nom: "monstre"
//         pv: 20
//         atk: 10
//     }
    
//     player.nom
//     monstre.nom
    
//     //acceder au attribue
//     console.log(player.pv);
//     //accder au pv du player
//     // += c'est je prend player pv je lui dit que mon player = nouveau truc  
//     player.pv +=5
//     player.pv = player.pv +5
    
//     // attribue 
//     fruits = ["pommes", "poire"]
//     fruits.length()
//     // length() est un attribue 
    
//     // les methodes:
//     // comment apliquer une methode ? 
    
//     //Math.random() a plsieur methode 
    
//     // appeler ca methode :
//     player.sayHello();
    
//     //'est une methode et aussi une function 
//     iMonreste: function(){
//     console.log("il me reste ${this.pv}:pv");
//     }
//     Baptiste 🐅🐘 — Aujourd’hui à 11:29
//     // let playerNom = "player"
//         // let playerPv = 30
//         // let playerAtk = 10
    
//         // let monstr1Nom = "monstre1"
//         // pv = 20;
    
    
//         //         // boite player                       // boite monstre
//         //             - nom                               - nom
//         //             - pv                                - pv
//         //             - atk
    
    
//         // On cree player
//         let player = {
//             // ici on definit des attributs
//             nom: "player",
//             pv: 30,
//             atk: 10,
    
//             // ici on definit des methodes
//             sayHello: function(toSomeone) {
//                 console.log(`Hi ${toSomeone}`);
//             },
    
//             // because of flemme
//             ilMeReste() {
//                 console.log(`il me reste ${this.pv}pv`);
//             },
    
//             // methode avec une fonction flechee
//             pcqFleche: () => {
//                 console.log(`les fleches c cool`);
//             },
//         };
    
    
//         // On cree player2
//         let player2 = {
//             nom: "kevin",
//             pv: 30,
//             atk: 10,
    
//             sayHello: function(toSomeone) {
//                 console.log(`Hi ${toSomeone} i'm ${this.nom}`);
//             }
//         };
    
    
//         // On cree monstre
//         let monstre = {
//             nom: "monstre",
//             pv: 20,
//             atk: 10,
    
//             sayHello: function() {
//                 console.log("I will eat you");
//             }
//         }
    
//         // Atributs
//         console.log(player.pv)
//         player.pv += 5 // player.pv = player.pv + 5
//         player.nomDeFamille = "Jonjon"
//         console.log(player)
    
    
//         // Methodes
//         player.sayHello(player2.nom)
//         player.ilMeReste()
//         player2.sayHello(player.nom)
//     // Baptiste 🐅🐘 — Aujourd’hui à 11:31
//     // 1. Exo 1 
//     //   - Créez un objet avec vos valeurs
//     //   - 'Nom', 'prenom', 'age', 'taille'
//     //   - Affichez votre age via un console.log()
//     // let player1 = {
//     //     nom: "Letellier",
//     //     prenom:"Amandine",
//     //     age: 27,
//     //     taille:"164cm",
//     // };
//     // console.log(player1.age);
//     // // 2. Exo 2 
//     // //   - Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)
//     // let player2 = {
//     //     nom: "ducat",
//     //     prenom:"quentin",
//     //     age: 28,
//     //     taille:"173cm",
//     // };
    
//     // let player3 = {
    
//     // };
//     // player3.nom = player1.nom;
//     // player3.age = player2.age
//     // player3.taille = "40 cm"
//     // console.log(player3);
//     // 3. Exo 3
//     //   - Remplir les propriétées du 3eme personnage
//     //   - Son nom doit valoir le nom du personnage1
//     //   - Son age doit valoir celui du personnage2
//     //   - Et sa taille doit être rempli avec la valeur de votre choix
    
//     // 4. Exo 4
//     //   - Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.
//     // let player = {
//     //     nom : "anthony",
//     //     prenom: "pradier",
//     //     printmyname: function() {
//     //         console.log("Bonjour je m'appelle:" + this.prenom + " " + this.nom);
//     //     }
//     // }
//     // player.printmyname();
    
//     // 5. Exo 5
//     //   - Créer un objet avec un nom et une méthode
//     //   - La méthode de votre objet lance un prompt permetant de changer son age
//     //   - Une alert renvoi "[nom de l'objet] a [age de l'objet] ans"
//     // let player2 = {
//     //     nom: "kyky",
//     //     age: 3,
//     //     ChangeMyAge: function () {
//     //         this.age = +prompt("Changer votre age");
//     //     },
//     //     printMyId: function () {
//     //         alert(`${this.nom} a ${this.age} ans`);
//     //     },
//     // };
    
//     // player2.ChangeMyAge();
//     // player2.printMyId();
    
//     // ## Exo 1
//     // ### Créer deux personnages du nom de François et Sergio
//     // ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
//     // ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.
    
//     let personnage1 = {
//         nom: "francois",
//         panier: ["pain","beurre","jambon"],
//         derober: function myIngredient(){
//             personnage1.panier.push(personnage2.panier[0],[1]);
//             personnage2.panier.shift(personnage1.panier[2]);
//         }
//     }
//     let personnage2 = {
//         nom: "Sergio",
//         panier: ["confiture","fromage", "oeufs"],
//     }
//     console.log(personnage1);
//     personnage1.derober();
//     console.log(personnage1);
//     console.log(personnage2);
//     // ## Exo 
    
//     // ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 
//     let vieille_dame ={
//         age: 99,
//         prenom: "Gorgette",
//         nom:   "ducat",
//         moral: "mal",
//         objet: " une canne",
//     }
//     // ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.
//     let vieil_homme = "Christian"
//     while (parler != veille_dame.moral); {
//         let parler = prompt("comment allez vous ?");
//             if (vieille_dame.moral == parler ){
//             alert("Vous me dérangez et le frappe avec son" + " "+ veille_dame.objet);
//         }
//         else{
//             alert("bonjour" +" " + vieil_homme);
//         }
//     }
//     // ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".
    
//     // ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.
    
//     // # Exercice 4
//     // - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
//     // - Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille (XS, S, M, L, XL)
    
//     // - Vous allez créer 3 instances de Personne et 5 instance de Produit
//     // - Avez la méthode prendre, vous allez mettre les produits dans votre sac
//     // - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
//     // - Dans la classe personne, vous allez créer une méthode acheter qui va faire passer tous les éléments de votre sac en acheté true et vous allez retirer l'argent de que vous avez par rapport au prix du produit
//     // - Vous allez créer une classe appelé Appartement avec un nom, une armoire (tableau vide), et personnes (tableau vide)
//     // - Vous allez créer une instance d'Appartement appelé chambre et vous allez push la parsonne à l'interieur de la chambre
//     // - Tous les éléments qui se trouvent dans le sac vont aller dans l'armoire grâce à une méthode deposer() qui va se trouver dans la personne
//     class Personne{
//         constructor(nom, prenom,age,argent,panier) {
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.argent = argent;
//         this.panier =[];
//         this.prendre =(produits1,produits2,produits3, produits4,produits5)=>{
//             if (this.argent > produits1.prix + produits2.prix + produits3.prix + produits4.prix +produits5.prix) { 
//                 this.panier.push(produits1,produits2, produits5, produits3,produits4)
//                 console.log("vous avez assez d'argent");
//             }
//             else{
//                 console.log("vous avez pas assez d'argent");
//             }        
//         }
//         this.achter = () => {
//             this.panier.forEach(Element=>{
//             Element.acheters=true;
//             this.argent -= Element.prix;
//             console.log(anthony);
//             }) 
//             }
//             this.deposer=()=>{
//                 this.panier.forEach(Element=>{
//                     chambre.armoir.push(Element);
//                 })
//             }
//         }
    
        
    
//     //         this.deposer=(vider)=>
//     //         this.panier=[0,1]
//     }
//     //     this.achter = (produits) => 
//     class Produits{
//         constructor(nom,taille,prix){
//             this.nom=String(nom);
//             this.prix=Number(prix);
//             this.taille=Number(taille);
//             this.acheters=false;
//         }
//     }
//     let cyril= new Personne("cyril","lulu",38, 10)
//     let anthony= new Personne("anthont","lolo",28, 20)
//     let quentin= new Personne("quentin","lala",18,150)
    
//     let poivrons = new Produits("poivrons", "entier", 1);
//     let oignon = new Produits("oignon", "entier", 2);
//     let oeuf = new Produits("oeuf", "entier", 4);
//     let paprika = new Produits("paprika", "moulu", 1);
//     let fromage = new Produits("fromage", "coupé", 1);
    
//     anthony.prendre(oeuf,paprika,fromage,poivrons,oignon);
//     cyril.prendre(oeuf,paprika,fromage,poivrons,oignon);
//     quentin.prendre(oeuf,paprika,fromage,poivrons,oignon);
//     console.log(anthony, cyril, quentin);
//     anthony.achter();
//     class Appartement{
//         constructor(nom,armoir,personne){
//             this.nom = String(nom);
//             this.armoir=[];
//             this.personne=[];
//         }
//     }
//     let chambre= new Appartement("rose", [],[]);
//     chambre.personne.push(cyril);
//     console.log(chambre);
//     cyril.deposer();
//     console.log(chambre);
    
// Elias 🐙🐅🐘 — Aujourd’hui à 14:11
// @Coding School 25 Exercices de recap
// # Conditions
// 1. Verifie si "5" est strictement égale à 5
// console.log("5"== 5);
// 2. Posez une question à l'utilisateur qui doit repondre avec un chiffre, et stockez un nombre aleatoire entre 1 et 20. Si la personne devine au premier coup, vous lui dites comme quoi elle a réussi, sinon vous lui dites qu'elle a raté
// let question = +prompt("choisi un chiffre");
// let chiffre = (Math.floor(Math.random() * 20));

// if (question == chiffre) {
//     alert("félicitation!")
// }
// else {
//     alert("réponse incorrecte")
// }
// console.log(question);
// console.log(chiffre);
// 3. Créez une devinette (Un tableau avec des fruits, et vous devez deviner un fruit qui se trouve dans le tableau, si vous le trouvez, vous avez reussi, sinon vous avez raté)
// let devinette= prompt("devine le fruit dans le tableau")
// let tableau=["pomme","poire", "abricot","fraise","melon","cerises"];

// if(devinette == tableau){
//     alert("félicitation!");
// }
// else {
//     alert("réponse incorrecte");
// }
// console.log(devinette);
// console.log(tableau);
// 4. Posez une question à l'utilisateur sur le jour qu'on se trouve, si il reponde "lundi", "mardi", "mercredi" ou "jeudi" on lui dit "je suis fatigué", et le reste de la semaine "ouaaaaai c'est le weekend"
// let jour = prompt("Quel jour sommes-nous ?")

// switch(jour){
//     case "lundi":
//     case "mardi":
//     case "mercredi":
//     case "jeudi":
//         alert("je suis fatigué")
//         break
//     case "vendredi":
//     case "samedi":
//     case "dimanche":
//         alert("ouaaaaai c'est le weekend !")
//         break
        
//     default :
//     alert("Vous n'avez pas entré un jour valide")
// }
// 5. Créer une variable qui affiche quel âge avez vous ? si l'âge de la personne de la personne est égal à 18 ou plus et que la personne à 30 ou moins elle rejoint la section des 18-30 ans sinon si la personne à 50 ans ou moins et plus de 30 ans elle rejoint la section des 30-50ans sinon si la personne à plus de 50 ans elle rejoint la section des plus de 50 ans sinon la personne est trop jeune pour rejoindre le site.
// 6. Créez 3 questions, si la personne repond bien à une seule question, elle a un message comme quoi elle a réussi
// 7. La même chose que le 6 mais la personne doit repondre bien aux trois questions


// # Tableaux
// 1. Créez un tableau avec 5 éléments et supprimez le premier et le dernier
// let  tableaux=["amandine", "letellier","elouan","rose","stroobants"];
// let debut=tableaux.pop("");
// let fin=tableaux.shift("");
// console.log(tableaux);
// console.log(debut);
// console.log(fin);
// // // 2. Puis, ajoutez un élément à la fin et un au début
// let bebe=tableaux.push("bébé");
// let maman=tableaux.unshift("maman");
// console.log(tableaux);
// console.log(bebe);
// console.log(bebe);
// // 3. Grâce à une boucle, mettez tous les éléments du tableau en majuscule

// for (i = 0; i < tableaux.length; i++){
//     tableaux[i] = tableaux[i].charAt(0).toUpperCase() + tableaux[i].slice(1, -1) + tableaux[i].slice(-1).toLowerCase()
// }
// console.log(tableaux)
// // 4. Trouvez une méthode qui permet de supprimer le 3ème élément dans connaitre sa position
// // for (i = 0; i < tableaux.length; i++){
// //     tableaux[i] = tableaux[i].slice(2,-1);
// // }
// // console.log(tableaux)

// // 5. Transformez un tableau en chaine de caractères avec 2 méthodes
// tableau1=tableaux.join("");
// console.log(tableau1);
// // 6. Transformez une chaine de caractères en array avec 2 méthodes
// tableau2=tableaux.splice("");
// console.log(tableau2);

// # Functions
// 1. Créez une fonction qui permet de returner la taille d'une chaine de caractères
// let retourner=["amandine","elouan","adelaide","jonathan","juliana","simon","theo"];
// retourner =retourner.reverse();
// console.log(retourner.join(""));
// 2. Créez une fonction qui permet de verifier quel est le type du parametre
// 3. Créez une fonction qui permet de vérifier si le chiffre est plus grand ou égale à 50
// let chiffre =50
// let math =math.floor()*50
// let nombre = +prompt ("le chiffre est-il éagle ou plus grand que 50")

// alert(chiffre>=math);
// let chiffre = +prompt("choisi un chiffre !")
// const nombre = (chiffre)=>{
//     switch(chiffre>=50){
//         case 50:
//             alert("le chiffre est égale à 50");
//             break
//         case chiffre <=50:
//             alert("le chiffre est plus grand que 50");
//             break
//     }
// }
// nombre(chiffre);
// console.log(chiffre);
// 4. Créez une fonction qui permet de renvoyer la racine cubique du parametre
// 5. Créez une fonction qui met en majuscule qu'à partir de la 5ème lettre
// 6. Créez une fonction qui met en miniscule qu'à partir de la 9ème lettre
// 7. Fusionnez les deux fonctions

// # Boucles
// 1. let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +"(Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";
// 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau
// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime
// 4. Faites la même chose que l'exercice 2 avec une boucle foreach
// let question=prompt("trois nain vont à la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisieme");
// let pers3 = "pic"
// while (question!= pers3); {
//     let parler = prompt("que prend le troisieme");
//         if (parler==pers3 ){
//         alert("que prend le troisième" + " " +pers3);
//     }
// //     else{
// //         alert("bonjour" +" " + vieil_homme);
// //     }
// }
// console.log(question);
// console.log(parler);
