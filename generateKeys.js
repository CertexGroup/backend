var sjcl = require('./core.js');

// PUBLIC KEY GENERATION
console.log("KEY GENERATION");

crypto_keys = sjcl.ecc.ecdsa.generateKeys(256);

var public_key = crypto_keys.pub.get();
var secret_key = crypto_keys.sec.get();

var public_key_hex = sjcl.codec.hex.fromBits(public_key.x) + sjcl.codec.hex.fromBits(public_key.y);
var secret_key_hex = sjcl.codec.hex.fromBits(secret_key);

  console.log(public_key_hex + ":::" + secret_key_hex);

// SHA-256 HASHING
console.log("HASHING");

var bitArray = sjcl.hash.sha256.hash("message");
var digest_sha256 = sjcl.codec.hex.fromBits(bitArray);

  console.log(digest_sha256);

// ENCRYPTING AND DECRIPTING
console.log("ENCRYPTION");

var sig = crypto_keys.sec.sign(sjcl.hash.sha256.hash("Hello World!"));

var ok = crypto_keys.pub.verify(sjcl.hash.sha256.hash("Hello Wold!"), sig);

console.log(ok);
