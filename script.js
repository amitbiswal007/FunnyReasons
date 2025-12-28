const copyBtn = document.getElementById('copyBtn')
const newBtn = document.getElementById('newBtn')
const reasonText = document.getElementById('reasonText')

function getReasons() {
    const apiURL = 'https://naas.isalman.dev/no'
    const reasonDiv = document.getElementById('reason-text')


    let apiResponse = fetch(apiURL) //TODO - This gives CORS error, need to fix it at API layer


}

getReasons();

newBtn.addEventListener('click', getReasons)

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(reasonText.innerText)
})

