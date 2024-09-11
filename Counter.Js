let CounterElement=document.getElementById("number");

function onincrement(){
    let Previousvalue=CounterElement.textContent;
    let Updatedvalue=parseInt(Previousvalue)+1
    CounterElement.textContent=Updatedvalue;
    if (Updatedvalue>0){
        CounterElement.style.color="green";
    }
    else if(Updatedvalue==0){
        CounterElement.style.color="black";
    }
}

function ondecrement(){
    let Previousvalue=CounterElement.textContent;
    let Updatedvalue=parseInt(Previousvalue)-1
    CounterElement.textContent=Updatedvalue;
    if (Updatedvalue<0){
        CounterElement.style.color="red";
    
    }
    else if (Updatedvalue==0){
        CounterElement.style.color="black";
    }
    
}
function onReset(){
    let Updatedvalue=0;
    CounterElement.textContent=Updatedvalue;
    if (Updatedvalue==0){
        CounterElement.style.color="black";
    }
}