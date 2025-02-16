document.body.insertAdjacentHTML(
 'beforeend',
 `<div class='wrapper'>
    <div class='canvas'>
       <div class='wrapper__task'>
        <p class='task__content'>Попробуй угадай число от 1 до 100 </p>
      </div>
      <div class='wrapper__check'>
        <label for="check__input" class="check__label">Ваше число: </label>
        <input type="text" class="check__input" />
        <button class="check__btn">Проверить</button>
      </div>
      <div class='wrapper__answers'></div>
    </div>
    </div>`
);

const input = document.querySelector('.check__input');
const btn = document.querySelector('.check__btn');
const answers = document.querySelector('.wrapper__answers');


const randomNumber = Math.floor(Math.random() * 100 + 1);


