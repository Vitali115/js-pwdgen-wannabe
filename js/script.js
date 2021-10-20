// Dati inseriti dall' utente.
const firstname = prompt("Inserisci il tuo nome");
const lastname = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
console.log(firstname);
console.log(lastname);
console.log(favColor);
// 
const randonNumb= Math.floor(Math.random() *115);
console.log(randonNumb);
// 
let firstMessage = "La tua password è pronta!"
console.log(firstMessage);
// 
let welcome = `<h2>Ciao ${firstname}<br>${firstMessage}</h2>`;
document.getElementById('welcome').innerHTML = welcome;
// 
const pass = firstname + lastname + favColor + randonNumb;
console.log(pass);
document.getElementById('pass').innerHTML = pass;
// 
passleng = `<h2>${pass.length} caratteri</h2> `;
console.log(passleng);
document.getElementById('passleng').innerHTML = passleng;


