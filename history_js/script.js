// History.js example

(function(window){

  // Initialize History.JS
  var History = window.History; // Note: We are using a capital H instead of a lower h

  // Listening 'statechange' event: on pushState and click on back or forward buttons
  History.Adapter.bind(window,'statechange',function(){ 
    var State = History.getState(); 
    History.log(State.data, State.title, State.url);
  });  
    

})(window);
