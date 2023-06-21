window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

document.getElementById('connect').addEventListener('click', async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
});

document.getElementById('send').addEventListener('click', async () => {
    const amount = document.getElementById('sendAmount').value;
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    const accounts = await web3.eth.getAccounts();
    await contract.methods.sendEthers().send({ from: accounts[0], value: web3.utils.toWei(amount, 'ether') });
});

document.getElementById('withdraw').addEventListener('click', async () => {
    const amount = document.getElementById('withdrawAmount').value;
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    const accounts = await web3.eth.getAccounts();
    await contract.methods.withdraw(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
});