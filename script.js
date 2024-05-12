//TABLEAU 
let tables=[
    { livre:'Romance',auteur:'ZAC',annepublication:'6666',lunonlu:'non'},
    { livre:'Bienfait',auteur:'Rachid',annepublication:'6666',lunonlu:'non'},
    { livre:'Passion',auteur:'ZAC',annepublication:'6666',lunonlu:'non'},
]
const table=document.querySelector('.table');
const tblbody=document.createElement('tbody');

// Les tables
function createTable(){
    for(let index =0; index<4; index++){
        let row=document.createElement('tr');
        for (let element = 0; element < tables.length; element++) {
            const cell = document.createElement('td');
            const cellText = document.createTextNode(Object.values(tables[index][element]));
            cell.appendChild(cellText);
            row.appendChild(cell);
            
            
        }
        tblbody.appendChild(row);
    }
    table.appendChild(tblbody);
    document.body.appendChild(table);
}



let modal=document.getElementById("modals")
let modalbutton=document.getElementById("addLivreModalButton")
let close=document.querySelector(".close")

modalbutton.onclick=function(){
    modal.style.display="block";
}

close.onclick=function(){
    modal.style.display="none";
}
createTable();




