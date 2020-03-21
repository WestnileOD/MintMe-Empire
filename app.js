let cheese = 0

let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 5},
  shovels: {
    price: 200,
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
  cheese++ 
  update()
}


function buyAxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 1)
    cheese = (cheese - clickUpgrades.pickaxes.price)
  }
  else alert("Not enough cheese!")
  update()

}

function update() {
  document.getElementById("cheeseQTY").innerHTML = cheese
  document.getElementById("axeQTY").innerHTML = clickUpgrades.pickaxes.quantity
}