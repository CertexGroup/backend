var sjcl = require('./core.js');

// PUBLIC KEY GENERATION
console.log("KEY GENERATION");

crypto_keys = sjcl.ecc.elGamal.generateKeys(256);

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

//var ct = sjcl.encrypt(crypto_keys.pub, "this is a secret message");
//console.log(ct);
//var pt = sjcl.decrypt(crypto_keys.sec, ct);
//console.log(pt);
var sig = crypto_keys.sec.sign("chomba");
var ok = crypto_keys.pub.verify("chomba", sig);
