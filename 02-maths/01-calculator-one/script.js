/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("addition").addEventListener("click", () => {
    const premierNbre = parseFloat(document.getElementById("op-one").value);
    const deuxiemeNbre = parseFloat(document.getElementById("op-two").value);
    const resultat = premierNbre + deuxiemeNbre;
    alert("La réponse est " + resultat);
  });

  document.getElementById("substraction").addEventListener("click", () => {
    const premierNbre = parseFloat(document.getElementById("op-one").value);
    const deuxiemeNbre = parseFloat(document.getElementById("op-two").value);
    const resultat = premierNbre - deuxiemeNbre;
    alert("La réponse est " + resultat);
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    const premierNbre = parseFloat(document.getElementById("op-one").value);
    const deuxiemeNbre = parseFloat(document.getElementById("op-two").value);
    const resultat = premierNbre * deuxiemeNbre;
    alert("La réponse est " + resultat);
  });

  document.getElementById("division").addEventListener("click", () => {
    const premierNbre = parseFloat(document.getElementById("op-one").value);
    const deuxiemeNbre = parseFloat(document.getElementById("op-two").value);
    const resultat = premierNbre / deuxiemeNbre;
    alert("La réponse est " + resultat);
  });
})();