
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i) =>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
}

escrevendoLetra()

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')

    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    });
}

function sobreMim(){

    const divExperiencia = document.querySelectorAll('.experiencia_conteudo div');
    const liExperiencia = document.querySelectorAll('.experiencia_conteudo ul li');
    const divEducacao = document.querySelectorAll('.educacao_conteudo div');
    const liEducacao = document.querySelectorAll('.educacao_conteudo ul li');

    divExperiencia[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    divEducacao[0].classList.add('ativo')
    liEducacao[0].classList.add('ativo')

    //função para slide de expereiencia
    function slideShowExperiencia(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    } 
//função para slide de educação
    function slideShowEducacao(index){
        divEducacao.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducacao.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducacao[index].classList.add('ativo');
        liEducacao[index].classList.add('ativo');
    } 

    liExperiencia.forEach((event, index)=> {
        event.addEventListener('click', ()=> {
            slideShowExperiencia(index)
        });
    });

    liEducacao.forEach((event, index)=> {
        event.addEventListener('click', ()=> {
            slideShowEducacao(index)
        });
    });
}
sobreMim();