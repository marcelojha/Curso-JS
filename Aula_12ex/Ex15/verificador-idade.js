function verificar(){
    //window.alert("Olá mundo")
    var n1 = Number(window.document.getElementById('ano_nasc').value);
    var agora = new Date()
    var ano_atual = agora.getFullYear();
    
    if (n1.length == 0 || n1 > ano_atual){
        window.alert("[ERRO] Verifique os dados e tente novamente");
    }else{
        var fsex = window.document.getElementsByName('radsex');
        var idade = ano_atual - n1;
        var gênero = '';
        var img = document.createElement('img'); //cria tag img no document via JS
        img.setAttribute('id','foto'); //setando atributo na tag img com id foto
        var res = window.document.getElementById('res')
        
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src','bebe_menino.png')
            }else if( idade <21){
                //jovem
                img.setAttribute('src','jovem_homem.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adulto_homem.png')
            }else{
                //idoso
                img.setAttribute('src','idoso_homem.png')
            }
        }
        else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','bebe_menina.png')
                //crianca
            }else if( idade <21){
                //jovem
                img.setAttribute('src','jovem_mulher.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','adulta_mulher.png')
            }else{
                //idoso
                img.setAttribute('src','idosa_mulher.png')
            }
        }
        
        res.style.textAlign = 'center'; //centralizando elemento via JS
        
        res.innerHTML = `a idade é ${idade} ${gênero}`
        res.appendChild(img);// img aparece como tag filha do res
        



       
    }

}