import { ponder } from "@/generated";

let totalValueLocked: bigint = BigInt(0);

ponder.on("MorphoContract:AccrueInterest", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:Borrow", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:CreateMarket", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:EnableIrm", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:EnableLltv", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:FlashLoan", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:IncrementNonce", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:Liquidate", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:Repay", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:SetAuthorization", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:SetFee", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:SetFeeRecipient", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:SetOwner", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:Supply", async ({ event, context }) => {
  console.log('Supply event received:', event.args);  // Check if event is received
  
  const { id, caller, onBehalf, assets } = event.args;
  const timestamp: number = event.block?.timestamp ? Number(event.block.timestamp) : Date.now();
  const { Supply } = context.db;

  try {
    await Supply.create({
      id,
      data: {
        caller,
        onBehalf,
        assets: BigInt(assets),  // Ensure assets is compatible with BigInt
        user: onBehalf,  // Assuming user is similar to onBehalf or any other appropriate value
        timestamp,
      },
    });

    // Update totalValueLocked by adding the assets supplied
    totalValueLocked += BigInt(assets);

    // Log net change and updated TVL
    console.log(`Net TVL change: +${BigInt(assets)} at ${timestamp}`);
    console.log(`Updated totalValueLocked: ${totalValueLocked}`);

  } catch (error) {
    console.error("Error creating Supply record:", error);
  }
});

ponder.on("MorphoContract:Withdraw", async ({ event, context }) => {
  console.log('Withdraw event received:', event.args);  // Check if event is received

  const { id, caller, onBehalf, receiver, assets, shares } = event.args;
  const timestamp: number = event.block?.timestamp ? Number(event.block.timestamp) : Date.now();
  const { Withdraw } = context.db;

  try {
    await Withdraw.create({
      id,
      data: {
        caller,
        onBehalf,
        receiver,  // Include receiver in the data
        assets: BigInt(assets),  // Ensure assets is compatible with BigInt
        shares: BigInt(shares),  // Include shares and convert to BigInt
        timestamp,
      },
    });

    // Update totalValueLocked by subtracting the assets withdrawn
    totalValueLocked -= BigInt(assets);

    // Log net change and updated TVL
    console.log(`Net TVL change: -${BigInt(assets)} at ${timestamp}`);
    console.log(`Updated totalValueLocked: ${totalValueLocked}`);

  } catch (error) {
    console.error("Error creating Withdraw record:", error);
  }
});

  ponder.on("MorphoContract:SupplyCollateral", async ({ event, context }) => {
    console.log('SupplyCollateral event received:', event.args);  // Check if event is received
  
    const { id, caller, onBehalf, assets } = event.args;
    const timestamp: number = event.block?.timestamp ? Number(event.block.timestamp) : Date.now();
    const { SupplyCollateral } = context.db;
  
    try {
      await SupplyCollateral.create({
        id,
        data: {
          caller,
          onBehalf,
          assets: BigInt(assets),  // Ensure assets is compatible with BigInt
          timestamp,
        },
      });

      // Update totalValueLocked by adding the collateral supplied
      totalValueLocked += BigInt(assets);

      // Log net change and updated TVL
      console.log(`Net TVL change: +${BigInt(assets)} at ${timestamp}`);
      console.log(`Updated totalValueLocked: ${totalValueLocked}`);

    } catch (error) {
      console.error("Error creating SupplyCollateral record:", error);
    }
  });  

  ponder.on("MorphoContract:WithdrawCollateral", async ({ event, context }) => {
    console.log('WithdrawCollateral event received:', event.args);  // Check if event is received
  
    const { id, caller, onBehalf, receiver, assets } = event.args;
    const timestamp: number = event.block?.timestamp ? Number(event.block.timestamp) : Date.now();
    const { WithdrawCollateral } = context.db;
  
    try {
      await WithdrawCollateral.create({
        id,
        data: {
          caller,
          onBehalf,
          receiver: receiver || "default_receiver", // Ensure receiver is provided or set a default value
          assets: BigInt(assets),  // Ensure assets is compatible with BigInt
          timestamp,  // This will now be a number
        },
      });

      // Update totalValueLocked by subtracting the collateral withdrawn
      totalValueLocked -= BigInt(assets);

      // Log net change and updated TVL
      console.log(`Net TVL change: -${BigInt(assets)} at ${timestamp}`);
      console.log(`Updated totalValueLocked: ${totalValueLocked}`);

    } catch (error) {
      console.error("Error creating WithdrawCollateral record:", error);
    }
  });  

import readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A command to check TVL
rl.on('line', (input) => {
  if (input === 'check tvl') {
    console.log(`Current TVL: ${totalValueLocked}`);
  }
});
