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

let input = document.querySelector('.check__input');
let btn = document.querySelector('.check__btn');
let answers = document.querySelector('.wrapper__answers');

const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

function handleClick(e) {
 e.preventDefault();
 let answer = input.value;

 if (isNaN(answer) == true) {
  const textError = 'Ошибка ввода! Ввести нужно только число';
  answers.insertAdjacentHTML(
   'beforeend',
   `<div class='answer__error'><p>Компьютер 1: ${answer}</p><p>Компьютер 2: ${textError}</p></div> `
  );
 } else if (answer > randomNumber) {
  const text = 'Меньше';
  answers.insertAdjacentHTML(
   'beforeend',
   `<div class='answer__attempt'><p>Компьютер 1: ${answer}</p><p>Компьютер 2: ${text}</p></div>`
  );
 } else if (answer < randomNumber) {
  const text = 'Больше';
  answers.insertAdjacentHTML(
   'beforeend',
   `<div class='answer__attempt'><p>Компьютер 1: ${answer}</p><p>Компьютер 2: ${text}</p></div>`
  );
 } else {
  const text = 'Угадал!';
  answers.insertAdjacentHTML(
   'beforeend',
   `<div class='answer__attempt'><p>Компьютер 1: ${answer}</p><p>Компьютер 2: ${text}</p></div>`
  );
  const newGame = confirm(`Угадал!\nЭто число ${answer}.\nСыграете еще раз?`);
  if (newGame == true) {
   location.reload();
  }
 }
}

btn.addEventListener('click', handleClick);
