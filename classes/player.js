class Player {
  constructor(name) {
    this.name = name;
    this.isPlaying = false;
    this.isWinner = false;
  }

  getName() {
    return this.name;
  }

  getIsPlaying() {
    return this.isPlaying;
  }
  setIsPlaying(value) {
    this.isPlaying = value;
  }

  getIsWinner() {
    return this.isWinner;
  }

  setIsWinner(value) {
    this.isWinner = value;
  }
}