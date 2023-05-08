import { sql } from "@vercel/postgres";
import { For } from "solid-js";
import { PokemonCollection, Pokemon } from "~/components";

export default function Home() {
  // const { rows } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12`;
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

export const runtime = "edge";
export const dynamic = "force-dynamic";

// psql "postgres://default:y4TcpsPwAm5i@ep-long-sky-573524.us-east-1.postgres.vercel-storage.com:5432/verceldb" -f init.sql
