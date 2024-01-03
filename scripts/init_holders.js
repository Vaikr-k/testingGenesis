const web3 = require('web3');
const init_holders = [
  {
    address: '0x58a42F3E72ED85D5460df3E57100766881f25ff1',
    balance: web3.utils.toBN('10000000000000000000000000').toString('hex'),
    address: '0x343D38Bc4cC161914c90f1AE38b0A325cB5f91B7',
    balance: web3.utils.toBN('10000000000000000000000000').toString('hex'),
    address: '0x8de4d0ef75ca448FeAF5805D7570B14bcdDa62e2',
    balance: web3.utils.toBN('10000000000000000000000000').toString('hex'),
  },
];

exports = module.exports = init_holders;
