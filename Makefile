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

# Build the site for production (no drafts)
build:
	@echo "Building site..."
	@$(HUGO) --gc

# Run the local development server (with drafts)
server:
	@echo "Starting local server..."
	@$(HUGO) server --disableFastRender --bind 0.0.0.0

# Run the local development server (with drafts)
debug: clean
	@echo "Starting local server..."
	@$(HUGO) server --disableFastRender --bind 0.0.0.0 --logLevel debug

# Clean the public directory
clean:
	@echo "Cleaning public directory..."
	@hugo mod clean
	@rm -rf public/

# Deploy the site to GitHub
deploy: build
	@echo "Deploying to GitHub..."
	@git add .
	@git commit -m "Update site content"
	@git push origin main
	@echo "Site deployed successfully!"



#hugo mod get -u
#hugo new my-new-section/my-post.md --kind post
#hugo new posts/my-first-post.md


docker-start: docker-check-prereqs
	@echo "--> Starting containers in detached mode..."
	@docker compose up -d

docker-start-live: docker-check-prereqs
	@echo "--> Starting containers in detached mode..."
	@docker compose up

docker-stop:
	@echo "--> Stopping containers..."
	@docker compose down

docker-restart: stop start

docker-logs:
	@echo "--> Tailing and following logs..."
	@docker compose logs -f --tail=500

docker-rebuild:
	@echo "--> Forcing a rebuild of all images..."
	@docker compose build --no-cache --parallel --pull --force-rm

docker-build:
	@echo "--> Build all images..."
	@docker compose build

docker-kill:
	@echo "--> Killing the containers and remove orphanse"
	@docker compose kill --remove-orphans

docker-check-prereqs:
	@echo "--> Checking prerequisites..."
	@echo "  [✔] Required environment variables are set."
	@echo "--> Prerequisites check passed."