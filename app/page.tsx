import Image from "next/image";
import Footer from "./Footer";
import { checklist } from "./checklist";

export default function Home() {
  const done = checklist.filter((item) => item.done).length;
  const total = checklist.length;
  const percentage = total > 0 ? Math.round((done / total) * 1000) / 10 : 0;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-900 to-black px-4">
      {/* Title at the top */}
      <header className="pt-12 text-center">
        <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent drop-shadow-lg">
          Cakewatch
        </h1>
      </header>

      {/* Image below the title */}
      <div className="my-12 flex justify-center">
        <Image
          src="/rip-es-cake.svg"
          alt="A cake with a headstone and the Elasticsearch logo"
          width={200}
          height={200}
          className="rounded-xl"
        />
      </div>

      <main className="flex flex-col items-center">
        {/* Progress bar */}
        <div className="w-full max-w-2xl">
          <div className="relative h-16 w-full overflow-hidden rounded-full bg-zinc-800 shadow-lg">
            <div
              className="h-full animate-fill rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              style={{ width: `${percentage}%` }}
            />
            {/* Percentage inside the bar */}
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">
              {percentage}%
            </div>
          </div>
        </div>
      </main>

      <Footer link={{ href: "/v1", label: "Previous Cakewatch →" }} />
    </div>
  );
}
