A Simple Mini Dock


### Overview
The goal was to create a very simple dock of icons built using vanilla Javascript


 * At a high level the dock looks as follows:

+--------+ +--------+ +--------+
|        | |        | |        |
|  icon  | | icon 2 | | icon 3 |
|        | |        | |        |
+--------+ +--------+ +--------+

### Example:

    var miniDockInstance = new NameSpace.MiniDock();
    var minidDockElement = miniDockInstance.render();

    var options = {
      iconURI: "image/path/someImage.png",
      onClickCallback: function(){
           // This function will be called on click
      }
    };
    miniDockInstance.addIcon(options);




### Supported Browsers
    Chrome


### Demo
   http://jasoncbautista.github.io/miniDock/
