// creare una lista della spesa
let lista_spesa = ["pomodori", "carote", "banane", "fettine", "lattuga", "acqua", "sedano", "cipolla", "prosciutto", "salsiccia", "formaggio"]

// trasformare in variabile l'ul con id specificato
let container_spesa = document.getElementById("spesa")

// inserire in un ciclo while
let i = 0
while(i<lista_spesa.length){
    // trasformare in variabile la creazione del tag li e aggiungerlo al dom
    let li = document.createElement("li")
    // inserire come testo del tag "li" cio che corrisponde al numero dato da "i"
    li.innerText = lista_spesa[i]
    // aggiungere l'li all'interno dell'ul
    container_spesa.appendChild(li)
    
    i++
    
}