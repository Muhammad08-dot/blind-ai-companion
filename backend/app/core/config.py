"""
Pydantic v2 Settings for Blind People's AI Companion
"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Blind People's AI Companion"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    SECRET_KEY: str = "blind_ai_companion_secret_key_77665544"
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3002", "http://localhost:8002"]
    
    DATABASE_URL: str = "postgresql+asyncpg://blind_user:blind_secret_88@localhost:5434/blind_ai_db"
    REDIS_URL: str = "redis://localhost:6381/0"
    QDRANT_URL: str = "http://localhost:6336"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
