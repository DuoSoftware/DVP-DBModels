# Environment variables

DVP-DBModels is a shared library. It reads its settings from the config of the service that uses it, by config key (for example `config.DB.Cluster`), not by environment variable name.

- Each service that uses the library maps these config keys to the variables below in its own `config/custom-environment-variables.js`, and lists them in its own `ENVIRONMENT_VARIABLES.md`.
- `config/custom-environment-variables.js` is used only for local tests and holds only the keys the library reads.
- **Default** is what the library uses when the service does not set the key. Real hosts, URLs and secrets are never written here.
- Whenever the library starts or stops reading a config key or a variable, or a value's meaning changes, update this file in the same change. See `.claude/rules/environment-variables.md`.

## Config keys read from the service

| Config key | Variable | Description | Type | Possible values | Default | Required | Secret |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `DB.Cluster` | `SYS_POSTGRES_CLUSTER_ENABLED` | dvp-dbmodels: use a connection pool sized by SYS_POSTGRES_POOL_MAX and SYS_POSTGRES_POOL_MIN. | bool | true \| false | off when unset | no | no |
| `DB.Database` | `SYS_POSTGRES_DB` | Postgres database name. | string | database name | — | yes | no |
| `DB.Host` | `SYS_POSTGRES_HOST` | Postgres host. | host | host name or IP | — | yes | no |
| `DB.Password` | `SYS_POSTGRES_PASSWORD` | Postgres password. | string | password | — | yes | yes |
| `DB.Port` | `SYS_POSTGRES_PORT` | Postgres port. | port | 1–65535 | — | yes | no |
| `DB.Type` | `SYS_POSTGRES_TYPE` | Sequelize dialect used by dvp-dbmodels. | enum | postgres | — | yes | no |
| `DB.User` | `SYS_POSTGRES_USER` | Postgres user. | string | user name | — | yes | no |

## Variables read directly

Read straight from the environment by the library code. These names are reserved and never change.

None.
