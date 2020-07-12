# Cursor
an api for durning mouse cursor to html
```js
import Cursor from "./Cursor.module.js"
var mouse = new Cursor(10);
var mouse.css({
  background: "red",
  borderRadius: "50px",
  boxShadow: "0px 0px 5px black",
  border: "solid 1px black",
  pointerEvents: "none",
  "z-index": "99999999999999999999999999999999999999",
});
var mouse.disableDefaultMouse();
var mouse.append();
```
