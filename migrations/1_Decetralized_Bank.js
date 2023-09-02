var Decentralized_Bank = artifacts.require("./Decentralized_Bank.sol");

module.exports = function(deployer)
{
    deployer.deploy(Decentralized_Bank);
};
