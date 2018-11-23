var budget = {
    "salaire": 1200,
    "aides": 400,
    "rentes":300,
    "Autre":400,

};
var depense={
  "loyer":"loyer",
  "credit":200,
  "eau ,electricité": "eau ,electricité",
    "telephone":"telephone",
    "assurance habitation":"assurance habitation",
    "assurance vehicules":"assurance vehicules",
    "mutuelle santé":"mutuelle santé",
    "frais de garde":"frais de garde",
    "impôts": "impôts",

};
document.getElementById("td").innerHTML=depense.loyer;
var but=document.getElementById("valider");

var t=document.getElementById("1").innerHTML = depense.loyer;
var val=document.getElementById("value");


document.getElementById("2").innerHTML=depense["eau ,electricité"];
document.getElementById("3").innerHTML=depense.telephone;
document.getElementById("4").innerHTML=depense["assurance habitation"];
document.getElementById("5").innerHTML=depense["assurance vehicules"];
var ty=document.getElementById("t1");
but.addEventListener("click",function () {
    ty.innerHTML=val.value;
console.log(val);
});

