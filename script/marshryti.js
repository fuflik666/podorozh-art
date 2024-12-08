document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const routeType = document.getElementById('route-type').value;

    const routeCards = document.querySelectorAll('.route-card');
    routeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const type = card.querySelector('p').textContent.toLowerCase();

        if ((title.includes(searchQuery) || searchQuery === '') && 
            (routeType === '' || type.includes(routeType))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50.4501, lng: 30.5236 }, // Київ як стандарт
        zoom: 2
    });

    // Маршрут до Японії
    var marker = new google.maps.Marker({
        position: { lat: 35.6762, lng: 139.6503 }, // Токіо
        map: map,
        title: 'Токіо, Японія'
    });

    // Маршрут до Австрії
    var marker2 = new google.maps.Marker({
        position: { lat: 48.2082, lng: 16.3738 }, // Відень
        map: map,
        title: 'Відень, Австрія'
    });

    // Додаткові маркери для інших маршрутів...
}
