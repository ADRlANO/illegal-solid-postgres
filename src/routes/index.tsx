import { sql } from "@vercel/postgres";
import { For } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { refetchRouteData, useRouteData } from "solid-start";

import { PokemonCollection, Pokemon } from "~/components";

export function routeData() {
  return createServerData$(async () => {
    const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;
    return rows;
  })
}

export default function Home() {
  const pokemon = useRouteData<typeof routeData>();

  return (
    <>
      <PokemonCollection>
        <For each={pokemon()}>
          {(pokemon) => (
            <Pokemon id={pokemon.id} name={pokemon.name} />
          )}
        </For>
        <button onClick={() => refetchRouteData()}>Refresh</button>
      </PokemonCollection>
    </>
  );
}