// Salvo il valore del button su JS

const playButton = document.getElementById('play-button');

// Aggiunto al button gli eventi "game" e "timer" al click

playButton.addEventListener('click', game, timer);

// Imposto il timer a 6 secondi

let counter = 5;

// Funzione generica per generare un numero random compreso tra min e max
function rndNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// Imposto il clock a 0;

let clock = 0;

// Prendo il div dove appariranno i numeri random

const computerNumbers = document.getElementById('computer-numbers');

// Creo un array vuota

const rndNumbers = [];

// Imposto un valore 1 a k

let k = 1;

// Funzione generica "game"

function game(e) {
    e.preventDefault();

    // Creo una variabile computerNumber impostata a 0

    let computerNumber = 0;

    // Fin quando k è minore/uguale a 5

    while(k <= 5) {

        // Genero un numero random tra 1 e 100 e lo imposto a computerNumber

        computerNumber = rndNumGenerator(1, 100);
        console.log(computerNumber, typeof computerNumber);

        // Se nell'array di numeri random non è presente il numero generato, pusha quest'ultimo nell'array di numeri random 

        if (!rndNumbers.includes(computerNumber)) {
            rndNumbers.push(computerNumber);
            
            // Aumenta il valore di k per generare un numero successivo
            k++;
        }
    }
    console.log(rndNumbers);

    // Stampa nell'HTML l'array di numeri random generati dal computer

    computerNumbers.innerHTML = rndNumbers;

    // Imposta a clock un intervallo ogni 1000 secondi che attiva la funzione "timer".

    clock = setInterval(timer, 1000);

    // Dopo 5 secondi, nascondi il div "computerNumbers"
    
    let hideNumbers = setTimeout(function() {
        computerNumbers.style.display = 'none';
    },5000)
}

// Creo un array vuota

const userGuessArray = []

// Funzione generica Timer

function timer() { 

    // Se il counter arriva a 0

    if (counter == 0) {

        // Creo un ciclo che parte da 0 e arriva a 4

        for (k = 0; k < 5; k++) {

            // Per ogni ciclo, fai apparire un prompt dove l'utente scriverà la risposta
            let userGuess = parseInt(prompt('Inserisci i numeri visualizzati'));
            console.log(userGuess, typeof userGuess)

            // Pusha il valore della risposta dell'utente nell'array vuota creata prima

            userGuessArray.push(userGuess.value);          
        }

        // Confronto se l'array dopo esser stata riempita dalle risposte è uguale all'array con i numeri generati dal computer

        if (userGuessArray.value == rndNumbers.value) { 

            // Se è uguale, l'utente ha vinto
            alert('Hai vinto!')       

        } else {
            
            // Altrimenti, l'utente ha perso
            alert ('Hai perso!')
        }
        


        // Interrompi l'intervallo
        clearInterval(clock);

        // Imposta clock a null per non farlo ripartire
        clock = null;  
      
    } else {

        // Diminuisco il counter di 1 al secondo (1000 ms)
        counter--
    }

    // Salvo il div "timer" su JS

    const gameTimer = document.getElementById('timer');

    // Stampo nell'HTML del div "timer" il counter

    gameTimer.innerHTML = counter;
}



