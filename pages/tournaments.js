import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    async function fetchTournaments() {
      const { data, error } = await supabase
        .from('tournaments')
        .select('*')
        .order('date', { ascending: true });

      if (error) console.error('Fetch error:', error);
      else setTournaments(data);
    }

    fetchTournaments();
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Tournaments</h1>
      {tournaments.length === 0 ? (
        <p>No tournaments found.</p>
      ) : (
        <ul className="space-y-4">
          {tournaments.map((t) => (
            <li key={t.id} className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{t.name}</h2>
              <p className="text-gray-300">📅 {new Date(t.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
