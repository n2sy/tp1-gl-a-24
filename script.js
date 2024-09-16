let intituleInp = document.getElementById("intitule");
let sommeInp = document.getElementById("montant");
let btnAdd = document.getElementById("btn-add");
let btnEffacer = document.getElementById("btn-effacer");
let listDepenses = document.getElementById("list-dep");
let spanTotal = document.getElementById("total-dep");

function traitement() {
  console.log("Click détecté");
}

let total = 0;

//btnAdd.addEventListener("click", traitement());
btnAdd.addEventListener("click", () => {
  let newLabel = document.createElement("ion-label");
  let contenu = document.createTextNode(`
    ${intituleInp.value} : ${sommeInp.value} €`);
  newLabel.appendChild(contenu);
  let newItem = document.createElement("ion-item");
  newItem.appendChild(newLabel);
  listDepenses.appendChild(newItem);

  //total = total + parseInt(sommeInp.value);
  //total = total + Number(sommeInp.value);
  total += +sommeInp.value;

  spanTotal.textContent = `${total} €`;
  reinitialiserInputs();
});

function reinitialiserInputs() {
  intituleInp.value = "";
  sommeInp.value = "";
}

btnEffacer.addEventListener("click", reinitialiserInputs);

// function addition(a, b) {
//   return a + b;
// }

// (a, b) => {
//   return a + b;
// };

// (a, b) => a + b;

// (a) => a + 10;

// () => 20 + 10;
