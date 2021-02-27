export default function initBitcoin() {

    const spanBitcoin = document.querySelector('#bitcoin span')
    const btnBitcoin = document.querySelector('#bitcoin button')



    function bitcoinValue() {

        fetch('https://blockchain.info/ticker').then(response => {
            return response.json()
        }).then(item => {
            spanBitcoin.textContent = ("R$ " + item.BRL.buy).replace('.', ',');
        }).catch((error) => {
            spanBitcoin.textContent = 'Não foi possível atualizar o valor';
        })
        
    }

    setInterval(bitcoinValue, 10*60*1000)

    btnBitcoin.addEventListener('click', bitcoinValue)

    bitcoinValue();

}



