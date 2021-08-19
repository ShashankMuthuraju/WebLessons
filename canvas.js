var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
MAX_WIDTH = 1000;
MAX_HEIGHT = 800;

ctx.moveTo(500, 400);
let point1 = hitAWall(500, 400, "left", "bottom")
let i = 0

let timer;
let isStarted;

function restart() {
    if (!isStarted) {
        isStarted = true;
        timer = setInterval(() => {
            ctx.beginPath()
            point1 = hitAWall(point1.x, point1.y, point1.d1, point1.d2);
            ctx.stroke();
        }, 500);
    } else {
        isStarted = false;
        clearInterval(timer);
    }
}

function hitAWall(x, y, d1, d2) {

    let a = x;
    let b = y;

    

    if (d1 == "left" && d2 == "top") {
        while (x < MAX_WIDTH && y > 0) {
            x = x + 1
            y = y - 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }
    } if (d1 == "right" && d2 === 'bottom') {
        while (x > 0 && y < MAX_HEIGHT) {
            x = x - 1
            y = y + 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }
    } if (d1 == "left" && d2 === "bottom") {
        while (x < MAX_WIDTH && y < MAX_HEIGHT) {
            x = x + 1
            y = y + 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }
    } if (d1 == "right" && d2 == "top") {
        while (x > 0 && y > 0) {
            x = x - 1
            y = y - 1
            ctx.strokeStyle = '#' + Math.random().toString(16).slice(2, 8);
            ctx.lineTo(x, y)
        }
    }

    d1 = calculateDirectionWhenMaximum(()=>(x >= MAX_WIDTH), d1, "left", "right");
    d2 = calculateDirectionWhenMaximum(()=>(x >= MAX_HEIGHT), d2, "top", "bottom");
    d1 = calculateDirectionWhenMinimum(0, x, d1, "left", "right");
    d2 = calculateDirectionWhenMaximum(0, y, d2, "top", "bottom");

    ctx.lineTo(x, y)
    console.log(x, y, d1, d2)
    return { x, y, d1, d2 }
}

    function calculateDirection(validateFn, currentDirection, minValue, maxValue) {
     if (validateFn()){
           if (currentDirection === minValue) {
                return maxValue;
            } else {
                return minValue;
          }
      }
       return currentDirection;
    }   

    function calculateDirectionWhenMaximum(MAX, direction, currentDirection, minValue, maxValue) {
        if (direction >= MAX) {
            if (currentDirection === minValue) {
                return maxValue;
            } else {
                return minValue;
            }
        }
        return currentDirection;
    }

    function calculateDirectionWhenMinimum(MIN, direction, currentDirection, minValue, maxValue) {
        if (direction <= MIN) {
            if (currentDirection === maxValue) {
                return minValue;
            } else {
                return maxValue;
            }
        }
        return currentDirection;
    }  


