//const vara = document.querySelector("#vara");
//const pris = document.querySelector("#pris");
let container = document.querySelector(".inre_varukorg");

let array=[];
const nyckel = "artiklar";

function add(vara, pris_p){
    let artikel = {
        rubrik:vara ,
        pris:pris_p
    }
    
    array.push(artikel);
    console.log(array);
    let json = JSON.stringify(array);
    window.localStorage.setItem(nyckel, json);
    rita_artiklar();
}

function rita_artiklar(){
    container.innerHTML="";
    for (let i = 0; i < array.length; i++) {
        let vara_p = document.createElement("p");
        let pris_p = document.createElement("p");
        container.classList.add("minKlass");
        vara_p.textContent =array[i].rubrik;
        pris_p.textContent =array[i].pris;
        container.appendChild(vara_p);
        container.appendChild(pris_p);
    }
}

/*
function read_from_ls(){
    let json = window.localStorage.getItem("nyckel");
    array = JSON.parse("json");
    console.log("get_local:\n",array);
}
*/