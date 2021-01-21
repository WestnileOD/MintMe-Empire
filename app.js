//Alot of the variables  will look like WTF!?! There is a reason....
//As the original script was concerning mice mining cheese on the moon
//All translations as such are for matching front end 
//Pickaxes = Gold
//Shovels = Soldiers
//Rovers = Hunters
//Mouse = Farmers
//Cheese = Food 
let cheese = 0
let choice = {
	x: {
		y: 0}
}
let clickUpgrades = {
  pickaxes: {
    price: 1000,
    quantity: 0,
    multiplier: 0},
  shovels: {
    price: 5,
    quantity: 0,
    multiplier: 0},
  civilian: {
    price: 1,
    quantity: 2,
    multiplier: 1.00025},
  mintme: {
	price: 0.98999,
    quantity: 0,
    multiplier: 0},
  defense: {
	price: 500,
    quantity: 0,
    multiplier: 0},
  loyalty: {
	price: 0,
    quantity: 0,
    multiplier: 0.01},
  wood: {
	price: .01,
    quantity: 3,
    multiplier: 0},
   stone: {
	price: .001,
    quantity: 50,
    multiplier: 0},
  diamond: {
	price: 1000,
    quantity: 0,
    multiplier: 0.0001}
   
}

let automaticUpgrades = {
  rovers: {
    price: .01,
    quantity: 0,
    multiplier: .01995},
  moustronauts: {
    price: 60,
    quantity: 0,
    multiplier: .09995},
   jacks: {
	price: 580,
    quantity: 0,
    multiplier: 0.001955},
  stoners: {
	price: 1400,
    quantity: 0,
    multiplier: 0.0001955},
  golders:  {
	price: 15000,
    quantity: 0,
    multiplier: 0.00001},
  minters:  {
	price: 1500000,
    quantity: 0,
    multiplier: 0.0000001},
  houses: {
	price: 30,
    quantity: 0,
    multiplier: 0.000001},
  walls: {
	price: 360,
    quantity: 0,
    multiplier: 0.001},
  castle: {
	price: 550,
    quantity: 0,
    multiplier: 0.01}
}

//this is the main button
function mine() {
	cheese++
   update()
}
// Shovel = Soldier 
//This is local police button 
function battle() {
if (clickUpgrades.shovels.quantity >= 1) {
     alert("Thanks!")
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity + Math.floor(Math.random() * 6))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 1) )
 clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier - 0.25)
 setInterval(startCrimeInterval, 3000)
}
 
  
 else alert("You need a larger army!")
   update()
 
}

function startCrimeInterval() {
  if (clickUpgrades.loyalty.quantity > 0) {
    clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - clickUpgrades.loyalty.multiplier)
	}
    update()
}
//These are the raids
 function battle2() {
if (clickUpgrades.shovels.quantity >= 9) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.25))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 2) )
     clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 1)

 }
   
  
 else alert("You need a larger army!")
   update()
 
}

 function battle3() {
if (clickUpgrades.shovels.quantity >= 29) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 5))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 29) )
      clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 6)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .0995)

 }
   
  
 else alert("You need a larger army!")
   update()
 
}

 function battle4() {
if (clickUpgrades.shovels.quantity >= 29) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.3))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 5) )
      clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 1)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .0099)

 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle5() {
if (clickUpgrades.shovels.quantity >= 35) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.22))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 35) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 3)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .009)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle6() {
if (clickUpgrades.shovels.quantity >= 89) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.4))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 40) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 2)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .0079)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}


function battle7() {
if (clickUpgrades.shovels.quantity >= 109) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 20))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 109) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 2)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .0299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle8() {
if (clickUpgrades.shovels.quantity >= 209) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 3.1))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 79) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 0.9)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .00299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle9() {
if (clickUpgrades.shovels.quantity >= 229) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.floor(Math.random() * 9)))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 99) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 0.9)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .00299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle10() {
if (clickUpgrades.shovels.quantity >= 479) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.floor(Math.random() * 8.5)))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 479) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 0.9)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .00299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle11() {
if (clickUpgrades.shovels.quantity >= 579) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.floor(Math.random() * 400)))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 529) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 0.9)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .00299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}

function battle12() {
if (clickUpgrades.shovels.quantity >= 999) {
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.floor(Math.random() * 50)))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 189) )
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 0.9)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .00299)
 }
   
  
 else alert("You need a larger army!")
   update()
 
}






// These are the trades
// pickaxes = Gold
function buyAxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 100)
    cheese = (cheese - clickUpgrades.pickaxes.price)
    clickUpgrades.pickaxes.price = (clickUpgrades.pickaxes.price * 1.0004)
  }
  else alert("Not enough cheese!")
  update()
}
function buyMintme() {
  if (clickUpgrades.pickaxes.quantity >= clickUpgrades.mintme.price) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.00000001)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - clickUpgrades.mintme.price)
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.0099999)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintme100() {
  if (clickUpgrades.pickaxes.quantity >= (clickUpgrades.mintme.price * 100)) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.000001)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 100))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.0199999)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintme10k() {
  if (clickUpgrades.pickaxes.quantity >= clickUpgrades.mintme.price * 10000) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.0001)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 10000))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.99999)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintme1M() {
  if (clickUpgrades.pickaxes.quantity >= (clickUpgrades.mintme.price * 1000000)) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.01)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 1000000))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 19.9999)
  }
  else alert("Not enough cheese!")
  update()
}

function buyDiamond() {
  if (clickUpgrades.pickaxes.quantity >= clickUpgrades.diamond.price) {
    clickUpgrades.diamond.quantity = (clickUpgrades.diamond.quantity + 1)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - clickUpgrades.diamond.price)
	setInterval(startDiamondInterval, 2500)
  }
  else alert("Not enough cheese!")
  update()
}


function sellDiamond() {
  if (clickUpgrades.diamond.quantity >= 1) {
    clickUpgrades.diamond.quantity = (clickUpgrades.diamond.quantity - 1)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + clickUpgrades.diamond.price)
  }
  else alert("Not enough cheese!")
  update()
}

function startDiamondInterval() {
	    clickUpgrades.diamond.price = (clickUpgrades.diamond.price + clickUpgrades.diamond.multiplier)
	    clickUpgrades.diamond.price = (clickUpgrades.diamond.price + Math.random() * 2.12)
	    clickUpgrades.diamond.price = (clickUpgrades.diamond.price - Math.random() * 2.12)

        update()
}


function sellWood() {
  if (clickUpgrades.wood.quantity >= clickUpgrades.wood.price) {
    clickUpgrades.wood.quantity = (clickUpgrades.wood.quantity - clickUpgrades.wood.price)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 100)
    clickUpgrades.wood.price = (clickUpgrades.wood.price * 1.0093)
  }
 else alert("Not enough Wood!")
  update()
}

function sellStone() {
  if (clickUpgrades.stone.quantity >= clickUpgrades.stone.price) {
    clickUpgrades.stone.quantity = (clickUpgrades.stone.quantity - clickUpgrades.stone.price)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 1000)
    clickUpgrades.stone.price = (clickUpgrades.stone.price * 1.00093)
  }
 else alert("Not enough Stone!")
  update()
}

//Create units
//Shovel = Soldier
//Create soldier 
function crCIV() {
   if (cheese >= clickUpgrades.civilian.price) {
     clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity + 1)
     cheese = (cheese - clickUpgrades.civilian.price)
     clickUpgrades.civilian.price = (clickUpgrades.civilian.price * 1.0009)
    }
   else alert("Not enough Food!")
   update()
 }
function buyShovel() {
   if (cheese >= clickUpgrades.shovels.price) {
     clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 1)
     cheese = (cheese - clickUpgrades.shovels.price)
     clickUpgrades.shovels.price = (clickUpgrades.shovels.price * 1.0009)
	 clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
    }
   else alert("Not enough Food!")
   update()
 }
// function buyShovel10() {
 //  if (cheese >= (clickUpgrades.shovels.price * 25)) {
 //    clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 25)
 //    cheese = (cheese - (clickUpgrades.shovels.price * 25))
 //    clickUpgrades.shovels.price = (clickUpgrades.shovels.price * 1.0009)
  //  }
  // else alert("Not enough Food!")
 //  update()
// }
//This is concerning civilians and loyalty
function civCheck() {
	  if (clickUpgrades.civilian.quantity >= 1){
		  civTrain()
	  }
	  else
	     alert ("You need more civilians!")
}

function civTrain() {
   if (choice.x.y == 1) {
	    buyRover()
   }
   else if(choice.x.y == 2) { 
	    buyMouse()
   }
   else if  (choice.x.y == 3) {
	    buyJack()
   }
   else
     alert ("ERROR")
 
}
// Rover = Hunter
function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity = (automaticUpgrades.rovers.quantity + 1)
    cheese = (cheese - automaticUpgrades.rovers.price)
    automaticUpgrades.rovers.price = (automaticUpgrades.rovers.price * 1.13)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
    setInterval(startRoverInterval, 2500)
	setInterval(deadRoverInterval, 350000)
  }
  else alert("Not enough cheese!")
  update()
}

function startRoverInterval() {
  if (automaticUpgrades.rovers.quantity > 0) {
    cheese = (cheese + (automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier))}
    update()
}

function deadRoverInterval() {
  if (automaticUpgrades.rovers.quantity > 0) {
    automaticUpgrades.rovers.quantity = (automaticUpgrades.rovers.quantity - 1)

	}
    update()
}


//Mouse = Farmer

function buyMouse() {
  if (cheese >= automaticUpgrades.moustronauts.price) {
    automaticUpgrades.moustronauts.quantity = (automaticUpgrades.moustronauts.quantity + 1)
    cheese = (cheese - automaticUpgrades.moustronauts.price)
    automaticUpgrades.moustronauts.price = (automaticUpgrades.moustronauts.price * 1.25)
    setInterval(startMouseInterval, 3500)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
  }
  else alert("Not enough cheese!")
  update()
}

function startMouseInterval() {
  if (automaticUpgrades.moustronauts.quantity > 0) {
  cheese = (cheese + (automaticUpgrades.moustronauts.quantity * automaticUpgrades.moustronauts.multiplier))}
    update()
}
// These are Create lumberjack, stone miner, gold miner and the resource collection 
function buyJack() {
  if (cheese >= automaticUpgrades.jacks.price) {
    automaticUpgrades.jacks.quantity = (automaticUpgrades.jacks.quantity + 1)
    cheese = (cheese - automaticUpgrades.jacks.price)
    automaticUpgrades.jacks.price = (automaticUpgrades.jacks.price * 1.75)
    setInterval(startJackInterval, 8000)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
  }
  else alert("Not enough cheese!")
  update()
}

function startJackInterval() {
  if (automaticUpgrades.jacks.quantity > 0) {
	    clickUpgrades.wood.quantity = (clickUpgrades.wood.quantity + (automaticUpgrades.jacks.quantity * automaticUpgrades.jacks.multiplier))}
  
    update()
}

function buyStoner() {
  if (cheese >= automaticUpgrades.stoners.price) {
    automaticUpgrades.stoners.quantity = (automaticUpgrades.stoners.quantity + 1)
    cheese = (cheese - automaticUpgrades.stoners.price)
    automaticUpgrades.stoners.price = (automaticUpgrades.stoners.price * 1.95)
    setInterval(startStoneInterval, 17000)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
  }
  else alert("Not enough cheese!")
  update()
}

function startStoneInterval() {
  if (automaticUpgrades.stoners.quantity > 0) {
	    clickUpgrades.stone.quantity = (clickUpgrades.stone.quantity + (automaticUpgrades.stoners.quantity * automaticUpgrades.stoners.multiplier))
  }
    update()
}

function buildHouse() {
  if (clickUpgrades.wood.quantity >= 3) {
    clickUpgrades.wood.quantity = (clickUpgrades.wood.quantity - 3)
    //getElementById('cityview').src='https://imgur.com/cQ3lneX'"
	//turn button off
   setInterval(startPopInterval, 7000)
  }
  else alert("Not enough Wood!")
   update()
}

//function startPopInterval() {
   // clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity + Math.random() * 40)
   // update()
//}

function buildCastle() {
  if (clickUpgrades.stone.quantity >= 50) {
    clickUpgrades.stone.quantity = (clickUpgrades.stone.quantity - 50)
    //getElementById('cityview').src='https://imgur.com/NmTGPCu'"
	//turn button off
	//activate tax button
    // move this later   setInterval(startTaxInterval, 1000)
  }
  else alert("Not enough Stone!")
  update()
}

//function startTaxInterval() {
//	var t1 = clickUpgrades.civilian.quantity
//	var t2 = clickUpgrades.shovels.quantity
	//var t3 = (automaticUpgrades.rovers.quantity + automaticUpgrades.moustronauts.quantity)
//	clickUpgrades.gold.quantity = (clickUpgrades.gold.quantity + (t1 + Math.random() * 4)
//	clickUpgrades.gold.quantity = (clickUpgrades.gold.quantity - (t2 + Math.random() * 100)
 //   update()
//}





// This is the core of the data to frontend 
function update() {
var showCheese = cheese.toFixed(4);
var showGold = clickUpgrades.pickaxes.quantity.toFixed(4);
var showMint= clickUpgrades.mintme.quantity.toFixed(8);
var showWood = clickUpgrades.wood.quantity.toFixed(4);
var showDiamond = clickUpgrades.diamond.quantity.toFixed(4);
var showStone = clickUpgrades.stone.quantity.toFixed(4);
  document.getElementById("cheeseQTY").innerHTML = showCheese
  document.getElementById("axeQTY").innerHTML = showGold
 document.getElementById("civQTY").innerHTML = clickUpgrades.civilian.quantity
   document.getElementById("civPrice").innerHTML = clickUpgrades.civilian.price
  document.getElementById("axePrice").innerHTML = clickUpgrades.pickaxes.price
  document.getElementById("shovelQTY").innerHTML = clickUpgrades.shovels.quantity
  document.getElementById("shovelPrice").innerHTML = clickUpgrades.shovels.price 
  document.getElementById("shovelPrice10").innerHTML = (clickUpgrades.shovels.price * 25)
   document.getElementById("mintmeQTY").innerHTML = showMint 
   document.getElementById("mintmePrice").innerHTML = clickUpgrades.mintme.price  
    document.getElementById("100mintmePrice").innerHTML = (clickUpgrades.mintme.price * 100)
	    document.getElementById("10kmintmePrice").innerHTML = (clickUpgrades.mintme.price * 10000)
    document.getElementById("1MmintmePrice").innerHTML = (clickUpgrades.mintme.price * 1000000)
document.getElementById("diamondQTY").innerHTML = showDiamond
   document.getElementById("diamondPrice").innerHTML = clickUpgrades.diamond.price        
  document.getElementById("woodQTY").innerHTML = showWood
  document.getElementById("woodPrice").innerHTML = clickUpgrades.wood.price
 document.getElementById("stoneQTY").innerHTML = showStone
  document.getElementById("stonePrice").innerHTML = clickUpgrades.stone.price
    document.getElementById("loyaltyQTY").innerHTML = clickUpgrades.loyalty.quantity 
	document.getElementById("jacksQTY").innerHTML = automaticUpgrades.jacks.quantity 
	 document.getElementById("jacksPrice").innerHTML = automaticUpgrades.jacks.price
document.getElementById("roverQTY").innerHTML = automaticUpgrades.rovers.quantity
  document.getElementById("roverPrice").innerHTML = automaticUpgrades.rovers.price
  document.getElementById("stonersQTY").innerHTML = automaticUpgrades.stoners.quantity
  document.getElementById("stonersPrice").innerHTML = automaticUpgrades.stoners.price
  document.getElementById("miceQTY").innerHTML = automaticUpgrades.moustronauts.quantity
  document.getElementById("mousePrice").innerHTML = automaticUpgrades.moustronauts.price  
  document.getElementById("woodIntensity").innerHTML = (automaticUpgrades.jacks.quantity * automaticUpgrades.jacks.multiplier)
  document.getElementById("multiplierQTY").innerHTML = (clickUpgrades.shovels.quantity + automaticUpgrades.rovers.quantity + automaticUpgrades.moustronauts.quantity + clickUpgrades.civilian.quantity + automaticUpgrades.jacks.quantity + automaticUpgrades.stoners.quantity + automaticUpgrades.golders.quantity)
  document.getElementById("multiplierIntensity").innerHTML = ((automaticUpgrades.rovers.quantity * automaticUpgrades.rovers.multiplier) + (automaticUpgrades.moustronauts.quantity * automaticUpgrades.moustronauts.multiplier))
}