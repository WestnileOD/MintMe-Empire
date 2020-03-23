let cheese = 0

let clickUpgrades = {
  pickaxes: {
    price: 25,
    quantity: 0,
    multiplier: 5},
  shovels: {
    price: 50,
    quantity: 0,
    multiplier: 10}
}

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20},
  moustronauts: {
    price: 800,
    quantity: 0,
    multiplier: 40}
};


function mine() {
  if (clickUpgrades.pickaxes.quantity  || clickUpgrades.shovels.quantity > 0) {
    cheese = (cheese + (clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier) + (clickUpgrades.shovels.quantity * clickUpgrades.shovels.multiplier))}

  else cheese++ 
  update()
}


function buyShovel() {
   if (cheese >= clickUpgrades.shovels.price) {
     clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 1)
     cheese = (cheese - clickUpgrades.shovels.price)
     clickUpgrades.shovels.price = (clickUpgrades.shovels.price * 1.5)
    }
   else alert("Not enough cheese!")
   update()
 }

function buyAxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 1)
    cheese = (cheese - clickUpgrades.pickaxes.price)
    clickUpgrades.pickaxes.price = (clickUpgrades.pickaxes.price * 1.5)
  }
  else alert("Not enough cheese!")
  update()
}



function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity = (automaticUpgrades.rovers.quantity + 1)
    cheese = (cheese - automaticUpgrades.rovers.price)
    automaticUpgrades.rovers.price = (automaticUpgrades.rovers.price * 1.5)
    setInterval(startRoverInterval, 1500)
  }
  else alert("Not enough cheese!")
  update()
}

function startRoverInterval() {
  if (automaticUpgrades.rovers.quantity > 0) {
    cheese = (cheese + (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier))}
    update()
}

function buyMouse() {
  if (cheese >= automaticUpgrades.moustronauts.price) {
    automaticUpgrades.moustronauts.quantity = (automaticUpgrades.moustronauts.quantity + 1)
    cheese = (cheese - automaticUpgrades.moustronauts.price)
    automaticUpgrades.moustronauts.price = (automaticUpgrades.moustronauts.price * 1.5)
    setInterval(startMouseInterval, 3000)
  }
  else alert("Not enough cheese!")
  update()
}

function startMouseInterval() {
  if (automaticUpgrades.moustronauts.quantity > 0) {
    cheese = (cheese + (automaticUpgrades.moustronauts.quantity * automaticUpgrades.moustronauts.multiplier))}
    update()
}



function update() {
  document.getElementById("cheeseQTY").innerHTML = cheese
  document.getElementById("axeQTY").innerHTML = clickUpgrades.pickaxes.quantity
  document.getElementById("axePrice").innerHTML = clickUpgrades.pickaxes.price 
  document.getElementById("shovelQTY").innerHTML = clickUpgrades.shovels.quantity
  document.getElementById("shovelPrice").innerHTML = clickUpgrades.shovels.price 
  document.getElementById("roverQTY").innerHTML = automaticUpgrades.rovers.quantity
  document.getElementById("roverPrice").innerHTML = automaticUpgrades.rovers.price
  document.getElementById("miceQTY").innerHTML = automaticUpgrades.moustronauts.quantity
  document.getElementById("mousePrice").innerHTML = automaticUpgrades.moustronauts.price  
  document.getElementById("multiplierQTY").innerHTML = (clickUpgrades.pickaxes.quantity + clickUpgrades.shovels.quantity + automaticUpgrades.rovers.quantity + automaticUpgrades.moustronauts.quantity)
  document.getElementById("multiplierIntensity").innerHTML = ((clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier) + (clickUpgrades.shovels.quantity * clickUpgrades.shovels.multiplier) + (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.moustronauts.quantity * automaticUpgrades.moustronauts.multiplier))
}