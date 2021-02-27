export default function initCEP() {

    const cep = document.getElementById('cep');
    const cepInput = cep.querySelector('input')
    const span = cep.querySelector('span')
    const btnCep = document.querySelector('#cep button')

    cepInput.addEventListener('keypress', target);

    function target(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
            callFetch();
        }
    }

    function callFetch() {
        
        const cepvalue = cepInput.value;
        const req = fetch(`https://viacep.com.br/ws/${cepvalue}/json`);

        req.then(response => {
            return response.json();
        })
        .then(text => {
            span.textContent = `Endereço: ${text.localidade} ${text.logradouro} ${text.complemento}`;
        }).catch(() => {
            span.textContent = 'Por favor, insira um CEP válido'
        })

    }

    btnCep.addEventListener('click', callFetch)
}