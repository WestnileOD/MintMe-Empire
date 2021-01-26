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
   cav: {
    price: 0,
    quantity: 0,
    multiplier: 0},
  civilian: {
    price: 1,
    quantity: 2,
    multiplier: 1.00025},
  mintme: {
	price: 0.039,
    quantity: 0,
    multiplier: 0},
  defense: {
	price: 500,
    quantity: 1,
    multiplier: 0.01},
  loyalty: {
	price: 0,
    quantity: 0,
    multiplier: 0.01},
  wood:  {
	price: .01,
    quantity: 3,
    multiplier: 0},
   stone: {
	price: .001,
    quantity: 50,
    multiplier: 0},
  diamond: {
	price: 1000000,
    quantity: 0,
    multiplier: 0.0001}
   
}

let automaticUpgrades = {
  rovers: {
    price:   0.01,
    quantity: 0,
    multiplier: .01995},
  moustronauts: {
    price: 20,
    quantity: 50,
    multiplier: .9995},
   jacks: {
	price: 58,
    quantity: 0,
    multiplier: 0.001955},
  stoners: {
	price: 140,
    quantity: 0,
    multiplier: 0.0001955},
  golders:  {
	price: 1500,
    quantity: 0,
    multiplier: 0.00001},
  diamoners:  {
	price: 3500,
    quantity: 0,
    multiplier: 0.00001},
  minters:  {
	price: 100000,
    quantity: 0,
    multiplier: 0.00000001},
   smiths:  {
	price: 7500,
    quantity: 0,
    multiplier: 0.00001},
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
function recruit() {
	if (clickUpgrades.civilian.quantity >= 300) {
		clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 100)
		clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 100)
		alert ("Your loyal citizens have raised arms in your service!")
	}
	update()
}
//This is local police button 
function battle() {
if (clickUpgrades.shovels.quantity >= 1) {
     alert("Thanks!")
 clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity + Math.floor(Math.random() * 6))
 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 1) )
 clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier - 0.25)
 clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - 100)
 setInterval(startCrimeInterval, 13000)
}
 
  
 else alert("You need a larger army!")
   update()
 
}

function startCrimeInterval() {
  if (clickUpgrades.loyalty.quantity > 0) {
    clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - clickUpgrades.loyalty.multiplier)
	}
    loyaltyBal()
}

function loyaltyBal () {
	if (clickUpgrades.loyalty.quantity >= 100) {
		clickUpgrades.loyalty.quantity = 100
		clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity + 1)
		recruit()
		
	}
	else if (clickUpgrades.loyalty.quantity <= 1) {
	    clickUpgrades.loyalty.quantity = 1
		clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
		update()
	}
	
}
//These are the raids
 function battle2() {
if (clickUpgrades.shovels.quantity >= 9) {
	var atk = Math.floor(Math.random() * 2)
	var cas = atk - clickUpgrades.defense.quantity.toFixed(0)
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.25))
	clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - cas)
     clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 1)

 }
   
  
 else alert("You need a larger army!")
   update()
 
}

 function battle3() {
if (clickUpgrades.shovels.quantity >= 29) {
	var atk1 = Math.floor(Math.random() * 29)
	var cas1 = atk1 - clickUpgrades.defense.quantity.toFixed(0)
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 5))
	 clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - cas1)
      clickUpgrades.loyalty.quantity = (clickUpgrades.loyalty.quantity - 6)
     clickUpgrades.loyalty.multiplier = (clickUpgrades.loyalty.multiplier + .0995)

 }
   
  
 else alert("You need a larger army!")
   update()
 
}

 function battle4() {
if (clickUpgrades.shovels.quantity >= 29) {
	var atk2 = Math.floor(Math.random() * 5)
	var cas2 = atk2 - clickUpgrades.defense.quantity
     clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (clickUpgrades.shovels.quantity * Math.random() * 0.3))
    // clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - Math.floor(Math.random() * 5) )
	clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - cas2)
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
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.00000019)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintme10k() {
  if (clickUpgrades.pickaxes.quantity >= clickUpgrades.mintme.price * 10000) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.0001)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 10000))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.0000099)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintme1M() {
  if (clickUpgrades.pickaxes.quantity >= (clickUpgrades.mintme.price * 1000000)) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 0.01)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 1000000))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.00000999)
  }
  else alert("Not enough cheese!")
  update()
}

function buyMintmeFull() {
  if (clickUpgrades.pickaxes.quantity >= (clickUpgrades.mintme.price * 100000000)) {
    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + 1)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - (clickUpgrades.mintme.price * 100000000))
    clickUpgrades.mintme.price = (clickUpgrades.mintme.price + 0.0000099)
  }
  else alert("Not enough cheese!")
  update()
}

function buyDiamond() {
  if (clickUpgrades.pickaxes.quantity >= clickUpgrades.diamond.price) {
    clickUpgrades.diamond.quantity = (clickUpgrades.diamond.quantity + 1)
    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity - clickUpgrades.diamond.price)
	setInterval(startDiamondInterval, 12500)
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
	    clickUpgrades.diamond.price = (clickUpgrades.diamond.price + Math.random() * 3.12)
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
 function buyShovel10() {
   if (cheese >= (clickUpgrades.shovels.price * 25)) {
    clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 25)
    cheese = (cheese - (clickUpgrades.shovels.price * 25))
    clickUpgrades.shovels.price = (clickUpgrades.shovels.price * 1.0009)
    }
    else alert("Not enough Food!")
   update()
}
 function buyShovel20() {
   if (cheese >= (clickUpgrades.shovels.price * 100)) {
    clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity + 100)
    cheese = (cheese - (clickUpgrades.shovels.price * 100))
    clickUpgrades.shovels.price = (clickUpgrades.shovels.price * 1.0009)
    }
    else alert("Not enough Food!")
   update()
}
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
   else if (choice.x.y == 4) {
	   buyStoner()
   }
   else if (choice.x.y == 5) {
	   buyGolder()
   }
   else if (choice.x.y == 6) {
	   buySmith()
   }
   else if (choice.x.y == 7) {
	   buyDiamoner()
   }
   else if (choice.x.y == 8) {
	   buyMinter()
   }
   else 
     alert ("ERROR")
 
}
// Rover = Hunter
function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity = (automaticUpgrades.rovers.quantity + 1)
    cheese = (cheese - automaticUpgrades.rovers.price)
    automaticUpgrades.rovers.price = (automaticUpgrades.rovers.price * 1.001)
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

function buyGolder() {
  if (cheese >= automaticUpgrades.golders.price) {
    automaticUpgrades.golders.quantity = (automaticUpgrades.golders.quantity + 1)
    cheese = (cheese - automaticUpgrades.golders.price)
    automaticUpgrades.golders.price = (automaticUpgrades.golders.price * 1.95)
    setInterval(startGoldInterval, 25000)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
  }
  else alert("Not enough food!")
  update()
}

function startGoldInterval() {
  if (automaticUpgrades.golders.quantity > 0) {
	    clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.golders.quantity * automaticUpgrades.golders.multiplier))
  }
    update()
}

function buyDiamoner() {
  if (cheese >= automaticUpgrades.diamoners.price) {
    automaticUpgrades.diamoners.quantity = (automaticUpgrades.diamoners.quantity + 1)
    cheese = (cheese - automaticUpgrades.diamoners.price)
    automaticUpgrades.diamoners.price = (automaticUpgrades.diamoners.price * 1.95)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
    setInterval(startDiamineInterval, 35000)
	
  }
  else alert("Not enough food!")
  update()
}

function startDiamineInterval() {
  if (automaticUpgrades.diamoners.quantity > 0) {
	    clickUpgrades.diamond.quantity = (clickUpgrades.diamond.quantity + (automaticUpgrades.diamoners.quantity * automaticUpgrades.diamoners.multiplier))
  }
    update()
}

function buyMinter() {
  if (cheese >= automaticUpgrades.minters.price) {
    automaticUpgrades.minters.quantity = (automaticUpgrades.minters.quantity + 1)
    cheese = (cheese - automaticUpgrades.minters.price)
    automaticUpgrades.minters.price = (automaticUpgrades.minters.price * 1.95)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
    setInterval(startMinterval, 80000)
	
  }
  else alert("Not enough food!")
  update()
}

function startMinterval() {
  if (automaticUpgrades.minters.quantity > 0) {
	    clickUpgrades.mintme.quantity = (clickUpgrades.mintme.quantity + (automaticUpgrades.minters.quantity * automaticUpgrades.minters.multiplier))
  }
    update()
}


function buySmith() {
  if (cheese >= automaticUpgrades.smiths.price) {
    automaticUpgrades.smiths.quantity = (automaticUpgrades.smiths.quantity + 1)
    cheese = (cheese - automaticUpgrades.smiths.price)
    automaticUpgrades.smiths.price = (automaticUpgrades.smiths.price * 1.95)
	clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity - 1)
    setInterval(startGoldInterval, 5000)
	
  }
  else alert("Not enough food!")
  update()
}

function startSmithyInterval() {
  if (automaticUpgrades.smiths.quantity > 0) {
	    clickUpgrades.defense.quantity = (clickUpgrades.defense.quantity + (automaticUpgrades.smiths.quantity * automaticUpgrades.smiths.multiplier))
  }
    update()
}

function buildHouse() {
  if (clickUpgrades.wood.quantity >= 3) {
    clickUpgrades.wood.quantity = (clickUpgrades.wood.quantity - 3)
    //getElementById('cityview').src='https://imgur.com/cQ3lneX'"
	//turn button off
   setInterval(startPopInterval, 15000)
  }
  else alert("Not enough Wood!")
   update()
}

function startPopInterval() {
    clickUpgrades.civilian.quantity = (clickUpgrades.civilian.quantity + Math.random() * 15)
    update()
}

function buildCastle() {
  if (clickUpgrades.stone.quantity >= 50) {
    clickUpgrades.stone.quantity = (clickUpgrades.stone.quantity - 50)
    //getElementById('cityview').src='https://imgur.com/NmTGPCu'"
	//turn button off
	setInterval(startTaxInterval, 8000)
  }
  else alert("Not enough Stone!")
  update()
}

function startTaxInterval() {
	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + 0.0001) 
	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.moustronauts.quantity * 0.0003))
  	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.jacks.quantity * 0.0004))
   	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.stoners.quantity * 0.0005))
   	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.golders.quantity * 0.001))
   	clickUpgrades.pickaxes.quantity = (clickUpgrades.pickaxes.quantity + (automaticUpgrades.minters.quantity * 0.01))

    update()
}

function buildStable() {
  if (clickUpgrades.wood.quantity >= 15) {
    clickUpgrades.wood.quantity = (clickUpgrades.wood.quantity - 15)
    //getElementById('cityview').src='https://imgur.com/cQ3lneX'"
	//turn button off
   setInterval(startCavInterval, 15000)
  }
  else alert("Not enough Wood!")
   update()
}

function startCavInterval() {
    if (clickUpgrades.shovels.quantity >= 1 ) {
		clickUpgrades.shovels.quantity = (clickUpgrades.shovels.quantity - 1)
		clickUpgrades.cav.quantity = (clickUpgrades.cav.quantity + 1)
		
	}
    update()
}




// This is the core of the data to frontend 
function update() {
var showCheese = cheese.toFixed(4);
var showGold = clickUpgrades.pickaxes.quantity.toFixed(4);
var showMint= clickUpgrades.mintme.quantity.toFixed(8);
var showWood = clickUpgrades.wood.quantity.toFixed(4);
var showDiamond = clickUpgrades.diamond.quantity.toFixed(4);
var showStone = clickUpgrades.stone.quantity.toFixed(4);
  document.getElementById("defenseQTY").innerHTML = clickUpgrades.defense.quantity
  document.getElementById("cheeseQTY").innerHTML = showCheese
  document.getElementById("axeQTY").innerHTML = showGold
 document.getElementById("civQTY").innerHTML = clickUpgrades.civilian.quantity
   document.getElementById("cavQTY").innerHTML = clickUpgrades.cav.quantity
   document.getElementById("civPrice").innerHTML = clickUpgrades.civilian.price.toFixed(4)
  document.getElementById("axePrice").innerHTML = clickUpgrades.pickaxes.price.toFixed(4)
  document.getElementById("shovelQTY").innerHTML = clickUpgrades.shovels.quantity
  document.getElementById("shovelPrice").innerHTML = clickUpgrades.shovels.price.toFixed(4)
  document.getElementById("shovelPrice10").innerHTML = (clickUpgrades.shovels.price.toFixed(4) * 25)
    document.getElementById("shovelPrice20").innerHTML = (clickUpgrades.shovels.price.toFixed(4) * 100)
   document.getElementById("mintmeQTY").innerHTML = showMint 
   document.getElementById("mintmePrice").innerHTML = clickUpgrades.mintme.price.toFixed(4)  
    document.getElementById("100mintmePrice").innerHTML = (clickUpgrades.mintme.price.toFixed(4) * 100)
	    document.getElementById("10kmintmePrice").innerHTML = (clickUpgrades.mintme.price.toFixed(4) * 10000)
    document.getElementById("1MmintmePrice").innerHTML = (clickUpgrades.mintme.price.toFixed(4) * 1000000)
	document.getElementById("FullMmintmePrice").innerHTML = (clickUpgrades.mintme.price.toFixed(4) * 100000000)
document.getElementById("diamondQTY").innerHTML = showDiamond
   document.getElementById("diamondPrice").innerHTML = clickUpgrades.diamond.price.toFixed(4)        
  document.getElementById("woodQTY").innerHTML = showWood
  document.getElementById("woodPrice").innerHTML = clickUpgrades.wood.price.toFixed(4)
 document.getElementById("stoneQTY").innerHTML = showStone
  document.getElementById("stonePrice").innerHTML = clickUpgrades.stone.price.toFixed(4)
    document.getElementById("loyaltyQTY").innerHTML = clickUpgrades.loyalty.quantity.toFixed(4) 
	document.getElementById("jacksQTY").innerHTML = automaticUpgrades.jacks.quantity 
	 document.getElementById("jacksPrice").innerHTML = automaticUpgrades.jacks.price.toFixed(4)
document.getElementById("roverQTY").innerHTML = automaticUpgrades.rovers.quantity
  document.getElementById("roverPrice").innerHTML = automaticUpgrades.rovers.price.toFixed(4)
  document.getElementById("stonersQTY").innerHTML = automaticUpgrades.stoners.quantity
  document.getElementById("stonersPrice").innerHTML = automaticUpgrades.stoners.price.toFixed(4)
  document.getElementById("goldersQTY").innerHTML = automaticUpgrades.golders.quantity
  document.getElementById("goldersPrice").innerHTML = automaticUpgrades.golders.price.toFixed(4)
  document.getElementById("diamonersQTY").innerHTML = automaticUpgrades.diamoners.quantity
  document.getElementById("diamonersPrice").innerHTML = automaticUpgrades.diamoners.price.toFixed(4)
   document.getElementById("mintersQTY").innerHTML = automaticUpgrades.minters.quantity
  document.getElementById("mintersPrice").innerHTML = automaticUpgrades.minters.price.toFixed(4)
  document.getElementById("smithsQTY").innerHTML = automaticUpgrades.smiths.quantity
  document.getElementById("smithsPrice").innerHTML = automaticUpgrades.smiths.price.toFixed(4)
  document.getElementById("miceQTY").innerHTML = automaticUpgrades.moustronauts.quantity
  document.getElementById("mousePrice").innerHTML = automaticUpgrades.moustronauts.price.toFixed(4)  
  document.getElementById("multiplierQTY").innerHTML = (clickUpgrades.shovels.quantity + automaticUpgrades.rovers.quantity + automaticUpgrades.moustronauts.quantity + clickUpgrades.civilian.quantity + automaticUpgrades.jacks.quantity + automaticUpgrades.stoners.quantity + automaticUpgrades.golders.quantity)
}