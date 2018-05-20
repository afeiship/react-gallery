export default class {
  get docRoot() {
    return document.documentElement;
  }

  get isFullScreen() {
    return document.webkitFullscreenElement;
  }

  fullScreenEnter() {
    return document.documentElement.webkitRequestFullScreen();
  }

  fullScreenExit() {
    return document.webkitExitFullscreen();
  }

  fullScreenToggle() {
    return this.isFullScreen ? this.fullScreenExit() : this.fullScreenEnter();
  }
}
