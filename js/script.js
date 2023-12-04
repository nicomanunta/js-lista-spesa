// creare una lista della spesa
let lista_spesa = ["pomodori", "carote", "banane", "fettine", "lattuga", "acqua", "sedano", "cipolla", "prosciutto", "salsiccia", "formaggio"]

// trasformare in variabile l'ul con id specificato
let container_spesa = document.getElementById("spesa")

// aggiungo il latte all' array con la funzione push
lista_spesa.push("latte")

// inserire un ciclo while
let i = 0
while(i<lista_spesa.length){

    let li = document.createElement("li")

    // se il latte è presente nell'array stampo sulla pagina "latte (non scremato)"
    if(lista_spesa[i]=="latte"){
        li.innerText = "latte (non scremato)"
    }
    else{
        // altrimenti inserire come testo del tag "li" cio che corrisponde al numero dato da "i"
        li.innerText = lista_spesa[i]
    }

    container_spesa.appendChild(li)

    i++
    
    
}

console.log(lista_spesa)