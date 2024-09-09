document.addEventListener('DOMContentLoaded', function() {
    var mapLink = document.getElementById('mapLink');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        mapLink.href = "geo:55.466214,37.599717";
    } else {
        mapLink.href = "https://yandex.ru/navi/org/due_to_love/57220165080/?ll=37.543268%2C55.390545&utm_source=share&z=11.35";
    }
});