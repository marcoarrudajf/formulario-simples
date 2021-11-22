
//botão formulário
function criarBotao() {
    const mainForm = document.querySelector('.main-form');
    if (mainForm) {
        const botao = document.createElement('button');
        botao.innerText = 'Logar';
        botao.classList.add('btn-ativo');
        mainForm.appendChild(botao);

        //Quando clicar em logar abrirar uma outra pagina inicial, somente como teste 
        const abrirPag = document.querySelector('.pag-princ');
        abrirPag.style.display = 'none';
        function entrarPagina() {
            const acesso = abrirPag.classList.toggle('ativo')

            if (!acesso) {
                abrirPag.style.display = 'none'
            }
            else {
                abrirPag.style.display = 'flex'
                mainForm.style.display = 'none'
            }

        }
        botao.addEventListener('click', entrarPagina)

        //neste caso retornará ao formulário de login
        const login = document.querySelector('.voltar-login')
        console.log('teste')

        login.addEventListener('click', function () {
            if (login) {
                abrirPag.style.display = 'none'
                mainForm.style.display = 'flex'
                abrirPag.classList.remove('ativo')
            }
        })
    }
}
criarBotao();
