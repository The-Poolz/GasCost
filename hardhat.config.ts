import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [
            {
                version: "0.8.22",
            },
        ],
        settings: {
            evmVersion: "byzantium",
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
}

export default config
