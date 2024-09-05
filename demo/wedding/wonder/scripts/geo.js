document.addEventListener('DOMContentLoaded', function() {
    var mapLink = document.getElementById('mapLink');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        mapLink.href = "geo:55.779274,37.620543";
    } else {
        mapLink.href = "https://yandex.ru/maps/213/moscow/?ll=37.622163%2C55.779175&mode=poi&poi%5Bpoint%5D=37.620101%2C55.779260&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1221353156&z=17.21";
    }
});