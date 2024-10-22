import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  // Create a table for Supply event
  Supply: p.createTable({
    id: p.string(),           // Unique ID for the event
    user: p.string(),         // User involved in the event
    caller: p.string(),       // Address of the caller
    onBehalf: p.string(),     // Address of the one on behalf
    assets: p.bigint(),       // Amount of assets involved
    timestamp: p.int(),       // Event timestamp
  }),

  // Create a table for Withdraw event
  Withdraw: p.createTable({
    id: p.string(),           // Unique ID for the event
    caller: p.string(),       // Address of the caller
    onBehalf: p.string(),     // Address of the one on behalf
    receiver: p.string(),     // Address of the receiver
    assets: p.bigint(),       // Amount of assets withdrawn
    shares: p.bigint(),       // Shares involved in the withdraw event
    timestamp: p.int(),       // Event timestamp
  }),

  // Create a table for SupplyCollateral event
  SupplyCollateral: p.createTable({
    id: p.string(),           // Unique ID for the event
    caller: p.string(),       // Address of the caller
    onBehalf: p.string(),     // Address of the one on behalf
    assets: p.bigint(),       // Collateral amount supplied
    timestamp: p.int(),       // Event timestamp
  }),

  // Create a table for WithdrawCollateral event
  WithdrawCollateral: p.createTable({
    id: p.string(),           // Unique ID for the event
    caller: p.string(),       // Address of the caller
    onBehalf: p.string(),     // Address of the one on behalf
    receiver: p.string(),     // Address of the receiver
    assets: p.bigint(),       // Collateral amount withdrawn
    timestamp: p.int(),       // Event timestamp
  }),
}));
