function changeBg() {


    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = "black";


    } 
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = "white";
    }
}


function GetAndChange(){

    var gettedValue = document.getElementById('text').value;

    var changedValue = gettedValue.slice(-3,-2);

    var groupName = document.getElementById('first_h');

   
    if(changedValue==3){
       
        groupName.innerHTML=`<span style='color:dark;'>${gettedValue}</span> Sizin Qrupunuz Axsamdir`;
    }
    else if(changedValue==2){
        groupName.innerHTML=`<span style='color:red;'>${gettedValue}</span> Sizin Qrupunuz Gunortadir`;

    }
    else if(changedValue==1){
        groupName.innerHTML=`<span style='color:yellow;'>${gettedValue}</span> Sizin Qrupunuz Seherdir`;

    }
    else{
        groupName.innerHTML="Bele qrup movcud deyl zehmet olmasa yeniden yoxlayin";
    }

      

}