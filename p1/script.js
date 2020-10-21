

Vue.component('round-detail', {
    data() {
        return {
        }
    },
    props: {
        'roundnumber': {
            type: Number,
            default: 1
        },
        'winner': {
            type: String,
            default: ''
        },
        'emoji': {
            type: String,
            default: ''
        },
        'color': {
            type: String,
            default: ''
        },
    },
    template: '#round-detail'
})

let app = new Vue({
    el: '#app',
    data: {
        possibleWords: [['avocado', 'greenyellow', '🥑'],
        ['habanero', 'coral', '🌶'],
        ['eggplant', 'rebeccapurple ', '🍆'],
        ['oyster', 'lightgrey', '🦪'],
        ['salmon', 'lightpink', '🍣']
        ],
        rounds: [],
        roundnumber: 1,
        guess: '',
        guessNumber: 0,
        guesses: [],
        lastWord: '',
        guessLimit: 8,
        feedbackString: '',
        gameOver: false,
    },
    computed: {
        randomWord() {
            return Math.floor(Math.random() * this.possibleWords.length);
        },
        displayWord() {
            return this.possibleWords[this.randomWord][0];
        },
        wordEmoji() {
            return this.possibleWords[this.randomWord][2];
        },
        backgroundColor() {
            return this.possibleWords[this.randomWord][1];
        },
        placeholderWord() {
            partialWord = "";
            split = this.displayWord.split('');
            for (var i = 0; i < this.displayWord.length; i++) {
                letter = split[i];
                nextLetter = ((this.guesses.includes(letter)) ? letter : '*');
                partialWord += nextLetter;
            }
            return partialWord;
        },
        guessesLeft() {
            return this.guessLimit - this.guessNumber;
        }
    },
    methods: {
        guessLetter() {
            console.log("guessLetter");
            this.guessNumber++;
            console.log(this.guess);
            this.guesses.push(this.guess);

            if (this.placeholderWord == this.displayWord) {
                console.log("win");
                this.gameOver = true;
                feedbackString = 'Correct, you won!';
                this.rounds.push({
                    number: this.roundnumber,
                    winner: 'Player',
                    emoji: this.wordEmoji
                })
                this.roundnumber++;
            }

            else if (this.guessNumber == this.guessLimit) {
                console.log("endgame");
                this.gameOver = true;
                this.feedbackString = 'Game over. maximum tries exceeded';
                this.rounds.push({
                    number: this.roundnumber,
                    winner: 'Computer',
                    emoji: this.wordEmoji,
                    color: this.backgroundColor
                })
                this.roundnumber++;
            }
            this.guess = '';
        },
        restartGame() {
            this.gameOver = false;
            this.guessNumber = 0;
            this.feedbackString = '';
        }
    }
});

