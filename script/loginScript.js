const cadastro = document.querySelector("#cadastrarBt");
const fechaCad = document.querySelector(".fecharCad");

function iniciaModal(modalId){
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');

    modal.addEventListener("click", (e)=>{
    if(e.target.id == modalId || e.target.className == 'fecharCad')
        modal.classList.remove('mostrar');
    })

}


cadastro.addEventListener("click", () => iniciaModal('modalCadastro'))

