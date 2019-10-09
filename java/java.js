/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

var form = document.querySelector('form');
var sub = document.getElementById("sub");
var but = document.getElementById("button");
var ul = document.getElementById("ul");

function poep() {
    form.style.opacity = "1";
    ul.style.marginTop = "180px";
}

but.addEventListener("click", poep);


function nix() {
    form.style.opacity = "0";
    ul.style.marginTop = "0px";

}


sub.addEventListener("click", nix)

function poep1() {
    form.style.opacity = "0";
    ul.style.marginTop = "0px";

}

