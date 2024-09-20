const cardContainer = document.getElementById('card-container');


const usernames = ['manoloadsc', 'motta-phenrique', 'bklieger-groq', 'pjhyett', 'andrewpareles'];


function fetchGitHubData(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .catch(error => console.error('Erro ao obter dados:', error));
}


function createCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardContent = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <h2>${user.name || user.login}</h2>
        <p>Tecnologias principais: ${user.language || 'Desconhecido'}</p>
        <a href="${user.html_url}" target="_blank">Ver perfil no GitHub</a>
    `;

    card.innerHTML = cardContent;
    cardContainer.appendChild(card);
}

function loadGitHubUsers() {
    usernames.forEach(username => {
        fetchGitHubData(username)
            .then(user => {
                if (user) {
                    createCard(user);
                }
            });
    });
}


loadGitHubUsers();