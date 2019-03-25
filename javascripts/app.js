// Rover Object Goes Here
// ======================

var rover = {
  direction: ['N', 'S', 'E', 'W'],
  defaultDirection: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.defaultDirection) {
    case 'N':
      rover.defaultDirection = 'W'
      break;
    case 'S':
      rover.defaultDirection = 'E'
      break;
    case 'E':
      rover.defaultDirection = 'N'
      break;
    case 'W':
      rover.defaultDirection = 'S'
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.defaultDirection) {
    case 'N':
      rover.defaultDirection = 'E'
      break;
    case 'S':
      rover.defaultDirection = 'W'
      break;
    case 'E':
      rover.defaultDirection = 'S'
      break;
    case 'W':
      rover.defaultDirection = 'N'
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.defaultDirection) {
    case 'N':
      rover.x -= 1;
      console.log('Las coordenadas son ' + rover.x + ' and ' + rover.y);
      rover.travelLog.push(`X:${rover.x} Y:${rover.y}`) 
      break;
    case 'S':
      rover.x += 1;
      console.log('Las coordenadas son ' + rover.x + ' and ' + rover.y);
      rover.travelLog.push(`X:${rover.x} Y:${rover.y}`)
      break;
    case 'E':
      rover.y += 1;
      console.log('Las coordenadas son ' + rover.x + ' and ' + rover.y);
      rover.travelLog.push(`X:${rover.x} Y:${rover.y}`)
      break;
    case 'W':
      rover.y -= 1;
      console.log('Las coordenadas son ' + rover.x + ' and ' + rover.y);
      rover.travelLog.push(`X:${rover.x} Y:${rover.y}`)
      break;
  }
}

function moveBackward(rover){
  turnRight(rover);
  turnRight(rover);
  moveForward(rover);
}

function moveRover(comandos) {
  for(i = 0; i < comandos.length; i++) {
    if(comandos[i] === 'f' || comandos[i] === 'b' || comandos[i] === 'r' || comandos[i] === 'l' ) {
      switch(comandos[i]) {
      case 'f':
        moveForward(rover);
        if(rover.x === 10 || rover.x === -1 || rover.y === 10 || rover.y === -1) {
          rover.travelLog.pop()
          moveBackward(rover);
          turnRight(rover);
          turnRight(rover);
          console.log('Movimiento invalido!')
        }
        break;
      case 'r':
        turnRight(rover);
        moveForward(rover);
        if(rover.x === 10 || rover.x === -1 || rover.y === 10 || rover.y === -1) {
          moveBackward(rover);
          turnRight(rover);
          console.log('Movimiento invalido!')
        }
        break;
      case 'l':
        turnLeft(rover);
        moveForward(rover);
        if(rover.x === 10 || rover.x === -1 || rover.y === 10 || rover.y === -1) {
          moveBackward(rover);
          turnLeft(rover);
          console.log('Movimiento invalido!')
        }
        break;
      case 'b':
        moveBackward(rover);
        if(rover.x === 10 || rover.x === -1 || rover.y === 10 || rover.y === -1) {
          moveBackward(rover);
          console.log('Movimiento invalido!')
        }
        break;
      }
    } else {
      console.log('COMANDO INVALIDO!!!!!!!!!!!')
    }
  }
}

moveRover('dddbffflrfffllrbrffffffffflfffbfffff');
console.log(rover.travelLog)