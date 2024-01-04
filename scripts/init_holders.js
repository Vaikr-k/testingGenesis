const web3 = require('web3');
const init_holders = [
  {
    address: '0x51223Fa44F1839b05077feEa6e019EeB18707FE7',
    balance: web3.utils.toBN('10000000000000000000000000').toString('hex'),
  },
];

exports = module.exports = init_holders;
