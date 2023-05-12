## How is this not illegal

This beautiful tweet by Guillermo Rauch [brought to Solid Start](https://github.com/ADRlANO/illegal-solid-postgres/blob/77259b48eda07de5ff4cc9672d3cf6291beaa6ae/src/routes/index.tsx#LL10C1-L10C1).

## Setting it up

1. Create a Vercel Postgres database and link it to your project
2. Go to its settings and copy the `psql` command
3. Add `-f sql/init.sql` like so to populate the database with some data:
   ```sh
   psql "postgres://{user}:{password}@{name}.{location}.postgres.vercel-storage.com:5432/verceldb" -f init.sql
   ```