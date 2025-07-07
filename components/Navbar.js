import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6 shadow-md">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/tournaments" className="hover:text-blue-400">Tournaments</Link>
      <Link href="/create" className="hover:text-blue-400">Create</Link>
    </nav>
  );
}
