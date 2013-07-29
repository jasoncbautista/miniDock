A Simple Mini Dock


### Overview
The goal was to create a very simple dock of icons built using vanilla Javascript


### Example:

    // Creating the dock:
    var miniDockInstance = new NameSpace.MiniDock();
    // Add an icon:
    var options = {
      iconURI: "image/path/someImage.png",
      onClickCallback: function(){
           // This function will be called on click
      }
    };
    miniDockInstance.addIcon(options);
    // Add the dock to the document body:
    var minidDockElement = miniDockInstance.render();
    document.body.appendChild(miniDockElement);



### Supported Browsers
    Chrome


### Demo
   http://jasoncbautista.github.io/miniDock/
