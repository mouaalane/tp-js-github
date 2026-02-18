/*
Consigne : Écrire une fonction infosEtudiant(nom, note) qui retourne un
message.
• Si note ≥ 10 : “Admis”
• Sinon : “Ajourné”
Exemple attendu :
console.log(infosEtudiant("Hiba", 14)); // Hiba : 14/20 → Admis

*/

function infosEtudiant(nom, note) {
  if (note >= 10) {
    return `${nom} : ${note}/20 → Admis`;
  } else {
    return `${nom} : ${note}/20 → Ajourné`;
  }
}

console.log(infosEtudiant("Hiba", 14));
