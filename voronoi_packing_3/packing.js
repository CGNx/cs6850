// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {

	var delay = true;

	var SQUARE_SIZE = 600;
	var UNIT = 20;
	var RADIUS_PER_UNIT = 1;
	var RADIUS = RADIUS_PER_UNIT * UNIT;
	var DEFAULT_NUM_CIRCLES = 50;

	var GRID_WIDTH = RADIUS * 6;

	var circles = [];
	var regions = [];

  var diagcount = 0;
  var nondiagcount = 0;

	var canvas = document.getElementById('circle-canvas');      
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle="gray";
  ctx.lineWidth = 2;

  var gridCanvas = document.getElementById('grid-canvas');      
  var gridCtx = gridCanvas.getContext('2d');
  gridCtx.strokeStyle="black";
  gridCtx.lineWidth = 1;

  var overlayCanvas = document.getElementById('overlay-canvas');      
  var overlayCtx = overlayCanvas.getContext('2d');
  gridCtx.fillStyle="black";

  //clears entire canvas
  function clearContext(context) {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
  }

  //Given a canvas, returns a random location on the canvas that does not touch the edges
  function randLocOnCanvas(canvas, r) {
    return (canvas.width - 2*r) * Math.random() + r;
  }

  //Draws the circle on the context
  function drawCircle(context,circle) {
    context.beginPath();
    context.arc(circle.x,circle.y,circle.r,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
  }

  function checkTextboxChanged() {
  	var currentValue = $('#grid-width').val();
  	if(!isNaN(currentValue) && currentValue != '') {
      var currentValue = parseFloat(currentValue)*UNIT;
      if (currentValue > 0 && currentValue != GRID_WIDTH) {
      	if (currentValue > SQUARE_SIZE) {
      		alert('Grid Width must be less than ' + Math.floor(SQUARE_SIZE / UNIT));
      		$('#grid-width').val('6');
      	} 
        GRID_WIDTH = $('#grid-width').val()*UNIT;
        drawGrid(gridCtx, GRID_WIDTH);        
      }
    }
  }

  function drawGrid(context, width) {
  	clearContext(context);

  	context.beginPath();
  	for (var x = 0; x <= SQUARE_SIZE; x += width) {
      context.moveTo(x, 0);
      context.lineTo(x, SQUARE_SIZE);
    }
    for (var y = 0; y <= SQUARE_SIZE; y += width) {
      context.moveTo(0, y);
      context.lineTo(SQUARE_SIZE, y);
    }
    context.stroke();
  }

  //Finds the position of the mouse relative to the canvas.
  //Input: canvas and a mousemove event location on page.
  function getCanvasPos(canvas, x, y) {
    var rect = canvas.getBoundingClientRect();
    return {x: x - rect.left - 5, y: y - rect.top - 5}; //subtract 5 for border
  }

  function handleClick(e) {
  	var pos = getCanvasPos(canvas, e.clientX, e.clientY);
  	if (pos.x > RADIUS &&
  			pos.x < SQUARE_SIZE - RADIUS &&
  			pos.y < SQUARE_SIZE - RADIUS &&
  			pos.y > RADIUS) {

	  	var c = new Circle(pos.x, pos.y, RADIUS);
	  	drawCircle(ctx, c); //update view
	  	circles.push(c); //update model
	  }
  }

  function handleGenerateCircles(e) {
  	var numCircles = $('#num-circles').val();
  	numCircles = numCircles != '' ? numCircles : DEFAULT_NUM_CIRCLES;

  	if(!isNaN(numCircles)) {
	  	clearContext(ctx);
	  	circles = [];
	  	var numCircles = parseInt(numCircles);
	  	for (var i = 0; i < numCircles; i++) {
	  		var c = new Circle(randLocOnCanvas(canvas, RADIUS),
	  											 randLocOnCanvas(canvas, RADIUS),RADIUS);
	    	drawCircle(ctx, c);
	    	circles.push(c); 
	  	}
	  }
  }

  //Creates an nxn matrix
  function Create2DArray(n) {
	  var arr = [];
	  for (var i=0;i<n;i++) {
	     arr[i] = new Array(n);
	     for (var j=0;j<n;j++) {
		     arr[i][j] = [];
		  }
	  }

	  return arr;
	}

	function isOnGrid(circle) {
		var x = circle.x;
		var y = circle.y;
		var r = circle.r;
		return GRID_WIDTH - x%GRID_WIDTH < r ||
					 x%GRID_WIDTH < r ||
					 GRID_WIDTH - y%GRID_WIDTH < r ||
					 y%GRID_WIDTH < r;
	}

  var data = [2,2,8,7,14,
      1,6,4,2,6,
      15,25,4,1,12,
      9,5,4,4,2,
      3,4,1,3,1];

  function createRegions() {
  	var numRegions = Math.ceil(SQUARE_SIZE / GRID_WIDTH);
  	regions = Create2DArray(numRegions);
  	for (var i = 0; i < circles.length; i++) {
  		var c = circles[i];
  		if (!isOnGrid(c)) {
  			var col = Math.floor(c.x / GRID_WIDTH);
  			var row = Math.floor(c.y / GRID_WIDTH);
  			regions[row][col].push(c);
  		}
  	}
  }

  function drawRegions(context) {
  	clearContext(context);
  	for (var row = 0; row < regions.length; row ++) {
  		for (var col = 0; col < regions.length; col ++) {
  			for (var i = 0; i < regions[row][col].length; i++) {
  				drawCircle(context, regions[row][col][i]);
  			}
  		}
  	}
  }

  function powerset(arr) {
    var ps = [[]];
    for (var i=0; i < arr.length; i++) {
      for (var j = 0, len = ps.length; j < len; j++) {
        ps.push(ps[j].concat(arr[i]));
      }
    }
    return ps;
	}

  //Input: two circles
  //Returns true if circles overlap
  function overlappingCircles(c1, c2) {
    var dx = c2.x - c1.x;
    var dy = c2.y - c1.y;
    var dist = Math.sqrt(dx*dx + dy*dy);
    return dist < c1.r + c2.r
  }

  //Input: array of circles
  //Returns false if any two circles overlap
  function noCirclesOverlap(arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length; j++) {
				if (arr[i] != arr[j] && overlappingCircles(arr[i],arr[j])) {
					return false;
				}
			}
		}
		return true;
  }

	//Given a powerset (array of arrays) of circles
	//Returnsuf the array with the most non-overlapping circles.
	function maxSet(ps) {
		var maxIndex = -1;
		var max = 0;
		//For each set in the powerset
		for (var i = 0; i < ps.length; i++) {
			if(noCirclesOverlap(ps[i]) &&  ps[i].length > max) {
				maxIndex = i;
				max = ps[i].length;
			}

  	}

  	return maxIndex != -1 ? ps[maxIndex] : [];

	}

	function drawOverlay(context, row, col) {
		clearContext(overlayCtx);
    context.fillStyle="black";
		context.fillRect(col*GRID_WIDTH,
								 row*GRID_WIDTH,
								 GRID_WIDTH,
								 GRID_WIDTH);
    context.fillStyle="white";
    context.font="40px Helvetica";
    context.fillText(data[row*5 + col],col*GRID_WIDTH+50,70+row*GRID_WIDTH);
	}

	//Enumerate all possibilities in each region
  function packRegions(context) {

  	if (!delay) {
			for (var row = 0; row < regions.length; row ++) {
	  		for (var col = 0; col < regions[row].length; col ++) {
	  			var ps = powerset(regions[row][col]);
	  			regions[row][col] = maxSet(ps);
	  			drawRegions(ctx);
	  		}
	  	}
	  	$('#reset').prop('disabled', false);
	  } else {
			var row = 0; 
			var col = 0;                   

			function simulate () {           
		   setTimeout(function () {
        nondiagcount += data[row*5 + col] 
        if(row + col == 4) {
          diagcount += data[row*5 + col]
          nondiagcount -= data[row*5 + col] 
        }
		    console.log("row: " + row + "col: " + col);  
				var ps = powerset(regions[row][col]);
				regions[row][col] = maxSet(ps);
				drawOverlay(overlayCtx, row, col);
				drawRegions(ctx); 
        
        
				col++;
      
	      if(col % regions.length == 0) {
	      	row++;
	      	col = 0;
	      }                    
	      if (row < regions.length) {           
	         simulate(); 
	      } else {	      	
	         clearContext(overlayCtx);
	         $('#reset').prop('disabled', false);
	      }
        $('#diag-count').html('<p>' + diagcount + '</p>');
        $('#non-diag-count').html('<p>' + nondiagcount + '</p>');          
			}, 500)}

			simulate();
		}
  }

  function handleReset(e) {
  	clearContext(ctx);
  	$('#grid-canvas').css({opacity:1});
  	regions = [];
    circles = [];
		$('input, select').prop('disabled', false);
		$('#reset').prop('disabled', true);
  }

  function handleRunAlgorithm(e) {

  	if (circles.length == 0) {
  		//alert('Reset/Add Circles before running the algorithm.');
  	}

  	$('input, select').prop('disabled', true);
  	createRegions();
  	drawRegions(ctx);
  	packRegions(ctx);

  	var duration = delay ? 500*regions.length*regions.length : 500;
	  $('#grid-canvas').animate({
		  opacity: 0.05
		  }, duration, function() {
		  // Animation complete.
      $('#left-panel').html('<h5>Average Number of Faces for i=j</h5>'+
      '<aside id="diag-avg">'+diagcount/5 +'</aside><hr>'+
      '<h5>Average Number of Faces for i/=j</h5>'+
      '<aside id="non-diag-avg">'+ nondiagcount/20 +'</aside>');
	  });
  }

  function handleToggleDelay(e) {
  	delay = delay ? false : true;
  	var text = delay ? 'On.' : 'Off.';
  	$("#toggle-delay").attr("value", "Simulation Delay " + text);
  }

  $('#circle-canvas').click(handleClick);
  $('#add-circles').click(handleGenerateCircles);
  $('#run').click(handleRunAlgorithm);
  $('#toggle-delay').click(handleToggleDelay);
  $('#reset').click(handleReset);

  $('input, select').prop('disabled', false);
  $('#reset').prop('disabled', true);
  setInterval(checkTextboxChanged, 500);
  drawGrid(gridCtx, GRID_WIDTH);
});