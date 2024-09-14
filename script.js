async function fetchGitHubData() {
    const username = 'BrunoRbt'; // Substitua pelo nome de usuário desejado
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        
        // Atualizando os dados no HTML
        document.getElementById('profile-avatar').src = data.avatar_url;
        document.getElementById('profile-name').innerText = data.name || 'Nome não disponível';
        document.getElementById('profile-username').innerText = `@${data.login}`;
        document.getElementById('repo-count').innerText = data.public_repos;
        document.getElementById('followers-count').innerText = data.followers;
        document.getElementById('following-count').innerText = data.following;
        document.getElementById('profile-link').href = data.html_url;
    } catch (error) {
        console.error('Houve um problema com a requisição Fetch:', error);
    }
}

// Chama a função para buscar os dados
fetchGitHubData();