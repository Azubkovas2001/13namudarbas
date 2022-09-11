do{var klausimas = prompt("Įveskite prekės kainą")
    var klausimas = Number(klausimas)
}while(isNaN(klausimas) || klausimas <= 0)
console.log("Prekės kaina: " + klausimas + " £")
console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
console.log("========")
// 2 variantas (su pristatymu)
var kaina = Number(3)
var sum = klausimas + kaina
var pristatymas = confirm("Ar reikalingas pristatymas į namus??")
if(pristatymas){
    var adresas = prompt("Į kurį miestą reiks pristatyti?")
    console.log("Prekės kaina: " + klausimas + " £")
    console.log("Pristatymas: " + kaina + " £")
    console.log("Iš viso: " + sum + " £")
    console.log("Prekę pristatysime į " + adresas + " per 1-3 dienas.")
}else{
    console.log("Prekės kaina: " + klausimas + " £")
    console.log("Pristatymas: " + kaina + " £")
    console.log("Iš viso: " + sum + " £")
    console.log("Prekę pristatysime į " + adresas + " per 1-3 dienas.")
}
console.log("==============================")
var users = [
  {country: "Portugalija", people: 10260000, loc: 92212,},
  {country: "Lietuva", people: 2795000, loc: 65300,},
  {country: "Latvija", people: 1902000, loc: 64589,},
  {country: "Lenkija", people: 37950000, loc: 312696,},
  {country: "Prancuzija", people: 67390000, loc: 551695,},

];
function averageLikes(country, people, loc){
var result = loc * 1000000
var suma = result / people

    console.log("Šalis: " + country + ", joje gyvena " + people + " gyventojų.")
    console.log("Valstybės plotas: " + loc + " km², plotas tenkantis vienam gyventojui: " + suma.toFixed(2) + " m²")
    console.log("=======")
    
}
for(var x of users){
   averageLikes(x.country, x.people, x.loc, x.skaicius)
}





