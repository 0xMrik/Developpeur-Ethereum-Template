const Web3 = require('web3')
const rpcURL = "https://goerli.infura.io/v3/b433f695e0da44468c94554abafd2ade"
const web3 = new Web3(rpcURL)
 
web3.eth.getBalance("0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9", (err, wei) => { 
   balance = web3.utils.fromWei(wei, 'ether'); // convertir la valeur en ether
   console.log(balance);
});

const ABI = [
	{
		"inputs": [],
		"name": "get",
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

const address = "0xfA95935932ECcd000765C772CF8A731B1E215d06"
const simpleStorage = new web3.eth.Contract(ABI,address);

simpleStorage.methods.get().call((err, data) => {
    console.log(data);
})



