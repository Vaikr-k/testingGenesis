const web3 = require('web3');
const RLP = require('rlp');

// Configure
const validators = [
  {
    consensusAddr: '0x51223Fa44F1839b05077feEa6e019EeB18707FE7',
    feeAddr: '0xe4E08aeCC429a56CE4B8Ea5a098A6F7b78f5742d',
    bscFeeAddr: '0x5cFB8ED8cBe55593696cd11d7b37934D4C105e4D',
    votingPower: 0x0000000000000064,
  },
];
const bLSPublicKeys = [
  '0x85e6972fc98cd3c81d64d40e325acfed44365b97a7567a27939c14dbc7512ddcf54cb1284eb637cfa308ae4e00cb5588',
];

// ===============  Do not edit below ====
function generateExtraData(validators) {
  let extraVanity = Buffer.alloc(32);
  let validatorsBytes = extraDataSerialize(validators);
  let extraSeal = Buffer.alloc(65);
  return Buffer.concat([extraVanity, validatorsBytes, extraSeal]);
}

function extraDataSerialize(validators) {
  let n = validators.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let validator = validators[i];
    arr.push(Buffer.from(web3.utils.hexToBytes(validator.consensusAddr)));
  }
  return Buffer.concat(arr);
}

function validatorUpdateRlpEncode(validators, bLSPublicKeys) {
  let n = validators.length;
  let vals = [];
  for (let i = 0; i < n; i++) {
    vals.push([
      validators[i].consensusAddr,
      validators[i].bscFeeAddr,
      validators[i].feeAddr,
      validators[i].votingPower,
      bLSPublicKeys[i],
    ]);
  }
  let pkg = [0x00, vals];
  return web3.utils.bytesToHex(RLP.encode(pkg));
}

extraValidatorBytes = generateExtraData(validators);
validatorSetBytes = validatorUpdateRlpEncode(validators, bLSPublicKeys);

process.stdout.write(validatorSetBytes);

exports = module.exports = {
  extraValidatorBytes: extraValidatorBytes,
  validatorSetBytes: validatorSetBytes,
};
