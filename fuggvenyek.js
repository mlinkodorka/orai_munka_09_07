export function címKiírás(cím){
    //const h1Elem=document.querySelector("header h1")
    const h1Elem=$("header")
    console.log(h1Elem)
    //h1Elem.innerHTML += "<p>" + cím + "</p>";
    h1Elem.append(`<p> ${cím} </p>`)
}

/* Készíts függvényt, amivel a kutya1 adatait írhatjuk ki a tartalom
nevezetű class-ba, divben legyen, a név, h3-as címben a kor, a nem p tagben*/

export function egyKutyaKiírás(kutya) {
    const divElem = $(".tartalom");
    divElem.append(`<div class="col-lg-4 col-md-6 card">
                        <div class="card-body">
                            <h3 class="card-title">${kutya.nev}</h3>
                            <p class="card-text">kor: ${kutya.kor}</p>
                            <p class="card-text">nem: ${kutya.nem}</p>
                            <button class="kivalaszt btn btn-success">Kiválaszt</button>
                        </div>
                    </div>`);

}