// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    struct Waver {
        address waver;
        uint256 timestamp;
    }

    Waver[] wavers;

    constructor() {
        console.log("Yo, I am your first smart contract :')");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        wavers.push(Waver(msg.sender, block.timestamp));
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("Total waves %d", totalWaves);
        return totalWaves;
    }

    function getAllWavers() public view returns (Waver[] memory) {
        console.log("All wavers %d", wavers.length);
        return wavers;
    }
}