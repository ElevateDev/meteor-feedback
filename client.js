Feedback = {
  _vibrate: function( haptic ){
    if( navigator.vibrate ){
      navigator.vibrate( haptic );
    }
  }
};


/*
 * Setup the play function, dependent on platform
 */
if( Meteor.isCordova ){
  var mediaSuccess = function () { console.log("playAudio():Audio Success");};
  var mediaErr = function (err) {
      console.log(err.message);
      console.log( err.code );
    };
  Meteor.startup(function(){
    Feedback._play = function(path){
      var my_media = new Media( Meteor.absoluteUrl(path), mediaSuccess, mediaErr );
      my_media.play();
    }
  });
}else{
  Feedback._play = function(path){
    new Audio(path).play();
  } 
} 

/*
 * Feedback.provide finds the profile for the feedback, and calls neccessary functions.
 */
Meteor.startup(function(){
  Feedback.provide = function( profile ){
    var fdbk = this.profiles[profile];
    if( fdbk.vibrate ){
      Feedback._vibrate(fdbk.vibrate);
    }
    if( fdbk.sound ){
      Feedback._play( fdbk.sound );
    }
  }
});
