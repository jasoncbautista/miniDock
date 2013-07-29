A Simple Mini Dock
===

### Overview
The goal was to create a very simple dock of icons built using vanilla Javascript.

At a high level the dock looks as follows:
  ```html
       +--------+ +--------+ +--------+
       |        | |        | |        |
       |  icon  | | icon 2 | | icon 3 |
       |        | |        | |        |
       +--------+ +--------+ +--------+
   ```


### Sample Usage:

  ```javascript
    var miniDockInstance = new NameSpace.MiniDock();
    var options = {
      iconURI: "image/path/someImage.png",
      onClickCallback: function(){
           // This function will be called on click.
      }
    };
    miniDockInstance.addIcon(options);

    var minidDockElement = miniDockInstance.render();
    document.body.appendChild(miniDockElement);
  ```

### Notes

 - It lives at the bottom of the DOM elemnt it is attached to.
 - It is centered horizontally.

### Supported Browsers
    * Chrome 28
    * Firefox 22
    * Safari 6.02


### Demo
   Try the demo [here](http://jasoncbautista.github.io/miniDock/).
