Feedback = {
  sound: {  
  }
};


/*
 * Setup the play function
 */
if( Meteor.isCordova ){
  var mediaSuccess = function () { console.log("playAudio():Audio Success");};
  var mediaErr = function (err) {
      console.log(err.message);
      console.log( err.code );
    };
  Meteor.startup(function(){
    Feedback.sound._play = function(path){
      var my_media = new Media( Meteor.absoluteUrl(path), mediaSuccess, mediaErr );
      my_media.play();
    }
  });
}else{
  Feedback.sound._play = function(path){
    new Audio(path).play();
  } 
} 

/*
 * Setup the provide function 
 */
Meteor.startup(function(){
  Feedback.provide = function( profile ){
    var fdbk = this.profiles[profile];
    if( fdbk.vibrate ){
      navigator.vibrate(fdbk.vibrate);
    }
    if( fdbk.sound ){
      Feedback.sound._play( fdbk.sound );
    }
  }
});
