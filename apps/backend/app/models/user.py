from sqlalchemy import Boolean, Column, Integer, String

from app.db.base import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(length=320), unique=True, nullable=False, index=True)
    full_name = Column(String(length=255), nullable=True)
    hashed_password = Column(String(length=255), nullable=False)
    is_active = Column(Boolean, default=True, nullable=False)
