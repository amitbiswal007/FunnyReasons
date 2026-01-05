const copyBtn = document.getElementById('copyBtn')
const newBtn = document.getElementById('newBtn')
const reasonText = document.getElementById('reasonText')

async function getReasons() {
    const apiURL = 'https://naas.isalman.dev/no'
    const reasonDiv = document.getElementById('reasonText')

    let apiResponse = await fetch(apiURL)  
    let jsonResponse = await apiResponse.json()

    reasonDiv.innerText = jsonResponse.reason
}

getReasons();

newBtn.addEventListener('click', getReasons)

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(reasonText.innerText)
})

