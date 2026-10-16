import { checklist } from "./checklist";

// Not rendered on the page right now; add <Checklist /> under the progress bar to show the tasks.
export default function Checklist() {
  return (
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
  );
}
