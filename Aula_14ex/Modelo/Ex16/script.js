
function contar(){
    var ini = window.document.getElementById('inicio');
    var fin = window.document.getElementById('fim');
    var pas = window.document.getElementById('passo');
    
    res=window.document.getElementById('res');
     
    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        window.alert('Preencha todos os campos!');
        res.innerHTML = `Impossível contar`;  
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value);
        let f = Number(fin.value);
        let p = Number(pas.value);
        if( p <= 0){
            window.alert("Passo inválido! Considerando PASSO 1");
            p=1;
        }

        if(i < f){
            //crescente
            for(var cont = i ; cont < f; cont = cont + p){
                res.innerHTML+=`<p> ${cont} \u{1F449}</p>`;
            }    
        }else{
            //regressiva
            for(var cont = i; cont >= f ; cont = cont - p){
                res.innerHTML+=`<p>${cont} \u{1F449}</p>`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;

    }
}
    
    
