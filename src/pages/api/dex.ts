import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import dexterityTs from "@hxronetwork/dexterity-ts";
const dexterity = dexterityTs;
import { useConnection, useWallet } from "@solana/wallet-adapter-react";


export async function Dex(){
  const wallet = useWallet();

  const CLUSTER_NAME = "devnet";
  const rpc = clusterApiUrl(CLUSTER_NAME);

  // get the latest manifest
  const manifest = await dexterity.getManifest(rpc, false, wallet);

  // BTC-USD Market-Product-Group PubKey
  const MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS";
  const mpgPubkey = new PublicKey(MPG);

  //Create our TRG for the BTC-USD MPG
  const trgPubkey = await manifest.createTrg(mpgPubkey);
  console.log("success! trg pubkey:", trgPubkey.toBase58());
}
