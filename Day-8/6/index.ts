// 6. Create an enum Direction with values Up, Down, Left, and Right.
// Write a function that takes a direction and logs a message like "You moved Up!".

const direction = Object.freeze({
    UP: "UP",
    DOWN : "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT"
})

function movedirection(str: string): string {
  switch(str) {
    case direction.UP:
        return "You moved Up";
    case direction.DOWN:
       return "You moved Down";
    case direction.LEFT:
        return "You moved Left";
    case direction.RIGHT:
        return "You moved Right";
    default:
        return "You entered a wrong direction!"
  }
}

console.log(movedirection(direction.UP));
