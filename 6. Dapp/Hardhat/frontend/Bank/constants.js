const CONTRACT_ADDRESS = "your contract address here";
const ABI = [ // your contract ABI here
    // example
    {
        "constant": false,
        "inputs": [
            {
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    // other functions...
];