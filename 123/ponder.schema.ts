import { createSchema } from "@ponder/core";
 
export default createSchema((p) => ({
  BlitmapToken: p.createTable({
    id: p.string(),
    owner: p.string(), // Ethereum address
  }),
}));
