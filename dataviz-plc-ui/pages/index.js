import Head from 'next/head';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Web Monitor</title>
      </Head>
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}
