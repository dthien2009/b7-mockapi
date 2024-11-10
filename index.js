const articleContainer = document.querySelector(".container")
fetch('https://671e10601dfc429919812c56.mockapi.io/api/article/articles', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((articles) => {
    // Do something with the list of tasks
    console.log(articles)
    for (let i = 0; i < articles.length; i++) {
        const articleElement = document.createElement("div");
        articleElement.innerHTML =
            `<p class="blue">${articles[i].title}</p>
            <img class="img" src=${articles[i].image}/>`;
        articleContainer.appendChild(articleElement);
    }
}).catch(error => {
    // handle error
})