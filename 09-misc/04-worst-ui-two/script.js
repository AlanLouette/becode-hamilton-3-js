/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let part1 = document.getElementById("part-one")
    let part2 = document.getElementById("part-two")
    let part3 = document.getElementById("part-three")
    let part4 = document.getElementById("part-four")
    let target = document.getElementById("target")
    let buttons = document.querySelectorAll("button")

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            button.innerHTML++;
            if (button.innerHTML > +button.getAttribute("data-max")) {
                button.innerHTML = +button.getAttribute("data-min")
            }

            if (button.innerHTML < 10) { // Si le bouton affiche - de 10
                button.innerHTML = "0" + button.innerHTML; // On affichera "0" puis le nombre (ex : affichera 02 au lieu de 2)
            }

            target.innerHTML = "+" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML
        })
    });

})();