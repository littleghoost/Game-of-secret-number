let listn = [];
let listc = 100;
let secretnumber = randomNumber();
let trys = 1;

//função de mostrar texto
function viewText(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
//função de dizer oq está deverá ser escrito
function viewIncialText() {
    viewText('h1', 'Game of Secret Number');
    viewText('p', 'Escolha um número entre 1 e 100');
}

viewIncialText();

//função de verificar se o chute é maior ou menor ou igual ao número secreto
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == secretnumber) {
        viewText('h1', 'Congrats');
        let trys_try = trys > 1 ? 'trys' : 'try'
        let messagetry = `You find the secret number with ${trys} ${trys_try}`;
        viewText('p', messagetry);
        document.getElementById('reiniciar').removeAttribute('disabled');

     } else {
            if (chute > secretnumber) {
                viewText('p', 'o número secreto é menor');
            } else {
                viewText('p', 'o número secreto é maior');
            }
            trys++
            clearNumber();
        }
    
}

//função de randomizar o número
function randomNumber(){
    let numberchoose = parseInt(Math.random() * listc + 1);
    let numberquanty = listn.length;

    if (numberquanty == listc){
        listn = [];
    }
    if (listn.includes(numberchoose)) {
        return randomNumber();
    } else {
        listn.push(numberchoose);
        console.log(listn);
        return numberchoose;
    }
}

//função de limpar a caixa de texto
function clearNumber() {
    chute = document.querySelector('input');
    chute.value = '';
}

//função de resetar o jogo
function resetGame(){
    secretnumber = randomNumber();
    clearNumber();
    viewIncialText();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    trys = 1;    
}