// TODO: SignMessage
import { verify } from '@noble/ed25519';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";
import useUserSOLBalanceStore from 'stores/useUserSOLBalanceStore';
import { TransactionSignature, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const Withdraw: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const { getUserSOLBalance } = useUserSOLBalanceStore();

    const onClick = useCallback(async () => {
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
            return;
        }

        try {


            // signature = await connection.requestAirdrop(publicKey, LAMPORTS_PER_SOL);

            // // Get the lates block hash to use on our transaction and confirmation
            // let latestBlockhash = await connection.getLatestBlockhash()
            // await connection.confirmTransaction({ signature, ...latestBlockhash }, 'confirmed');

            // notify({ type: 'success', message: 'Airdrop successful!', txid: signature });

            // getUserSOLBalance(publicKey, connection);
        } catch (error: any) {
            // notify({ type: 'error', message: `Airdrop failed!`, description: error?.message, txid: signature });
            // console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }, [publicKey, connection, getUserSOLBalance]);
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-2" className="btn">Withdraw</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <label htmlFor="my-modal-2" className="modal cursor-pointer">
                <label className="modal-box items-center w-4/12 relative" htmlFor="">
                    <h1 className="text-center text-4xl font-bold">Withdraw UXDC</h1>
                    <div className="mt-8 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-center text-1xl">Enter Withdraw Amount(in USD)</span>
                        </label>
                        <input type="number" placeholder="$0.00" className="input input-bordered w-full max-w-xs" />
                        <button
                            className="group w-60 mt-4 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                            onClick={onClick}
                        >
                            <span className="block" >
                                Withdraw UXDC
                            </span>
                        </button>
                    </div>
                </label>
            </label>
        </div>
    );
};
