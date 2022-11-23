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
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

imgArr.forEach((element) => {
        // creazione elementi per dom
        let leftSide = document.getElementById("left-side");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h1");
        let sub = document.createElement("p");

        // aggiungo classe e inserisco nel DOM
        img.classList.add("img");
        title.classList.add("title");
        sub.classList.add("sub");
        div.classList.add("item");
        leftSide.classList.add("left-side")

        img.src = (element.image);
        title.innerHTML = (element.title);
        sub.innerHTML = (element.text);

        leftSide.append(div)
        div.append(img, title, sub);
    }
);



const divArray = document.getElementsByClassName("item");
divArray[0].classList.add("active");

// variabile contatore
let activeItem = 0;

// button prev
let prev = document.getElementById("btnPrev");

// creazione funzione btn prev
prev.addEventListener("click",
   function(){
        if(activeItem === 0) {
            // rimuovo classe active
            divArray[activeItem].classList.remove("active");

            // decremento di uno per tornare all'indice precedente
            activeItem = divArray.length - 1;

            // aggiungo active all'elemento
            divArray[activeItem].classList.add("active");

        }else{

            divArray[activeItem].classList.remove("active");

            activeItem --;

            divArray[activeItem].classList.add("active");
        }
    } 
);


// button next
let next = document.getElementById("btnNext");

// creazione funzione btn next
next.addEventListener("click",
    function() {
        if(activeItem === divArray.length - 1) {            
            // rimuovo classe active 
            divArray[activeItem].classList.remove("active");

            // incremento di uno l'indice dell'elemento da visualizzare
            activeItem = 0;

            // aggiungere active elemento successivo
            divArray[activeItem].classList.add("active");

        }else{

            divArray[activeItem].classList.remove("active");

            activeItem ++;

            divArray[activeItem].classList.add("active");
        }
    }
);






