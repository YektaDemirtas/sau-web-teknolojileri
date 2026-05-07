const API_KEY = "10dd56f0f92535535f23b1401c87fa11";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const selectedItems = [
    { title: "Ezel", type: "tv" },
    { title: "Behzat Ç.", type: "tv" },
    { title: "G.O.R.A", type: "movie" },
    { title: "The Lord of the Rings: The Return of the King", type: "movie" },
    { title: "Sherlock", type: "tv" },
    { title: "Person of Interest", type: "tv" }
];

document.addEventListener("DOMContentLoaded", loadSelectedItems);

function loadSelectedItems() {
    const resultArea = document.getElementById("apiResult");
    const statusArea = document.getElementById("apiStatus");

    resultArea.innerHTML = "";
    statusArea.innerHTML = "Film ve dizi bilgileri yükleniyor...";

    selectedItems.forEach(item => {
        fetchItemFromApi(item.title, item.type);
    });
}

function fetchItemFromApi(title, type) {
    const resultArea = document.getElementById("apiResult");
    const statusArea = document.getElementById("apiStatus");

    const endpoint = type === "movie" ? "movie" : "tv";

    const url =
        "https://api.themoviedb.org/3/search/" + endpoint +
        "?api_key=" + API_KEY +
        "&query=" + encodeURIComponent(title) +
        "&language=tr-TR" +
        "&region=TR" +
        "&include_adult=false";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.results || data.results.length === 0) {
                return;
            }

            const item = data.results[0];
            createCard(item, type);

            statusArea.style.display = "none";
        })
        .catch(error => {
            statusArea.className = "alert alert-danger";
            statusArea.innerHTML = "API verisi alınırken hata oluştu.";
            console.error(error);
        });
}

function createCard(item, type) {
    const resultArea = document.getElementById("apiResult");

    const title = item.title || item.name || "Başlık yok";
    const date = item.release_date || item.first_air_date || "Tarih bilgisi yok";
    const description = item.overview || "Açıklama bulunamadı.";
    const vote = item.vote_average ? item.vote_average.toFixed(1) : "Puan yok";
    const contentType = type === "movie" ? "Film" : "Dizi";

    const image = item.poster_path
        ? IMAGE_BASE_URL + item.poster_path
        : "https://via.placeholder.com/500x750?text=Gorsel+Yok";

    resultArea.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${image}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p><strong>Tür:</strong> ${contentType}</p>
                    <p><strong>Yayın Tarihi:</strong> ${date}</p>
                    <p><strong>Puan:</strong> ${vote}</p>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `;
}