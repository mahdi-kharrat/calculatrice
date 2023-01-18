let x = document.querySelector("#X");
let y = document.querySelector("#Y");

function showsomme() {
    document.querySelector("h3").innerHTML = somme(Number(x.value),Number(y.value));
  }
  function somme(x, y) {
    return "resultat = " + (x + y);
  }

  function showsoustraction() {
    document.querySelector("h3").innerHTML = soustraction(Number(x.value),Number(y.value));
  }
  function soustraction(x, y) {
    return "resultat = " + (x - y);
  }

  function showproduit() {
    document.querySelector("h3").innerHTML = produit(Number(x.value),Number(y.value));
  }
  function produit(x, y) {
    return "resultat = " + (x * y);
  }

  function showdivision() {
    document.querySelector("h3").innerHTML = division(Number(x.value),Number(y.value));
  }
  function division(x, y) {
    return "resultat = " + (x / y);
  }