
// - Créer un programme qui va convertir la premiere lettre d'un mot en majuscule et qui va afficher la longueur de ce mot via une console.log

let upperCase = (mot) => {
    console.log(mot.charAt(0).toUpperCase() + mot.slice(1,5));
    console.log(mot.length);
}

// upperCase(prompt("Encodez un mot !"));

// Créer un programme qui va nous afficher la date d'aujourd'hui avec le format jj/dd/aaaa

let today = new Date();

let todayDate = () => {
    console.log(new Date());
    console.log(today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear());
}

//date.tolocaldatestring

todayDate();

// - Créer un programme qui va prendre un paramètre. Le programme consiste a attribué un nombre de classe et de les remplir. 
// - Après avoir reçu l'information, vous crée ces classes (array) via une boucle. (Ex: si le paramètre est de 7, vous créer 7 classe.)
// - Placer des étudiants dans une seul classe. Une classe peut prendre 20 élèves. (Attention, à cause du covid, ils peuvent en prendre que la moitié

let school = {
    remplir : (classe) => {
        let i = 1;
        for (; i <= classe;) {
            i++;
        }
    } 
}



// Créer un programme qui prend deux paramètres. Un nom et un résultat. 
// Si le résultat est supérieur à 90, vous placé le personnage dans un array nommé "Réussite". 
// Si le résultat est égal ou supérieur à 50, vous les placer dans un array nommé "Remediation". Sinon vous le placer dans un tableau nommé "Echec". 
// Pour les étudiants qui font partie du groupe "Remediation", vous faites en sortes qu'ils viennent 7jours pour une remediation (boucle) 
// et le prouver avec une console.log "personnage s'est présenter à l'école".

let reussite = [];
let remediation = [];
let echec = [];

let successFail = (nom, resultat) => {
    if(resultat > 90) {
        reussite.push(nom);
        console.log(reussite)
    }
    else if (resultat >= 50) {
        remediation.push(nom);
        for (i = 1; i <= 7; i++){
            console.log(`Je suis venu ${i} jours en remediation`);
        }
        console.log(remediation);
    }
    else {
        echec.push(nom);
        console.log(echec);
    }
}

successFail("chris", 55);

// - Créer un programme qui va prendre les présence. Il prendra deux paramètres, nom et la présence.
// - Si l'étudiant est présent, vous le placé dans une classe. 
// - Sinon vous le placé dans un array "Absent". 
// - Retournez le résultat via une console.log, affiché chaque personne absente avec une phrase du style "L'eleve x a été absent"

let classe = [];
let absent = [];

let beThere = (nom, presence) => {
    if (presence == "present") {
        classe.push(nom);
        console.log(classe)
    }
    else {
        absent.push(nom);
        console.log(`l'élève ${nom} est absent`)
    }
}

beThere("alan", "present");
beThere("arnaud", "present");
beThere("Gilles", "absent");
beThere("Lionel", "present");

//- Créer un programme qui une fois déclenché, va nous renvoyer une alert de warning "Attention un virus a été détecté" tout les deux secondes.

let warning = () => {
    setInterval(function(){alert("Attention, un virus a été détecté !")}, 2000);
}

// warning();

// - Créer une fonction qui doit donner ce résultat "BoNjOuR à ToUs". C-à-d mettre une lettre en majuscule une fois sur deux

let alternance = (texte) => {
    let caractere = texte.split("");
    for (let i = 0; i < caractere.length; i += 2) {
        caractere[i] = caractere[i].toUpperCase();
    }
    return caractere.join("");
}

console.log(alternance("coucou à tous"));

//- Créer un programme qui calcule le prix du produit avec TVA (la TVA vaut 1.196). 
// - Le programme prendra deux paramètres, le nom du produit et le prix du produit HTV.
// - Retourner le résultat via un console.log "le produit x vaut x € avec TVA"

let totalPrice = (productName, productPrice) => {
    let tva = 1.196;
    let finalPrice = productPrice * tva;
    console.log(`le ${productName} vaut ${finalPrice.toFixed(2)}€ TVA comprise`)
}

totalPrice("chaise", 67);

// - Créer un programme qui va trier des produits et leurs produits par rapport a leur marque. 
// - Vous travaillez pour 4 grosses entreprises: Nivea, Oreal, Dove, Garnier.
// - Le programme prendra deux paramètres. Le nom de l'entreprise et son produit (Ex: nivea, crème visage).
// - e programme va trier et stocker le produit dans des tableaux par rapport a sa marque. 
// (Ex: si vous lancez la méthode avec la marque granier, vous stocker le produit liée dans un array produitGranier.)
// - Faite en sorte d'afficher chaque nom de produit via une console.log en mettant la 1er lettre en majuscule

let nivea = [];
let oreal = [];
let dove = [];
let garnier = [];

let organize = (nameEnterprise, productEnterprise) => {
    if (nameEnterprise == "Nivea" ) {
        nivea.push(productEnterprise)
        console.log(nivea);
    }
    else if (nameEnterprise == "Dove") {
        nivea.push(productEnterprise)
        console.log(nivea);
    }
}

organize("Nivea", "crème solaire");