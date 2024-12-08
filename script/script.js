// Функція для відкриття модального вікна
function openModal(imageId) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    
    // Встановлюємо зображення для модального вікна
    modalImage.src = "images/" + imageId + ".jpg";
    
    // Показуємо модальне вікно
    modal.style.display = "flex";
}

// Функція для закриття модального вікна
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
