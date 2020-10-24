class Square {
  constructor(index) {
    this.self = this.createSelf(index);
    this.isClicked = false;
    this.value = '';
    this.index = this.assignIndex();
  }

  createSelf(index) {
    const div = document.createElement('div');
    div.setAttribute('index', index);
    return div;
  }

  assignIndex() {
    return this.index = Number(this.self.attributes[0].nodeValue);
  }

  getIsClicked() {
    return this.isClicked;
  }

  setIsClicked(value) {
    this.isClicked = value;
  }

  setValue(value) {
    this.value = value;
    console.log(`square with index ${this.index} is set to ${value}`);
    this.setIsClicked(true);
  }

  getValue() {
    return this.value;
  }
}