const cenaListku = 12
const pocetNavstevniku = 174
const pocetPredstaveni = 15
const prijem = cenaListku * pocetNavstevniku * pocetPredstaveni
document.body.innerHTML += "<p> <h2>" + "Měsíční příjem divadla: " + prijem + " Eur" + "</h2></p>"
console.log("jmenuji se Lenka")
const studentskeVstupne = cenaListku * 0.65
const pocetStudentu = pocetNavstevniku * 0.4
const vyslednyPrijem = studentskeVstupne * 15 * pocetStudentu
console.log(vyslednyPrijem)
document.body.innerHTML += "<p> <h2>" + "Měsíční příjem divadla se studentskou slevou: " + vyslednyPrijem + " Eur" + "</h2></p>"