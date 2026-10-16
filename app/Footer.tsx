import Link from "next/link";
import { GithubSVG, LinkedinSVG, TwitterSVG } from "./SVGs";

export default function Footer({
  link,
}: {
  link?: { href: string; label: string };
}) {
  return (
    <footer className="mt-auto flex flex-col items-center gap-4 py-8 text-center">
      {link && (
        <Link
          href={link.href}
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          {link.label}
        </Link>
      )}
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/maimunar"
          target="_blank"
          rel="noopener noreferrer"
          className="h-6 w-6 text-zinc-400 transition-colors hover:text-white"
        >
          <GithubSVG />
        </a>
        <a
          href="https://linkedin.com/in/aleksandar-ivanov-1a35981a1"
          target="_blank"
          rel="noopener noreferrer"
          className="h-6 w-6 text-zinc-400 transition-colors hover:text-white"
        >
          <LinkedinSVG />
        </a>
        <a
          href="https://x.com/Maimunar"
          target="_blank"
          rel="noopener noreferrer"
          className="h-6 w-6 text-zinc-400 transition-colors hover:text-white"
        >
          <TwitterSVG />
        </a>
      </div>
    </footer>
  );
}
