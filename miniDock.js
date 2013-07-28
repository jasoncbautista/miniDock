/**
 * Mini Dock
 *
 * The mini dock lives at the bototm of the page and can tontain N number of
 * icons.
 *
 * At a high level the dock looks as follows:
 *
 *  +--------+ +--------+ +--------+
 *  |        | |        | |        |
 *  |  icon  | | icon 2 | | icon 3 |
 *  |        | |        | |        |
 *  +--------+ +--------+ +--------+
 *
 * All this dock supports is making the icons slightly larger on mouseover
 * and the addition and removal of icons via the following interface:
 *
 *  var options = {
 *     iconURI: "image/path/someImage.png",
 *     onClickCallback: function(){
 *         // This function will be called on click
 *     },
 *     onHoverCallback: function(){
 *         // This function will be called on hover
 *     },
 *     prettyName: "A pretty name to use for alt"
 *  };
 *  miniDockInstance.addIcon();
 */

// We creat a fake namespace where our dock widget can live:
var NameSpace = {} || NameSpace;

// We create our widget inside the following scope:
(function(NameSpace){
  alert("what's up dock");

  /**
   * The Main Mini Dock constructor. We will call this when creating a new
   * instance of the dock.
   * @constructor
   * @return {Object}
   */
  var MiniDock = function(){
  };
  // We will exteand it's prototype with some nice interface methods:


  MiniDock.prototype.addIcon = function(options){
    alert("adding icon..");
  };

  NameSpace.MiniDock = MiniDock;
}(NameSpace));