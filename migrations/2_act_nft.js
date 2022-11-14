const ActNFT = artifacts.require("./ActNFT.sol");
const fs = require("fs");

module.exports = function (deployer) {
  deployer.deploy(ActNFT).then(()=> {
    if (ActNFT._json) {
      fs.writeFile(
        "deployedABI_ActNFT",
        JSON.stringify(ActNFT._json.abi),
        (err) => {
          if (err) throw err;
          console.log("파일에 ABI 입력 성공");
        }
      );
    }

    fs.writeFile("deployedAddress_ActNFT", ActNFT.address, (err) => {
      if (err) throw err;
      console.log("파일에 주소 입력 성공");
    });
  });
};
