# Makefile for Hugo static site

HUGO ?= hugo

.PHONY: help build server clean deploy debug docker-start docker-start-live docker-stop docker-restart docker-logs docker-rebuild docker-build docker-kill docker-check-prereqs

# Default target
help:
	@echo "Makefile for Hugo static site"
	@echo
	@echo "Available commands:"
	@echo "  make build      - Build the site for production"
	@echo "  make server     - Run the local development server"
	@echo "  make clean      - Clean the public directory"
	@echo "  make deploy     - Deploy the site to GitHub (assumes a GitHub repo is set up)"
	@echo

build:
	@echo "Building site..."
	@$(HUGO) --gc

server:
	@echo "Starting local server..."
	@$(HUGO) server -D --disableFastRender --bind 0.0.0.0

debug: clean
	@echo "Starting local server..."
	@$(HUGO) server -D --disableFastRender --bind 0.0.0.0 --logLevel debug

clean:
	@echo "Cleaning public directory..."
	@hugo mod clean
	@rm -rf public/

deploy: build
	@echo "Deploying to GitHub..."
	@git add .
	@git commit -m "Update site content"
	@git push origin main
	@echo "Site deployed successfully!"

update-theme:
	@git submodule update --remote --merge
	@git add *
	@git commit -m "Updated Theme" 
	@git push

#hugo mod get -u
#hugo new my-new-section/my-post.md --kind post
#hugo new posts/my-first-post.md

docker-start: 
	@echo "--> Starting containers in detached mode..."
	@docker compose up -d

docker-start-live: 
	@echo "--> Starting containers..."
	@docker compose up

docker-stop:
	@echo "--> Stopping containers..."
	@docker compose down

docker-restart: stop start

docker-logs:
	@echo "--> Tailing and following logs..."
	@docker compose logs -f --tail=500

docker-build:
	@echo "--> Build all images..."
	@docker compose build

docker-rebuild:
	@echo "--> Forcing a rebuild of all images..."
	@docker compose build --no-cache --parallel --pull --force-rm

docker-kill:
	@echo "--> Killing the containers and remove orphanse"
	@docker compose kill --remove-orphans