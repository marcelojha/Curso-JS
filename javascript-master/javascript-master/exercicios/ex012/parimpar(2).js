

function teste(){
    
    var n1 = Number(window.prompt('Digite o valor: '));

    var res = window.document.getElementById('result');

    if(n1 % 2 == 0){
        res.innerText = `O número ${n1} é par`;
       
    }   
    else{
        res.innerText =`O número ${n1} é impar`;
        
    }
}

