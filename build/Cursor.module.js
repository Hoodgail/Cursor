window.Cursor = class Cursor {
  constructor(size) {
    this.size = size;
    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.top = 0;
    this.domElement.style.left = 0;
    this.domElement.style.width = size + "px";
    this.domElement.style.height = size + "px";
  }
  disableDefaultMouse() {
    this.style = document.createElement("style");
    this.style.innerHTML = `*,*:hover{cursor:none !important;}`;
    document.body.append(this.style);
  }
  css(args) {
    if (args) {
      for (var style of Object.keys(args)) {
        this.domElement.style[style] = args[style];
      }
    }
  }
  updateSize(size) {
    this.size = size;
    this.domElement.style.width = size + "px";
    this.domElement.style.height = size + "px";
  }
  getPosition(event) {
    return {
      x: window.Event
        ? event.pageX
        : event.clientX +
          (document.documentElement.scrollLeft
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft),
      y: window.Event
        ? event.pageY
        : event.clientY +
          (document.documentElement.scrollTop
            ? document.documentElement.scrollTop
            : document.body.scrollTop),
    };
  }
  update(event) {
    this.position = this.getPosition(event);
    this.domElement.style.transform = `translate(${
      this.position.x - this.size / 2
    }px,${this.position.y - this.size / 2}px)`;
  }
  append() {
    document.body.append(this.domElement);
  }
};
export default Cursor
