footerForm.innerHTML = `
        <h2 class="feedback__title">Заказать</h2>
        <p class="feedback__subtile">Для заказа электронного пригласительного напишите нам в телеграм @pavel_allay, либо оставьте заявку и мы свяжемся с вами</p>
        <form class="feedback__form" onsubmit="send_mail(); return false;">
            <input class="feedback__form__input" type="text" placeholder="Имя*" id="customerName" required>
            <input class="feedback__form__input" type="text" placeholder="Телефон" id="customerPhone">
            <input class="feedback__form__input" type="email" placeholder="E-mail*" id="customerMail" required>
            <input class="feedback__form__input" type="text" placeholder="Telegram*" required id="customerTg">
            <textarea class="feedback__form__input feedback__form__textarea feedback__form__wide" placeholder="Описание задачи" oninput="auto_grow(this)" id="customerText"></textarea>
            <script>
                function auto_grow(element) {
                    element.style.height = "5px";
                    element.style.height = (element.scrollHeight) + "px";
                }
            </script>
            <label class="feedback__form__check feedback__form__wide">
                <input class="feedback__form__check--checkbox" type="checkbox" checked id="feedback__form-checkbox" required>
                <span class="feedback__form__check--checkbox-icon"></span>
                <p>Я согласен с <a href="/policy.html">правилами обработки персональных данных</a></p>
            </label>
            <button type="submit" class="feedback__form__button feedback__form__wide">Отправить<img src="../../assets/images/arrow.svg" alt="#"></button>
        </form>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <script src="scripts/form.js"></script>
`

footerForm.classList.add("feedback", "wow", "animate__animated", "ani-fromBottom");
footerForm.style.cssText = "margin: 160px auto 100px auto; max-width: 1280px; padding: 0 30px";