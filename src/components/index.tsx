export function PokemonCollection({ children }) {
  return (
    <ul class="max-w-md flex flex-wrap justify-center gap-4 p-4 m-3">
      {children}
    </ul>
  );
}

export function Pokemon({ id, name }) {
  return (
    <li class="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <img
        width={96}
        height={96}
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
      />
      {name}
    </li>
  );
}