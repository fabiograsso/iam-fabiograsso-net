# Makefile for Hugo static site

HUGO ?= hugo

.PHONY: help build server clean deploy

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

# Clean the public directory
clean:
	@echo "Cleaning public directory..."
	@hugo mod clean
	@rm -rf public/

# Deploy the site to GitHub
deploy: build
	@echo "Deploying to GitHub..."
	@git add .
	@git commit -m "chore: Update site content"
	@git push origin main
	@echo "Site deployed successfully!"

#hugo mod get -u
#hugo new my-new-section/my-post.md --kind post
#hugo new posts/my-first-post.md