const firstname = prompt("Inserisci il tuo nome");
const lastname = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");

console.log(firstname);
console.log(lastname);
console.log(favColor);

let firstMessage = "La tua password è pronta!"
console.log(firstMessage);


welcome = `<h2>Ciao ${firstname}<br>${firstMessage}</h2>`;
document.getElementById('welcome').innerHTML = welcome;


let pass = firstname + lastname + favColor;
console.log(pass);
document.getElementById('pass').innerHTML = pass;
