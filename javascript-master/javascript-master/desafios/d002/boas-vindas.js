function welcome(){
    var nome = window.prompt("Qual o seu nome?");
    var idade = Number(window.prompt(`Olá ${nome}, quantos anos você tem?`));
    window.alert(`Acabei de conhecer ${nome} quem tem ${idade} anos de idade`)
}