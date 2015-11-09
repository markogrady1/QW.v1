var ScrollMovement = {

	preventDefault: function(e) {	
		e = e || window.event;
		if (e.preventDefault)
		    e.preventDefault();
		e.returnValue = false;  
	},
	keydown: function(e) {
		 var keys = [37, 38, 39, 40];
		for (var i = keys.length; i--;) {
	        if (e.keyCode === keys[i]) {
	            ScrollMovement.preventDefault(e);

	            return;
	        }
		 }
	},
	wheel: function(e) {
		ScrollMovement.preventDefault(e);
	},
	disableScroll: function() {
		if (window.addEventListener) {

      		window.addEventListener('DOMMouseScroll', this.wheel, false);
  		}
 	    window.onmousewheel = document.onmousewheel = this.wheel;

  	    document.onkeydown = this.keydown;
	},
	enableScroll: function() {
	    if (window.removeEventListener) {

	        window.removeEventListener('DOMMouseScroll', this.wheel, false);
	    }
	    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
	}


}