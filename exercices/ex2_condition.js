/* 
    Exercice 2 — Conditions / boucles (ex2_conditions.js)
Consigne : Écrire une fonction fizzBuzz(n) qui affiche de 1 à n :
• “Fizz” si multiple de 3
• “Buzz” si multiple de 5
• “FizzBuzz” si multiple des deux
• sinon le nombre
Test :
fizzBuzz(20);

*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
