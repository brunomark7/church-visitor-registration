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