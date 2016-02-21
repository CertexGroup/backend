var sjcl = require('./core.js');

crypto_keys = sjcl.ecc.elGamal.generateKeys(256);

var public_key = crypto_keys.pub.get();
var secret_key = crypto_keys.sec.get();

var public_key_hex = sjcl.codec.hex.fromBits(public_key.x) + sjcl.codec.hex.fromBits(public_key.y);
var secret_key_hex = sjcl.codec.hex.fromBits(secret_key);

console.log(public_key_hex + ":::" + secret_key_hex);

var bitArray = sjcl.hash.sha256.hash("message");
var digest_sha256 = sjcl.codec.hex.fromBits(bitArray);


console.log(digest_sha256);
