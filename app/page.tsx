"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [total, setTotal] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      try {
        const res = await fetch("/api/progress");
        const data = await res.json();
        setProgress(data.progress);
        setTotal(data.total);
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProgress();
  }, []);

  const percentage = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-900 to-black px-4">
      {/* Title at the top */}
      <header className="pt-12 text-center">
        <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent drop-shadow-lg">
          Cakewatch
        </h1>
      </header>

      {/* Image below the progress bar */}
      <div className="my-16 flex justify-center">
        <Image
          src="/cake.png"
          alt="Progress indicator"
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>
      {/* Progress bar in the middle */}
      <main className="flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          {/* Progress bar */}
          <div className="relative h-16 w-full overflow-hidden rounded-full bg-zinc-800 shadow-lg">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
            {/* Percentage inside the bar */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">
              {loading ? "Loading..." : `${percentage}%`}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
