var canvas = document.getElementById("canvas");
 var context = canvas.getContext("2d");
 var distanceScaleFactorX = 0.05;
 var distanceScaleFactorY = 0.05;
 var initialNumberOfPoints = 50;
 var points;
 var originX;
 var originY;
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 originX = canvas.width / 2;
 originY = canvas.height / 2;
 function clear() {
    context.fillStyle = "rgba(0, 0, 0, 0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);
 }
 clear();
 function generateRandomPoints(numberOfPoints) {
    var generatedPoints = [];
    for (var i = 0; i < numberOfPoints; i++) {
        var point = generateRandomPoint();
        generatedPoints.push(point);
    }
    return generatedPoints;
 }
 function generateRandomPoint() {
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var point = {
        x: x - originX,
        y: y - originY
    };
    return point;
 }
 points = generateRandomPoints(initialNumberOfPoints);
 function drawPoints(pointsToDraw) {
    for (var i = 0; i < pointsToDraw.length; i++) {
        context.fillStyle = "white";
        context.fillRect(pointsToDraw[i].x + originX,
		   pointsToDraw[i].y + originY, 1, 1);
    }
 }
 drawPoints(points);
 function movePoints(pointsToMove) {
    for (var i = 0; i < pointsToMove.length; i++) {
        pointsToMove[i].x += +pointsToMove[i].x * distanceScaleFactorX;
        pointsToMove[i].y += +pointsToMove[i].y * distanceScaleFactorY;
        if (pointsToMove[i].x < -(canvas.width / 2) ||
		   pointsToMove[i].x > (canvas.width / 2) ||
		     pointsToMove[i].y < -(canvas.height / 2) ||
			 pointsToMove[i].y > (canvas.height / 2)) {
              pointsToMove.splice(i, 1);
        }
    }
 }
 setInterval(function fly() {
    clear();
    drawPoints(points);
    points = points.concat(generateRandomPoints(initialNumberOfPoints));
    movePoints(points);
 }, 10);
