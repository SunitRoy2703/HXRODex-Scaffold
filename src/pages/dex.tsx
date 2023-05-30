import type { NextPage } from "next";
import Head from "next/head";
import { DexView } from "../views";

const Dex: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>HXROTrade</title>
                <meta
                    name="description"
                    content="HXROTrade"
                />
            </Head>
            <DexView />
        </div>
    );
};

export default Dex;
