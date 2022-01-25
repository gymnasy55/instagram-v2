import Head from 'next/head'
import { Header } from "../components/Header/Header";
import { Feed } from "../components/Feed/Feed";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      {/*  Modal  */}

    </div>
  )
}
