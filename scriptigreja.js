const pop= document.getElementById('popupon')
const over= document.getElementById('overlay')
const form= document.getElementById('formvisitante')

function abrirpopup(){
    pop.style.display='block'
    over.style.display='block'
}

function fecharpopup(){
    pop.style.display='none'
    over.style.display='none'
    form.reset()
    
}
document.addEventListener('keydown', function(e){ //function(e) === (e) =>//
    if (e.key === 'Escape') {
        fecharpopup()}
})

function validacaodosdados(){
    var nome= document.getElementById('nome')
    var telefone= document.getElementById('telefone')
    const msg= document.getElementById('mensagemErro')
    if(nome.value.trim() === ''){
        msg.innerText='Preencha o campo Nome'
    } else if( telefone.value.length !== 11){
        msg.innerText='Preencha o campo Telefone'
    } else{
        sessionStorage.setItem('nomeguardado', nome.value)
        window.location.href='boasvindas.html'

    }
    
}