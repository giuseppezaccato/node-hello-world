
console.log("Hello Boolean");


//* manda da terminale (ctrl + ò):
//??   node index.js         || npm run start  ==>  lettura in asincrona!
//??   node --watch index.js || npm run watch  ==>  lettura sincrona

//!-------------------BONUS-------------------------------------------------------------
//task estraggo dalla stringa comando terminale 
//task quello che scrivo dalla posizione DOPO al 2(compreso) con .slice(2)
//task (che raccoglie in automatico come arguments in un array che si chiama process.argv)
//*metodo 1 compatto con slice/join/OR|| 
const message1 = process.argv.slice(2).join("_") || "Hello World";

//*metodo 2 prima slice + join + OR||
//task creo messaggio con condizione che se args è vuoto stampa "Hello World"
const args2 = process.argv.slice(2);
const message2 = args2.join('*') || "Hello World";

//*metodo 3 slice + join Ternary ||
//task stessa cosa ma con il ternary operator in maniera leggermente piu esplicita!
const args3 = process.argv.slice(2);
const message3 = args3 == 0 ? "Hello World" : args3.join("^");

//task console spiegazione dei 3 modi con il join differente!!!
console.log(
    `
    metodo 1 => ${message1} 
    metodo 2 => ${message2} 
    metodo 3 => ${message3}
    `
);
//!-------------------------------------------------------------------------------------
