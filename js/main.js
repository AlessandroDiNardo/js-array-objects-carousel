/* Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione. Creare un carosello come nella foto allegata. */

// creare array di oggetti
const imgArr = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text : 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

imgArr.forEach((element) => {
        // creazione elementi per dom
        let myCont = document.getElementById("container-item");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h2");
        let sub = document.createElement("sub");

        // aggiungo classe e inserisco nel DOM
        img.classList.add("img");
        img.src = (element.image);
        title.classList.add("title");
        title.innerHTML = (element.title);
        sub.classList.add("sub");
        sub.innerHTML = (element.text);
        div.append(img, title, sub);
        myCont.append(div);
    }
);

const divArray = document.getElementsByClassName("img");
divArray[0].classList.add("active");

// // variabile contatore
let activeItem = 0;

// button prev
let prev = document.getElementById("btnPrev");
prev.addEventListener("click",
   function(){
        if(activeItem > 0) {
            // rimuovo classe active
            divArray[activeItem].classList.remove("active");

            // decremento di uno per tornare all'indice precedente
            activeItem --;

            // aggiungo active all'elemento
            divArray[activeItem].classList.add("active");
        }

        if(activeItem == 0) {
            prev.classList.add("hidden");
        }

        if(activeItem < divArray.length-1){
            next.classList.remove("hidden");
        }

        if(activeItem === 0) {
            divArray[activeItem].classList.add("active");
        }

        if(activeItem === divArray - 1) {
            divArray[activeItem].classList.add.remove("active");

            activeItem = 0;

            divArray[activeItem].classList.add("active");
        }
   } 
);


// button next
let next = document.getElementById("btnNext");

// creazione funzione btn next
next.addEventListener("click",
    function() {
        if(activeItem < divArray.length - 1) {            
            // rimuovo classe active 
            divArray[activeItem].classList.remove("active");

            // incremento di uno l'indice dell'elemento da visualizzare
            activeItem ++;

            // aggiungere active elemento successivo
            divArray[activeItem].classList.add("active");
        };

        //  aggiungo classe hidden al button next arrivato all'ultimo elemento
        if(activeItem === divArray.length - 1){
            next.classList.add("hidden");
        }

        // rimuovo il button prev con la classe hidden arrivato all'ultimo
        if(activeItem > 0){
            prev.classList.remove("hidden");
        }
    }
);






