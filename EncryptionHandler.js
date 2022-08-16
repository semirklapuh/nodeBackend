const crypto = require("crypto-js");
const { text } = require("express");
//const secret = "pppppppppppppppppppppppppppppppp";
const secret = "d6F3Efeq";

// const encrypt = (password) => {
//   const iv = Buffer.from(crypto.randomBytes(16));
//   const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);

//   const encryptedPassword = Buffer.concat([
//     cipher.update(password),
//     cipher.final(),
//   ]);

//   return { iv: iv, password: encryptedPassword.toString("hex") };
// };

const encrypt = (password) => {
  console.log(password);
  const result = crypto.AES.encrypt(password, secret);
  return result.toString();
};

const decrypt = (password) => {
  const result = crypto.AES.decrypt(password, secret);
  return result.toString(crypto.enc.Utf8);
};

// const decrypt = (encryption) => {
//   console.table(encryption);
//   const decipher = crypto.createDecipheriv(
//     "aes-256-ctr",
//     Buffer.from(secret),
//     Buffer.from(encryption.iv, "hex")
//   );

//   const decryptedPassword = Buffer.concat([
//     decipher.update(Buffer.from(encryption.password, "hex")),
//     decipher.final(),
//   ]);

//   return decryptedPassword.toString();
// };

module.exports = { encrypt, decrypt };
