let container = document.querySelector(".inre_varukorg");
let summa = document.querySelector("#summa");

let array=[];
const nyckel_2 = "artiklar";

let total_summa = 0;

function add(vara, pris_p, pris_siffra){
    let artikel = {
        rubrik:vara ,
        pris:pris_p ,
        kostnad:pris_siffra
    }
    array.push(artikel);
    console.log(array);
    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel_2, json);
    rita_artiklar();
    read_from_ls();
}

function rita_artiklar(){
    container.innerHTML="";
    for (let i = 0; i < array.length; i++) {
        let vara_p = document.createElement("p");
        let pris_p = document.createElement("p");
        container.classList.add("container");
        vara_p.textContent = array[i].rubrik;
        pris_p.textContent = array[i].pris;
        total_summa += array[i].kostnad;
        container.appendChild(vara_p);
        container.appendChild(pris_p);
        summa.textContent = total_summa + " EUR";
    }
    total_summa = 0;
}

function read_from_ls(){
    let json = window.localStorage.getItem("nyckel_2");
    array = JSON.parse("json");
    console.log("get_local:\n",array);
}

function erase(){
    array=[];
    container.innerHTML="";
    summa.textContent = 0 + " EUR";
}