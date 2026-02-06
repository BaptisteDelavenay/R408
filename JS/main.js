// let compteur = 0;

// let button = document.getElementById("button");
// let afficheNB = document.getElementById("compteur");

// button.addEventListener("click", function(){
//     compteur+=1;
//     afficheNB.innerHTML = compteur

// })


class clicker {

    constructor(){
        this.compteur = 0
    }

    getCompteur(){
        return this.compteur
    }

    incrementer(val){
        this.compteur += val
        return this.compteur
    }

}