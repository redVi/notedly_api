# notedly

## docker commands
### run docker containers
docker-compose up --build -d

### restart all
docker restart $$(docker ps -a -q)

### stop all
docker stop $$(docker ps -a -q); docker ps

### clear
docker volume rm $(docker volume ls -q); docker system prune -a

## connect to database:
mongodb://user:password@localhost:27017/database_name

## GraphQL interface
open https://studio.apollographql.com/sandbox/explorer
