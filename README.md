This package provides feedback (vibrate, sound) to both Cordova and Browser.

# Profile Setup

    Feedback.profiles = {
      "somethingHappened": {
        sound: "/sounds/playSomething.mp3",
        vibrate: [500,50,500,50,100] 
      }
    }

and to trigger it 

    Feedback.provide("somethingHappened");

# Cordova
The package handles importing the necessary plugins from cordova and abstracting any differences in calling methods.
