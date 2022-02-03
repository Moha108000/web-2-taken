'use strict';

console.log('Mohamed oefening werkt');

let h1Element = document .querySelector('.h1')

console.log(h1Element);
h1Element.style.backgroundColor = 'black' ;
//

let KlasseNaam = 'tweede-rij'
let studenten = document.getElementsByClassName(KlasseNaam)
console.log(studenten)

for(let element of studenten) {
    console.log(element);
    element.style.backgroundColor = 'yellow'

}
let mohamed = document.querySelector("#Mohamed");
 mohamed.style.textDecoration = "underline";






//.style.textDecoration = "underline";


