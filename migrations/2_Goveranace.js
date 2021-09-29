const DummyToken = artifacts.require("DummyToken")
const CrossChainGov = artifacts.require("CrossChainGov");

module.exports = function (deployer) {
    deployer.deploy(DummyToken).then(function () {
        //Bond token, ratifier bond amount, submitter bond amount, Chain ID
        return deployer.deploy(CrossChainGov, DummyToken.address, '1000000000000000000', '1000000000000000000', 1337)
    });
};