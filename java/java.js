/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var form = document.querySelector('form');
var sub = document.getElementById("sub");
var but = document.getElementById("button");
var ul = document.querySelector('.ul');

//*Hulp van Danny
function poep() {
    form.classList.toggle('iets');
    ul.classList.toggle("niets");
}

but.addEventListener("click", poep);

function nix() {
    form.classList.toggle('iets');
    ul.classList.toggle("niets");
}

sub.addEventListener("click", nix);




