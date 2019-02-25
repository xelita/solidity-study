const HDWallerProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWallerProvider(
    'naive scene type chair practice original left egg lift salmon race arrest',
    'https://rinkeby.infura.io/v3/ae0af6e0cb014db8a7ca83b24b869077'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);

    const deployment = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: '0x' + bytecode})
        .send({from: accounts[0], gas: '1000000'});
    console.log('Contract deployed to ', deployment.options.address);
};
deploy();

// 0x2A8fe5c80C1bFc409AA63B060f078d6dd8C5Bd78