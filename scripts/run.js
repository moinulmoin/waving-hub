const main = async () => {
	const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();
	console.log('Contract addy:', waveContract.address);

	let waveCount;
	waveCount = await waveContract.getTotalWaves();
	console.log(waveCount.toNumber());

	const waveTxn = await waveContract.wave('Wassap, I am waving 1!');
	await waveTxn.wait();

	const waveTxn2 = await waveContract.wave('Wassap, I am waving 2!');
	await waveTxn2.wait();

	let allWaves = await waveContract.getAllWaves();
	console.log(allWaves);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();
