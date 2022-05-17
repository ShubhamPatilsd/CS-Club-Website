import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Info } from "../components/Info";
import { Haiku } from "../components/Haiku";
import { Discord } from "../components/Discord";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Info />
      <Haiku />
      <Discord />
    </div>
  );
};

export default Home;
