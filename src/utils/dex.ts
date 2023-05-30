import { useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import dexterityTs from "@hxronetwork/dexterity-ts";
const dexterity = dexterityTs;

export const HXRODex = async () => {


  const { publicKey, signMessage } = useWallet();
  // Solana Testnet RPC for connection, which can be used later to get your manifest
  const CLUSTER_NAME = "devnet";
  const rpc = clusterApiUrl(CLUSTER_NAME);
  // or your own RPC URL // const rpc = "https://your-own-rpc.com"

  // From the keypair we can pass it to the Wallet() method to then be able to pass it in getManifest
  const wallet = useWallet();

  // Get the latest manifest
  const manifest = await dexterity.getManifest(rpc, false, wallet);

  // BTC-USD Market-Product-Group PubKey
  const MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS";
  const mpgPubkey = new PublicKey(MPG);

  // Our TRG for the BTC-USD MPG
  const trgPubkey = await manifest.createTrg(mpgPubkey);

  console.log(
    `Wallet: ${wallet.publicKey.toBase58()} TRG: ${trgPubkey.toBase58()}`
  );

  const trader = new dexterity.Trader(manifest, trgPubkey);

  // View Cash amount in TRG account
  const viewAccount = async () => {
    console.log("Net Cash:", trader.getNetCash().toString());
  };

  const streamAccount = () => {
    console.log(
      "Portfolio Value:",
      trader.getPortfolioValue().toString(),
      "Position Value:",
      trader.getPositionValue().toString(),
      "Net Cash:",
      trader.getNetCash().toString(),
      "PnL:",
      trader.getPnL().toString()
    );
  };

  // Connect to the trader & get updated account cash balance
  const account = async () => await trader.connect(NaN, viewAccount);

  await account();

  const PRODUCT_NAME = "BTCUSD-PERP";
  let perpIndex: any;
  for (const [name, { index, product }] of trader.getProducts()) {
    console.log("saw", name, " ", index);
    if (name !== PRODUCT_NAME) {
      continue;
    }
    perpIndex = index;
    break;
  }

  const QUOTE_SIZE = dexterity.Fractional.New(1, 0);

  const price = 22_000;

  const dollars = dexterity.Fractional.New(price, 0);

  //Long
  trader.newOrder(perpIndex, true, dollars, QUOTE_SIZE).then(async () => {
    console.log(`Placed Buy Limit Order at $${dollars}`);
    await account();
  });

  //Short
  trader.newOrder(perpIndex, false, dollars, QUOTE_SIZE).then(async () => {
    console.log(`Placed Sell Limit Order at $${dollars}`);
    await account();
  });

  const deposit_or_withdraw = async (type: string, amount: number) => {
    if (type === "d") {
      try {
        console.log(`Depositing ${amount} UXDC...`);
        await trader.deposit(dexterity.Fractional.New(amount, 0));
        console.log(`Successfully Deposited ${amount} UXDC`);
        await account();
      } catch (error) {
        console.log(error);
      }
    } else if (type === "w") {
      try {
        console.log(`Withdrawing ${amount} UXDC...`);
        await trader.withdraw(dexterity.Fractional.New(amount, 0));
        console.log(`Successfully Withdrawn ${amount} UXDC`);
        await account();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Error: Funding Type not valid; Valid Types");
      return;
    }
  };


};

