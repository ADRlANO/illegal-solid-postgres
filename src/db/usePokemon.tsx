import { createServerData$ } from "solid-start/server";
import prisma from "~/lib/prisma";

const usePokemon = () => (
  createServerData$(async (_, { request }) => {
    const pokemon = prisma.pokemon.findMany();
    return pokemon;
  })
);

export default usePokemon;