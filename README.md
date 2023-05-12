## How is this not illegal

This beautiful tweet by Guillermo Rauch [brought to Solid Start](https://github.com/ADRlANO/illegal-solid-postgres/blob/726cc3a285e38cad029ce2217085668c3e101e3a/src/routes/index.tsx#LL17C1-L17C1). [Source](https://github.com/rauchg/how-is-this-not-illegal)

![CleanShot 2023-05-12 at 15 19 27](https://github.com/ADRlANO/illegal-solid-postgres/assets/35582648/2c08088c-5378-40fe-a9d7-df6d6ef33dfa)


## Setting it up

1. Create a Vercel Postgres database and link it to your project
2. Go to its settings and copy the `psql` command
3. Add `-f sql/init.sql` like so to populate the database with some data:
   ```sh
   psql "postgres://{user}:{password}@{name}.{location}.postgres.vercel-storage.com:5432/verceldb" -f init.sql
   ```

## Notes
- To execute the `psql` command you'll need to install Postgres
![CleanShot 2023-05-12 at 15 34 06](https://github.com/ADRlANO/illegal-solid-postgres/assets/35582648/b9b57acf-98fc-4134-bf16-fe1220a71571)
