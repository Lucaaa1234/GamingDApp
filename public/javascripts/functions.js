//const { urlencoded } = require("express");
const hidding = document.getElementById('hidding');

let myAddress = "";
let web3 = {};
//web3 = {};
let myContract = {};
let slots = [];
var sName = "";
var slot_index = [0, 0];
var rarita_uovo;
var gettoni = 0;
var sium = ""

async function connectMetamask() {
    const {ethereum} = window; //prende gli ethereum dalla window del browser
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    
    await web3.eth.getAccounts().then(function(response){
        myAddress = response[0];
        console.log(response);
    })
	await loadContract()
    /*const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log("account via metamask api");
    console.log(accounts[0]);
    myAddress = accounts[0];*/
}

async function loadContract() { //variabile per loadare il contratto, prima di usarla bisogna connettersi a metamask
    let abi = [
		{
			"inputs": [],
			"name": "Accoppiamento",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "new_name_slot_index",
					"type": "uint256"
				},
				{
					"internalType": "string",
					"name": "new_name",
					"type": "string"
				}
			],
			"name": "Cambia_Nome",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Compra_Comune",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Compra_Epica",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Compra_Rara",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Riscatta",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Ritira_Soldi",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Schiudi_Uovo",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "slot_old_index",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "slot_new_index",
					"type": "uint256"
				}
			],
			"name": "Sposta",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"stateMutability": "payable",
			"type": "constructor"
		},
		{
			"stateMutability": "payable",
			"type": "fallback"
		},
		{
			"inputs": [],
			"name": "Vendi_Gallina_Slot_3",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Vendi_Gallina_Slot_4",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "Vendi_Gallina_Slot_5",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		},
		{
			"inputs": [],
			"name": "getAllSlots",
			"outputs": [
				{
					"components": [
						{
							"components": [
								{
									"internalType": "string",
									"name": "nome",
									"type": "string"
								},
								{
									"internalType": "uint256",
									"name": "rarity",
									"type": "uint256"
								},
								{
									"internalType": "bool",
									"name": "produzione",
									"type": "bool"
								},
								{
									"internalType": "bool",
									"name": "accoppiamento",
									"type": "bool"
								}
							],
							"internalType": "struct Goose_That_Lays_Gwei_Eggs.Gallina",
							"name": "g",
							"type": "tuple"
						},
						{
							"internalType": "bool",
							"name": "occupato",
							"type": "bool"
						}
					],
					"internalType": "struct Goose_That_Lays_Gwei_Eggs.Slot[5]",
					"name": "",
					"type": "tuple[5]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "z",
					"type": "uint256"
				}
			],
			"name": "GetGallina",
			"outputs": [
				{
					"components": [
						{
							"internalType": "string",
							"name": "nome",
							"type": "string"
						},
						{
							"internalType": "uint256",
							"name": "rarity",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "produzione",
							"type": "bool"
						},
						{
							"internalType": "bool",
							"name": "accoppiamento",
							"type": "bool"
						}
					],
					"internalType": "struct Goose_That_Lays_Gwei_Eggs.Gallina",
					"name": "",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getRaritaNuovaGallina",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "z",
					"type": "uint256"
				}
			],
			"name": "GetSlotsOccupati",
			"outputs": [
				{
					"internalType": "bool",
					"name": "occupato",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getToken",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "oldTime",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "token",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]
let contractAddress = "0xa0c9a5136D1A21368751969206A3D75e0daBF332"
    myContract = new web3.eth.Contract(abi, contractAddress);
    console.log(myContract);
	await Update_Slots()
	/*metti una get dell'array in modo che carica la tua schermata.*/
}

//da richiamare ogni volta che si fa un'operazione che modifica gli slot
//await Update_Slots()
async function Update_Slots() {
	await myContract.methods.getAllSlots().call().then(function(response) {
		console.log(response)
		slots = response
	});
	await myContract.methods.getRaritaNuovaGallina().call().then(function(response) {
		console.log(response)
		rarita_uovo = response
	});
	for (let i = 0; i <5; i++) {
		if (slots[i].occupato == true && slots[i].g.rarity !=0) {
			//rinominare nome classe
			if (i<2){
				sName = "square chicken_image slot_" + (i);
			} 
			else{
				sName = "square inventary_image slot_" + (i);
			}
			let imageToShow = "G" + slots[i].g.rarity + ".png"
			console.log(sName)
			//rinominare immagini in base alla rarità
			document.getElementsByClassName(sName)[0].style.backgroundImage = "url(/immagini/" + imageToShow + ")"
		}
		else if (slots[i].occupato == true && slots[i].g.rarity ==0) {
			console.log("rarita uovo: "+rarita_uovo )
			//rinominare nome classe
			sName = "square inventary_image slot_" + (i);
			let imageToShow = "U" + rarita_uovo + ".png"
			console.log(sName)
			sium = "sium"
			document.getElementsByClassName(sName)[0].style.backgroundImage = "url(/immagini/" + imageToShow + ")"
			console.log(document.getElementsByClassName(sium)[0].style.visibility)
			document.getElementsByClassName(sium)[0].style.visibility = "visible";
		}
	}
}

async function Compra_Comune() {
    myContract.methods.Compra_Comune().send({
        from: myAddress,
        value: web3.utils.toWei('6', 'finney')
    }).then(function(response) {
        console.log(response)
    });
	await Update_Slots()
}
async function Compra_Rara() {
    myContract.methods.Compra_Rara().send({
        from: myAddress,
        value: web3.utils.toWei('31', 'finney')
    }).then(function(response) {
        console.log(response)
    }); 
    await Update_Slots()
}
async function Compra_Epica() {
    myContract.methods.Compra_Epica().send({
        from: myAddress,
        value: web3.utils.toWei('62', 'finney')
    }).then(function(response) {
        console.log(response)
    });
	//let c =  getAllSlots()
	//console.log(c)
	await Update_Slots()
}
async function Vendi_Gallina_Slot_3() {
    myContract.methods.Vendi_Gallina_Slot_3().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    }); 
	await Update_Slots()
}
async function Vendi_Gallina_Slot_4() {
    myContract.methods.Vendi_Gallina_Slot_4().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
	await Update_Slots()
} 
async function Vendi_Gallina_Slot_5() {
    myContract.methods.Vendi_Gallina_Slot_5().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
	await Update_Slots()
} 
async function Accoppiamento() {
	let x = '';
	await myContract.methods.getAllSlots().call().then(function(response) {
		console.log(response)
		slots = response
	});

	if(slots[0].g.rarity == 1){ // se la prima gallina è comune
		if (slots[1].g.rarity == 1){ // se la seconda gallina è comune
			x = '9';
		}
		if (slots[1].g.rarity == 2){ // se la seconda gallina è rara
			x = '22';
		}
		if (slots[1].g.rarity == 3){ // se la seconda gallina è epica
			x = '37';
		}
		if (slots[1].g.rarity == 4){ // se la seconda gallina è leggendaria
			x = '49';
		}
	}
	else if (slots[0].g.rarity == 2){ // se la prima gallina è rara
		if (slots[1].g.rarity == 1){ // se la seconda gallina è comune
			x = '22';
		}
		if (slots[1].g.rarity == 2){ // se la seconda gallina è rara
			x = '34';
		}
		if (slots[1].g.rarity == 3){ // se la seconda gallina è epica
			x = '46';
		}
		if (slots[1].g.rarity == 4){ // se la seconda gallina è leggendaria
			x = '74';
		}
	}
	else if (slots[0].g.rarity == 3){ // se la prima gallina è epica
		if (slots[1].g.rarity == 1){ // se la seconda gallina è comune
			x = '37';
		}
		if (slots[1].g.rarity == 2){ // se la seconda gallina è rara
			x = '46';
		}
		if (slots[1].g.rarity == 3){ // se la seconda gallina è epica
			x = '80';
		}
		if (slots[1].g.rarity == 4){ // se la seconda gallina è leggendaria
			x = '123';
		}
	}
	else { // se la prima gallina è leggendaria
		if (slots[1].g.rarity == 1){ // se la seconda gallina è comune
			x = '49';
		}
		if (slots[1].g.rarity == 2){ // se la seconda gallina è rara
			x = '74';
		}
		if (slots[1].g.rarity == 3){ // se la seconda gallina è epica
			x = '123';
		}
		if (slots[1].g.rarity == 4){ // se la seconda gallina è leggendaria
			x = '307';
		}
	}

    myContract.methods.Accoppiamento().send({
        from: myAddress,
		value: web3.utils.toWei(x, 'finney')
    }).then(function(response) {
        console.log(response)
    });
	
} 
async function Riscatta() {
    myContract.methods.Riscatta().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 
async function Guarda_Token() {
	await myContract.methods.getToken().call().then(function(response) {
		console.log(response)
		gettoni = response
	});
	document.getElementById("token_count").innerHTML = gettoni;
}
async function Ritira_Soldi() {
    myContract.methods.Ritira_Soldi().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 

/*btn.addEventListener('click', () => {
	btn.style.display = 'none';
});*/

//controllo due checkbox cliccate
async function controlCheckBox(){
	let a = document.getElementsByName('chk');
	let counter = 0;
	let i;
	var z = 0;
	for (i=0;i<a.length;i++) {
		if (a[i].checked==true) {
			slot_index[z] = a[i].id;
			console.log(slot_index[z] + 'sono lo slot' + z);
			counter = counter+1;
			z++;
		}
	}
	if (counter==2) {
		await Sposta();
		for (i=0;i<a.length;i++) {
			if (a[i].checked==true) {
				a[i].checked=false;
			}
		}
	}
}

async function Sposta () {
    myContract.methods.Sposta(slot_index[0], slot_index[1]).send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
	await Update_Slots();
} 

async function Schiudi_Uovo() {
    myContract.methods.Schiudi_Uovo().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 

