const api_Url = "https://api.quotable.io/random";
const quote = document.querySelector('.quote');
const auth = document.querySelector('.author');
const button = document.querySelector('#new')
async function getQuote(url) {
    try {
        const responce = await fetch(url);
        var data = await responce.json();
        changeData(data.content);
        changeAuthor(data.author);
    }
    catch {
        alert('Error!')
    }
}
function changeData(content_data) {
    quote.innerHTML = content_data;
}
function changeAuthor(author_data) {
    auth.innerHTML = author_data;
}
getQuote(api_Url);
button.addEventListener('click', () => {
    getQuote(api_Url);
})
