export default class {
  onArrowLeft() {
    !this.prevDisabled && this.prev();
  }
  onArrowRight() {
    !this.nextDisabled && this.next();
  }
  onArrowUp() {
    this.zoomIn();
  }
  onArrowDown() {
    this.zoomOut();
  }
  onEnter() {
    this.fullScreenToggle();
  }
  onEscape() {
    this.toggleZoom();
  }
}
