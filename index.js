import { címKiírás, egyKutyaKiírás } from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
let nev = "Dézi";
const cím = "Kutyák minden mennyiségben";

const kutya1= {
        nev: "Floki",
        kor: 12,
        nem: "kan"
}

const kutya2= {
    nev: "Dézi",
    kor: 2,
    nem: "nőstény"
}

kutya1.nev="Jenő"
console.log("1. kutya: ", kutya1, kutya1.nev)
console.log("cím: ", cím)

const nevlista= ["Jenő", "Dézi", "Béla"]
const számlista= [1, 2, 3]
nevlista[0]="Floki"
console.log(nevlista)
címKiírás(cím)

kutyaLista.forEach((kutya, index) =>{
    console.log(kutya, index);
    egyKutyaKiírás(kutya);
});

//Eseménykezelő a gombokhoz

const gombElem=$(".kivalaszt")
gombElem.on("click", (event)=>{
    console.log(event.target) //az az elem, amelyik kiváltotta az eseményt
})



