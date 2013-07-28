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
 * and the addition of icons via the following interface.
 *
 * Usage:
 *
 *   var miniDockInstance = new NameSpace.MiniDock();
 *   var minidDockElement = miniDockInstance.render();
 *
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
 *  miniDockInstance.addIcon(options);
 */

// We creat a fake namespace where our dock widget can live:
var NameSpace = {} || NameSpace;

// We create our widget inside the following scope:
(function(NameSpace, window){
    // Some libraries we will be using:
    var document = window.document;
  /**
   * The Main Mini Dock constructor. We will call this when creating a new
   * instance of the dock.
   * @constructor
   * @return {Object}
   */
  var MiniDock = function(){
    var self = this;
    // We can call to our init method wich will take
    // care of actually creating the base elements for
    // our dock
    self.__init();
  };

  // We extend our MiniDock prototype with some private and interface methods:

  /**
   * Initializes the basic tempaltes we will be using to
   * @return {Null}
   */
  MiniDock.prototype.__init = function(){
    var self = this;
    // We initialize the dock holding container:
    self.__templates = {};
    // The master container for the dock:
    self.__templates.holdingContainer = document.createElement("div");
    self.__templates.holdingContainer.className = "__miniDock_holdingContainer";
    self.__templates.mainContainer = document.createElement("div");
    self.__templates.mainContainer.className = "__miniDock_container";
    self.__templates.holdingContainer.appendChild(
      self.__templates.mainContainer
      );
    // A base element for each icon. We will need to clone this:
    self.__templates.iconHolder = document.createElement("span");
    self.__templates.iconHolder.className = "__miniDock_icon";
  };

  /**
   * Render simply returns the DOM element representing the entire sidebar
   *
   * Usage:
   *
   *   var miniDock = new NameSpace.MiniDock();
   *   var minidDockElement = miniDock.render();
   *
   * @return {Object} DOM representation of the sidebar
   */
  MiniDock.prototype.render = function(){
    var self = this;
    return self.__templates.holdingContainer;
  };

  MiniDock.prototype.__renderIcon =  function(options){
    var self = this;
    // We create the icon element by creating a deep clone of the template:
    var iconElement = self.__templates.iconHolder.cloneNode(true);
    iconElement.innerHTML = "<img src='"+ options.iconURI +"'/>";
    iconElement.onclick = function(){
      alert('click');
      options.onClickCallback();
    };
    return iconElement;
  };

  /**
   * Adds a new icon to the dock container:
   *
   *  Usage:
   *    var options = {
   *       iconURI: "image/path/someImage.png",
   *       onClickCallback: function(){
   *           // This function will be called on click
   *       },
   *       onHoverCallback: function(){
   *           // This function will be called on hover
   *       },
   *       prettyName: "A pretty name to use for alt"
   *    };
   *    miniDockInstance.addIcon(options);
   *
   * @param  {Object} options, object containing info for new dock icon
   * @return {Null}
   */
  MiniDock.prototype.addIcon = function(options){
    var self = this;
    //self.__templates.iconHolder =
    var iconElement = self.__renderIcon(options);
    self.__templates.mainContainer.appendChild(iconElement);

  };
  // Adding the Mini Dock to the namespace we were supplied:
  NameSpace.MiniDock = MiniDock;
})(NameSpace, window);