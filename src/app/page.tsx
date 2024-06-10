'use client'
import { useState } from "react";

export default function Home() {
  const [ username, setUsername ] = useState('')

  return (
    <main className="bg-green-50 min-h-[100dvh] grid m-auto">
      <input
        className="m-auto mb-4 p-4 rounded-xl"
        placeholder="please enter your name"
        aria-label="user name input"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="m-auto mt-4 grid gap-4">
        <div className="flex flex-col"><p className="p-4">use "tester" to access</p><a href={`/leaderboard?username=${username}`} className="border-2 bg-slate-50 p-4 rounded-xl">Leaderboard</a></div>
        <a href="/images" className="border-2 bg-slate-50 p-4 rounded-xl">Images</a>
      </div>
    </main>
  );
}
