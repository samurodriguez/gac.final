"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(0);

  return (
    <main className="mx-auto min-h-screen max-w-3xl py-32 px-16 sm:items-start">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 mb-6">
        Proyecto final con Github Actions
      </h1>

      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-6">
        Resultado:{" "}
        <span
          className="font-medium text-zinc-950 dark:text-zinc-50"
          data-testid="result"
        >
          {result}
        </span>
        .
      </p>

      <menu className="flex items-center gap-3">
        <li>
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            onClick={() => setResult(result - 1)}
          >
            Restar -
          </button>
        </li>
        <li>
          <button
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            onClick={() => setResult(result + 1)}
          >
            Sumar +
          </button>
        </li>
      </menu>
    </main>
  );
}
