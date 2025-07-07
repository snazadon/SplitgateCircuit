import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Splitgate 2 Tournaments</h1>
      <p className="mb-6">Host and manage your own community tournaments.</p>
      <Link href="/create">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Create a Tournament
        </button>
      </Link>
    </main>
  );
}
 
