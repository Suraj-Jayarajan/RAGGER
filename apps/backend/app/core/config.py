from functools import lru_cache

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    project_name: str = Field(default="RAGGER")
    api_version: str = Field(default="0.1.0")
    api_v1_prefix: str = Field(default="/api/v1")
    debug: bool = Field(default=False)
    secret_key: str = Field(default="supersecretkey")
    jwt_algorithm: str = Field(default="HS256")
    access_token_expire_minutes: int = Field(default=60)

    database_url: str = Field(
        default="postgresql+psycopg://ragger:ragger_password@postgres:5432/ragger_db"
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
