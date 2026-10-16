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

      <main className="flex flex-col items-center gap-10">
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

        {/* Checklist */}
        <ul className="w-full max-w-2xl divide-y divide-zinc-800 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg">
          {checklist.map((item) => (
            <li key={item.label} className="flex items-start gap-4 px-5 py-4">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-zinc-600 text-zinc-300"
                role="img"
                aria-label={item.done ? "Done" : "Not done"}
              >
                {item.done && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                )}
              </span>
              <div className="min-w-0">
                <p
                  className={
                    item.done
                      ? "text-zinc-500 line-through decoration-zinc-600"
                      : "text-zinc-100"
                  }
                >
                  {item.label}
                </p>
                {item.note && (
                  <p className="mt-1 text-sm text-zinc-500">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>

      <Footer link={{ href: "/v1", label: "Previous Cakewatch →" }} />
    </div>
  );
}
