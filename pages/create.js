 import { useState } from 'react';

export default function CreateTournament() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // For now, just log it
    console.log('Tournament:', { name, date });

    alert('Tournament created (not saved yet, just test)');
    setName('');
    setDate('');
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Create a Tournament</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Tournament Name</label>
          <input
            className="w-full px-3 py-2 text-black rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 text-black rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

