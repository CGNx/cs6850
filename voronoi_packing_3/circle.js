var Circle = function(x, y, r) {
    ////////////////////////////////////////////////
    // Representation
    //
	this.x = x;			
	this.y = y;
	this.r = r;

	////////////////////////////////////////////////
	// Public methods
	//

	this.toString = function(){	
		return "center: (" + x + ", " + y + "), radius: " + r;
	}
}