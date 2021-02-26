import * as Engine from "/engine/engine.js"

export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    this.words = ["horse", "cow", "chicken", "rooster", "sheep", "pig", "goat", "rabbit", "bunny", "chick", "snake", "dog", "cat"]
    this.word = this.words[Math.floor(Math.random() * this.words.length)]
    console.log(this.word);
    this.guesses = [];
    this.booted = false;
    this.gameOver = false;
    this.maxGuesses = 5;
  }
  update() {
    //Update the score
    let score = this.gameObject.getComponent("ScoreComponent").score;
    if (score >= this.maxGuesses) {
      this.gameObject.getComponent("SceneChangerComponent").lose();
      this.gameOver = true;
    }
    let screenTextComponent = this.gameObject.getComponent("ScreenTextComponent");
    screenTextComponent.string = score + "/" + this.maxGuesses;
    if (!this.booted) {
      this.booted = true;
      this.updateStrings();
    }
  }
  updateStrings() {
    //Update the guessed word
    let correctText = Engine.SceneManager.currentScene.getGameObject("CorrectText");
    let correctTextComponent = correctText.getComponent("ScreenTextComponent")
    let maskedString = "";
    for (let i = 0; i < this.word.length; i++) {
      let char = this.word[i];
      if (this.guesses.includes(char)) {
        maskedString += char;
      }
      else {
        maskedString += "?"
      }
    }
    correctTextComponent.string = maskedString;
    if (!maskedString.includes("?")) {
      this.gameObject.getComponent("SceneChangerComponent").win();
      this.gameOver = true;
    }


    //Update the used letters
    let guessedLetters = Engine.SceneManager.currentScene.getGameObject("GuessedLetters");
    let guessedLettersComponent = guessedLetters.getComponent("ScreenTextComponent");
    guessedLettersComponent.string = this.guesses.join(", ")



  }
  onKeyDown(event) {
    if (this.gameOver) return;
    let keys = Object.keys(event);
    console.log(keys)
    for (let key of keys) {

      //Regex from https://stackoverflow.com/a/8653681/10047920
      if (!this.guesses.includes(key.toLowerCase()) && key.match(/^[a-zA-Z]$/)) {
        this.guesses.push(key.toLowerCase());
        if (!this.word.includes(key.toLowerCase())) {
          this.gameObject.getComponent("ScoreComponent").score++;
        }
      }
    }
    this.updateStrings()
  }

}