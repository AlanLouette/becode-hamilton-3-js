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

    part1.addEventListener("click", event => {
        part1.innerHTML++; // Incrémentation "part1" à partir de 460
        if (part1.innerHTML > +part1.getAttribute("data-max")) {
            part1.innerHTML = +part1.getAttribute("data-min")
        }

        target.innerHTML = "+" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML
        // Affichage du "target" en fonction des boutons 
    })
    part2.addEventListener("click", event => {
        part2.innerHTML++;
        if (part2.innerHTML > +part2.getAttribute("data-max")) {
            part2.innerHTML = +part2.getAttribute("data-min")
        }

        if (part2.innerHTML < 10) { // Si le bouton affiche - de 10
            part2.innerHTML = "0" + part2.innerHTML; // On affichera "0" puis le nombre (ex : affichera 02 au lieu de 2)
        }

        target.innerHTML = "+" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML

    })
    part3.addEventListener("click", event => {
        part3.innerHTML++;
        if (part3.innerHTML > +part3.getAttribute("data-max")) {
            part3.innerHTML = +part3.getAttribute("data-min")
        }

        if (part3.innerHTML < 10) {
            part3.innerHTML = "0" + part3.innerHTML;
        }

        target.innerHTML = "+" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML

    })
    part4.addEventListener("click", event => {
        part4.innerHTML++;
        if (part4.innerHTML > +part4.getAttribute("data-max")) {
            part4.innerHTML = +part4.getAttribute("data-max")
        }

        if (part4.innerHTML < 10) {
            part4.innerHTML = "0" + part4.innerHTML;
        }

        target.innerHTML = "+" + part1.innerHTML + part2.innerHTML + part3.innerHTML + part4.innerHTML

    })

})();