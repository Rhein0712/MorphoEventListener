import { ponder } from "@/generated";

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

ponder.on("MorphoContract:Supply", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:SupplyCollateral", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:Withdraw", (event) => {
  console.log(event);
});

ponder.on("MorphoContract:WithdrawCollateral", (event) => {
  console.log(event);
});
