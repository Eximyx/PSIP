class WordGuessGame {
    constructor() {
        this.secretWord = 'ФЫВ';
        this.attempts = 6;
        this.guessInput = document.getElementById('guess-input');
        this.guessButton = document.getElementById('guess-button');
        this.resultElement = document.getElementById('result');
        this.attemptsElement = document.getElementById('attempts');

        this.guessButton.addEventListener('click', this.handleGuess.bind(this));
    }

    handleGuess() {
        const guess = this.guessInput.value.toUpperCase();
        this.guessInput.value = '';

        if (guess === this.secretWord) {
            this.resultElement.hidden = false;
            this.resultElement.innerText = 'Результат: Вы угадали слово!';
            this.guessButton.disabled = true;
        } else {
            this.attempts--;
            this.attemptsElement.innerText = `Осталось попыток: ${this.attempts}`;

            if (this.attempts === 0) {
                this.resultElement.innerText = `Результат: Секретное слово - ${this.secretWord}`;
                this.guessButton.disabled = true;
            } else {
                this.resultElement.innerText = 'Результат: Вы не угадали слово. Попробуйте еще раз!';
            }
        }
    }
}

const game = new WordGuessGame();