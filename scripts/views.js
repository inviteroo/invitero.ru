document.addEventListener('DOMContentLoaded', () => {
    const previewContainer = document.querySelector('.preview__container');
  
    const tabContents = {
        '0': `
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/wedding/minimalism.jpg" alt="#">
                </div>
                <p class="preview__desc">“Minimalism” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/wedding/minimalism/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/wedding/day.jpg" alt="#">
                </div>
                <p class="preview__desc">“Day” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/wedding/day/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/wedding/wonder.jpg" alt="#">
                </div>
                <p class="preview__desc">“Wonder” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/wedding/wonder/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/wedding/esthetic.jpg" alt="#">
                </div>
                <p class="preview__desc">“Esthetic” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/wedding/esthetic/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
        `,
        '1': `
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/birth-day/love.jpg" alt="#">
                </div>
                <p class="preview__desc">“Love” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/birth-day/love/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
            <div class="preview__content">
                <div class="phone">
                    <img class="phone__frame" src="./images/phone/phone_frame.svg" alt="#">
                    <img class="phone__screen" src="./images/phone/birth-day/contrast.jpg" alt="#">
                </div>
                <p class="preview__desc">“Contrast” - 4 000 ₽</p>
                <nav class="preview__actions">
                    <a class="preview__button button" href="./demo/birth-day/contrast/index.html">демо</a>
                    <a class="preview__button button" href="#">заказать</a>
                </nav>
            </div>
        `
    };
  
    function updateContent(index) {
      if (tabContents[index] !== undefined) {
        previewContainer.innerHTML = tabContents[index];
      }
    }
  
    window.addEventListener('tabChange', (event) => {
      updateContent(event.detail);
    });
});
  