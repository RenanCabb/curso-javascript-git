let hours = 14;
let isBomDia = hours >= 6 && hours <= 12;
let isBoaTarde = hours >= 12 && hours <= 17;
let isBoaNoite = hours >= 18 && hours <= 24;

if (isBomDia) {
    console.log ("Bom Dia!");
} else if (isBoaTarde) {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");
}
    
