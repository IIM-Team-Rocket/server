install: ## Install local dependancies and launch docker-compose
	yarn 
	docker-compose up

start: ## Start Docker
	docker-compose up -d --build
	docker-compose ps

stop: ## Stop containers
	docker-compose stop


migrate: ## Generates a migration file in prisma directory
	npx prisma migrate save --name init --experimental
	npx prisma migrate up --experimental

generate:
	npx prisma generate