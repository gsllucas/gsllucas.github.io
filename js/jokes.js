export default function initJokes() {
    
    const spanJokes = document.querySelector('#jokes span')
    const nextButton = document.querySelector('#next')


    function callJokesAPI() {
        fetch("https://api.chucknorris.io/jokes/random").then(response => {
            return response.json();
        }).then(item => {
            spanJokes.textContent = item.value
        })
    }

    callJokesAPI();

    nextButton.addEventListener('click', callJokesAPI)

}
