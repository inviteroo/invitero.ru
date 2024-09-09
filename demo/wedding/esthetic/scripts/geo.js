document.addEventListener('DOMContentLoaded', function() {
    var mapLink = document.getElementById('mapLink');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        mapLink.href = "geo:44.033994,43.083397";
    } else {
        mapLink.href = "https://yandex.ru/navi/org/park_rodnik/1300561529/?ll=43.083397%2C44.033994&utm_source=share&z=16.27";
    }
});