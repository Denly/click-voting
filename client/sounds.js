

Template.hello.events({
    'click .button': function () {
    	
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'shoot2.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
    }
});