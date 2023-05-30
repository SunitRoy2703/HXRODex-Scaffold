import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>HXROTrade</title>
        <meta
          name="description"
          content="HXROTrade"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
