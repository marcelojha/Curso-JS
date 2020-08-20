function tabuada(){
    var numero = window.document.querySelector('input#numero');
    var res = window.document.querySelector('div#res');
    res.innerHTML = ` `;

    if(numero.value.length==0){
        alert("Informe um número");
    }else{
        for(var i = 1; i<= 10; i++){
            var n1 = Number(numero.value);
            let multi = n1 * i;
            res.innerHTML += `<p> ${n1} * ${i} = ${multi}</p>`;
        }
    }

}