import { For } from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";
import { createServerAction$ } from "solid-start/server";

import usePokemon from "~/db/usePokemon";
import { PokemonCollection, Pokemon } from "~/components";

export function routeData() {
  return usePokemon();
}

export default function Home() {
  // const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;
  const pokemon = useRouteData<typeof routeData>();
  const rows = [{ id: 282, name: 'Gardevoir'}];

  return (
    <PokemonCollection>
      <For each={rows}>
        {(pokemon) => (
          <Pokemon id={pokemon.id} name={pokemon.name} />
        )}
      </For>
      Pokimon
    </PokemonCollection>
  );
}