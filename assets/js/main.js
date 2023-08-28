/* 

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Mail

Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

/* 
Tools
- math random?
- for
- array numeri
- consolelog
- if/else
- 
*/


// Genero un numero random da 1 a 6 per il giocatore e per il computer

const numbersList = [1, 2, 3, 4, 5, 6];
console.log(numbersList);

const userNumber = Math.floor(Math.random() * 6 + 1);
console.log(userNumber);

const computerNumber = Math.floor(Math.random() * 6 + 1);
console.log(computerNumber);

// Stabilisco il vincitore
if (userNumber > computerNumber) {
    console.log('😎 Hai vinto!!!');
} else if (userNumber < computerNumber) {
    console.log('😢 Hai perso!');
} else {
    console.log('😁 Parità, ritenta!');
}

const whiteMailList = ['mario@gmail.com', 'luca@gmail.com', 'marco@gmail.com', 'lisa@gmail.com', 'andrea@gmail.com', 'emma@gmail.com', 'giorgia@gmail.com', 'carlo@gmail.com']
const userMail = document.getElementById('email');

for (let i = 0; i < whiteMailList.length; i++) {
    const mailAdcepted = whiteMailList[i];
    

    if (userMail == mailAdcepted) {
        console.log(mail);

        /* const numbersList = [1, 2, 3, 4, 5, 6];
        console.log(numbersList);

        const userNumber = Math.floor(Math.random() * 6 + 1);
        console.log(userNumber);

        const computerNumber = Math.floor(Math.random() * 6 + 1);
        console.log(computerNumber);

        // Stabilisco il vincitore
        if (userNumber > computerNumber) {
            console.log('😎 Hai vinto!!!');
        } else if (userNumber < computerNumber) {
            console.log('😢 Hai perso!');
        } else {
            console.log('😁 Parità, ritenta!');
        } */
    } else {
        //console.log('mail non accettata');
        
    }

    
}

