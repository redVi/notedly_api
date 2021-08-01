# notedly

## connect to database:
mongodb://user:password@localhost:27017/database_name

## mongo shell

```shell
# create user
use database_name;

db.createUser(
  {
    user: "admin",
    pwd:  passwordPrompt(),   // or cleartext password
    roles: [
      role: "readWrite", db: "notedly" }
    ]
  }
)
```

## GraphQL interface
open https://studio.apollographql.com/sandbox/explorer
