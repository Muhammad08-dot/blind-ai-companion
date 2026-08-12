.PHONY: help build up down dev test lint clean

help:
	@echo "Blind AI Companion Commands:"
	@echo "  make dev      - Start stack in dev mode with Docker Compose"
	@echo "  make build    - Build production container images"
	@echo "  make test     - Run pytest vision suite"

dev:
	docker compose -f infrastructure/docker/docker-compose.dev.yml up --build

build:
	docker compose -f infrastructure/docker/docker-compose.dev.yml build

test:
	cd backend && pytest tests/ -v
