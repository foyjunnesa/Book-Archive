const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);

    // Clear Data
    searchField.value = '';

    // Load Data 
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if (docs.length == 0) {
        result = 'positive';
    }
    else {
        result = 'NOT Found';
    }
    return result;
    docs.forEach(docs => {
        // console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${docs.title}</h5>
    <p class="card-text"><span"> <a href="Author name:">Author name:</a></span> ${docs.author_name}</p>
    <footer <span"> <a href="First publish:">First publish:</a></span>${docs.first_publish_year}</footer>
                </div >
            </div >
        </div >
        
    `
        searchResult.appendChild(div);
    });
}