# DVP-DBModels


## Database connection settings (DST-6400)

| Key under `DB` | Environment variable | Meaning |
|---|---|---|
| `Cluster` | `SYS_DATABASE_POSTGRES_CLUSTER` | `true`: pool of 5; for Postgres also 10 s to get a connection and idle ones closed after 10 s |
| `PgBouncer` | `SYS_DATABASE_PGBOUNCER` | `false` (default): a direct connection to Postgres, and `dialectOptions.statement_timeout` is sent. `true`: the service connects through PgBouncer, so `statement_timeout` and the other login-time limits are not sent (PgBouncer refuses them). Set timeouts within Pgbouncer ini |

Map the environment variables in each service's `config/custom-environment-variables`, or set them with
`NODE_CONFIG`. For Postgres, `keepAlive` is always on; set the probe timing with the container's
`net.ipv4.tcp_keepalive_*` sysctls. Sequelize always uses the `pg` this package depends on (8.11.5), whatever `pg`
the service has itself. The startup line shows it: `[dvp-dbmodels] pg 8.11.5, keepAlive on, PgBouncer=true: …`
