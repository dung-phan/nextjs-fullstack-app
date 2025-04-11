import enum
import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so
from sqlalchemy.dialects import postgresql
from werkzeug.security import generate_password_hash, check_password_hash

from api.database import db


class UserRole(enum.Enum):
    ADMIN = "admin"
    USER = "user"
    GUEST = "guest"


class User(db.Model):
    id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.UUID, primary_key=True, default=uuid.uuid4
    )
    username: so.Mapped[str] = so.mapped_column(
        sa.String(32), index=True, nullable=False, unique=True
    )
    full_name: so.Mapped[str] = so.mapped_column(sa.String(255), nullable=False)
    email: so.Mapped[str] = so.mapped_column(
        sa.String(64), index=True, nullable=False, unique=True
    )
    university_id: so.Mapped[int] = so.mapped_column(sa.Integer, nullable=False)
    password_hash: so.Mapped[str | None] = so.mapped_column(sa.String(256))
    role: so.Mapped[UserRole] = so.mapped_column(postgresql.ENUM(UserRole))
    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now()
    )

    def __repr__(self):
        return f"<User {self.username}>"

    def set_password(self, password: str):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)
