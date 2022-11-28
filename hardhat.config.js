require('@nomicfoundation/hardhat-toolbox');
// Import and configure dotenv
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: '0.8.17',
	networks: {
		goerli: {
			url: process.env.DEV_QUICKNODE_API_URL,
			accounts: [process.env.PRIVATE_GOERLI_ACCOUNT_KEY],
		},
	},
};
