"use strict";
exports.__esModule = true;
var web3_js_1 = require("@solana/web3.js");
var dexterity_ts_1 = require("@hxronetwork/dexterity-ts");
var dexterity = dexterity_ts_1["default"];
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wallet = (0, wallet_adapter_react_1.useWallet)();
var CLUSTER_NAME = "devnet";
var rpc = (0, web3_js_1.clusterApiUrl)(CLUSTER_NAME);
// get the latest manifest
var manifest = await dexterity.getManifest(rpc, false, wallet);
// BTC-USD Market-Product-Group PubKey
var MPG = "DDxNzq3A4qKJxnK2PFYeXE1SgGXCR5baaDBhpfLn3LRS";
var mpgPubkey = new web3_js_1.PublicKey(MPG);
//Create our TRG for the BTC-USD MPG 
var trgPubkey = await manifest.createTrg(mpgPubkey);
console.log("success! trg pubkey:", trgPubkey.toBase58());
