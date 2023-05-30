
import { FC, useCallback } from "react";
import ChartView from "components/chart";
import { PlaceOrder } from "components/PlaceOrder";
import { useWallet } from "@solana/wallet-adapter-react";
import { notify } from "utils/notifications";
import { clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";
import { Wallet } from "@coral-xyz/anchor";
import dexterityTs from "@hxronetwork/dexterity-ts";
const dexterity = dexterityTs;
import bs58 from 'bs58'
import { Deposit } from "components/Deposit";
import { Withdraw } from "components/Withdraw";

export const DexView: FC = () => {
  return (
    <div className="hero min-h-screen p-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                  <h1 className="text-left text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
                    Amount
                  </h1>
                </label>
                <input id="amount" type="number" placeholder="0.00" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <PlaceOrder />
              </div>
              <div className="grid grid-rows-1 grid-flow-col">
                <div className="form-control mt-6">
                  <Deposit/>
                </div>
                <div className="ml-6 form-control mt-6">
                 <Withdraw/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChartView productSelect={undefined} />
      </div>
    </div>

  );
};
