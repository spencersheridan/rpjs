$(document).ready(function() {
    var parseApplicationId = '5qgIR3ZJSLYGJkJDYyAff5tvsFZQnjCSaYqvoVVw';
    var parseJavaScriptKey = 'vU2TlZF6ldZRoUTcT6tXo008AGJjhpk7kJVYoMnv';
    
    Parse.initialize(parseApplicationId, parseJavaScriptKey);
    
    var Test = Parse.Object.extend("Test");
    var test = new Test();
    
    test.save({
        name:'John',
        text:'butt'},
              {
                  success: function(object) {
                    console.log('Parse.com object is saved: ' + object);
                  },
                  error: function(object) {
                    console.log('Error: ' + object);
                  }
              });
                  
});