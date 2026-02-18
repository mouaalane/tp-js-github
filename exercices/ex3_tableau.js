/*
Exercice 3 — Tableaux (ex3_tableaux.js)
Consigne :
• Créer un tableau notes = [12, 8, 15, 10, 7]
• Calculer :
1. la moyenne
2. la meilleure note
3. le nombre de notes ≥ 10

Afficher un résumé.
 */

let notes = [12, 8, 15, 10, 7];

let moyenne = notes.reduce((acc, note) => acc + note) / notes.length;
console.log(`Moyenne : ${moyenne}`);

let meilleureNote = Math.max(...notes);
console.log(`Meilleure note : ${meilleureNote}`);

let nbNotes10 = notes.filter((note) => note >= 10).length;
console.log(`Nombre de notes >= 10 : ${nbNotes10}`);

console.log(`Notes : ${notes}`);
