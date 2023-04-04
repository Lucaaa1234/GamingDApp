let myAddress = "";
let web3 = {};
//web3 = {};
let myContract = {}

async function connectMetamask() {
    const {ethereum} = window; //prende gli ethereum dalla window del browser
    //console.log(Boolean(ethereum && ethereum.isMetaMask));
    // console.log(window.ethereum);
    web3 = new Web3(ethereum);
    
    await web3.eth.getAccounts().then(function(response){
        myAddress = response[0];
        console.log(response);
    })

    const accounts = await ethereum.request({method: 'eth_accounts'});
    console.log("account via metamask api");
    console.log(accounts[0]);
    myAddress = accounts[0];
}

async function loadContract() { //variabile per loadare il contratto, prima di usarla bisogna connettersi a metamask
    let abi = [
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
		"name": "Accoppiamento",
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
		"inputs": [],
		"name": "ciao",
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
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
let contractAddress = "0x698186FD2476282b1691A1F5eb149A53be598A02"
    myContract = new web3.eth.Contract(abi, contractAddress);
    console.log(myContract);
}

async function Compra_Comune() {
    myContract.methods.Compra_Comune().send({
        from: myAddress,
        value: web3.utils.toWei('100', 'gwei')
    }).then(function(response) {
        console.log(response)
    });
	
}
async function Compra_Rara() {
    myContract.methods.Compra_Rara().send({
        from: myAddress,
        value: web3.utils.toWei('1000', 'gwei')
    }).then(function(response) {
        console.log(response)
    }); 
    
}
async function Compra_Epica() {
    myContract.methods.Compra_Epica().send({
        from: myAddress,
        value: web3.utils.toWei('5000', 'gwei')
    }).then(function(response) {
        console.log(response)
    }); 
}
async function Vendi_Gallina_Slot_3() {
    myContract.methods.Vendi_Gallina_Slot_3().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    }); 
}
async function Vendi_Gallina_Slot_4() {
    myContract.methods.Vendi_Gallina_Slot_4().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 
async function Vendi_Gallina_Slot_5() {
    myContract.methods.Vendi_Gallina_Slot_5().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 
async function Accoppiamento() {
    myContract.methods.Accoppiamento().send({
        from: myAddress,
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
async function Ritira_Soldi() {
    myContract.methods.Ritira_Soldi().send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 
async function Sposta() {
    myContract.methods.Sposta(0, 4).send({
        from: myAddress,
    }).then(function(response) {
        console.log(response)
    });  
} 

