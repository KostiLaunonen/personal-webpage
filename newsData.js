const apiKey = 'pub_5642456d5c81594f27d17bfb05e3d188723fd';
const apiUrl = 'https://newsdata.io/api/1/news?apikey=' + apiKey + '&q=Oulu&language=fi';

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const newsContainer = document.getElementById('news-container');

        data.results.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-article');
            articleElement.innerHTML =
            `<h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.link}" target="_blank">Read More</a>`;
            newsContainer.appendChild(articleElement);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNews);