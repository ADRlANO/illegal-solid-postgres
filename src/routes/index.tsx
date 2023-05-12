import { sql } from "@vercel/postgres";
import { For, Component } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { refetchRouteData, useRouteData } from "solid-start";

import { PokemonCollection, Pokemon } from "~/components";

export function routeData() {
  return createServerData$(async () => {
    const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;
    rows.map((row) => ({ ...row, type: JSON.parse(row.type) }))
    return rows;
  });
}

function Home() {
  const pokemon = useRouteData<typeof routeData>();
  return (
    <>
      <PokemonCollection>
        <For each={pokemon()}>
          {(pokemon) => (
            <Pokemon id={pokemon.id} name={pokemon.name} />
          )}
        </For>
        <button class="bg-teal-400" onClick={() => refetchRouteData()}>Refresh</button>
      </PokemonCollection>
    </>
  );
}

export default function RootLayout({ children }: { children: Component }) {
  return (
      <>
        <main class="flex min-h-screen w-full flex-col items-center flex-start px-6 pt-6 bg-gray-900">
          <h1 class="text-3xl font-bold mb-3">How is this not illegal?</h1>
          <p class="text-center">
            This page renders{" "}
            <code class="py-0.5 px-1 text-sm rounded-md border border-gray-300 bg-gray-50 dark:bg-[#444] dark:border-[#666]">
              SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12
            </code>{" "}
            from the edge, for every request.
          </p>
          <p class="mt-2 text-center">
            What&apos;s best, the data fetching is defined directly within the
            component tree thanks to React Server Components.{" "}
            <a
              href="https://twitter.com/dan_abramov/status/1341217154566402050"
              target="_blank"
              class="underline"
            >
              Legally
            </a>
            . (
            <a
              class="underline"
              target="_blank"
              href="https://github.com/rauchg/how-is-this-not-illegal"
            >
              Source
            </a>
            )
          </p>
          <Home />
        </main>

        <footer class="text-xs p-5 text-center text-gray-600">
          Images courtesy of{" "}
          <a
            target="_blank"
            class="underline"
            href="https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon"
          >
            PokeAPI
          </a>{" "}
          – Pokemon is © 1996-2023 Nintendo, Creatures, Inc., GAME FREAK
        </footer>
    </>
  );
}