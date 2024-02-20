class AlbumManager {
    constructor() {
        this.albumListElement = document.getElementById("swiper");
        this.photoGridElement = document.getElementById("photoGrid");
        this.swiperWrapper = document.getElementById("swiperWrapper");
    }

    async fetchAlbums() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/albums?_limit=12"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch albums.");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching albums:", error);
            return [];
        }
    }

    async fetchPhotos(albumId) {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch photos.");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching photos:", error);
            return [];
        }
    }

    async renderAlbums() {
        const albums = await this.fetchAlbums();
        albums.forEach((album) => {
            const albumItem = document.createElement("div");
            albumItem.classList.add("swiper-slide");
            const randomIcon = this.getRandomBootstrapIcon();
            albumItem.innerHTML = `
                <div class="card">
                    <div class="card-body text-center">
                        <h3 class="card-title">${album.title}</h3>
                        <p class="card-text">Album ID: ${album.id}</p>
                        <span class="bi ${randomIcon}"></span>
                    </div>
                </div>
            `;
            albumItem.addEventListener("click", async () => {
                const albumId = album.id;
                window.location.href = `photos.html?albumId=${albumId}`;
            });
            this.swiperWrapper.appendChild(albumItem);
        });
    }

    async renderPhotos(albumId) {
        const photos = await this.fetchPhotos(albumId);
        this.photoGridElement.innerHTML = "";
        photos.forEach((photo) => {
            const photoElement = document.createElement("div");
            photoElement.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
            photoElement.innerHTML = `
                <div class="card">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                    <div class="card-body">
                        <h5 class="card-title">${photo.title}</h5>
                    </div>
                </div>
            `;
            this.photoGridElement.appendChild(photoElement);
        });
    }

    getRandomBootstrapIcon() {
        const icons = [
            "bi-heart",
            "bi-star",
            "bi-bookmark",
            "bi-chat",
            "bi-lightning",
            "bi-sun",
            "bi-cloud",
            "bi-umbrella",
            "bi-speedometer",
            "bi-star-fill",
            "bi-telephone",
            "bi-watch",
            "bi-window",
        ];
        return icons[Math.floor(Math.random() * icons.length)];
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const albumManager = new AlbumManager();

    const albumId = new URLSearchParams(window.location.search).get("albumId");
    if (albumId) {
        await albumManager.renderPhotos(albumId);
    } else {
        await albumManager.renderAlbums();
    }

    const swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        direction: "horizontal",
        loop: true,
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
