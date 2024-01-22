/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* numeri :i suoi valori vanno scritti senza apici come variabile ed è indicato senza distinzione tra intero e decimale.
stringa : i suoi valori devono essere scritti fra apici,singoli o doppi.indica sia il singolo carattere che la sequenza finita di caratteri.Es:"John Doe".
booleano: i suoi valori vanno scritti senza apici.Ammette due valori :true e false
null: segnala l'assenza di un oggetto.Immaginiamo di avere un contenitore ma decidiamo di tenerlo vuoto.Indica una mancanza di identificazione
undefined:è una proprietà che indica una variabile non ha un valore assegnato o definita.
BigInt:può essere utilizzato per memorizzare valori interi troppo grandi per essere rappresentati da un normale numero JavaScript.
simboli/symbol:
Object (tipo non primitivo):può memorizzare raccolte di dati.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Philip";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12;
let num2 = 20;
console.log(num1);
console.log(num2);
let num3 = num1 + num2;
console.log(num3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

let myname = "Philip";
myName = "Aduteye";
console.log(myName);

const myConstant = "Philip";
myConstant = "Aduteye";
console.log(myConstant);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = 12;
let result = 4 - x;
console - log(result);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
