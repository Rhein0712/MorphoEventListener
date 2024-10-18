import { createConfig } from "@ponder/core";
import { http, parseAbiItem } from "viem";

import { MorphoAbi } from "./abis/MorphoAbi";

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    MorphoContract: {
      network: "mainnet",
      abi: MorphoAbi,
      address: "0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb",
      startBlock: 20989140, // corresponds to a block added around 0300 UTC, October 18th, 2024
    },
  },
});
