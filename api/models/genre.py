import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db


class Genre(db.Model):
    __tablename__ = "book_genre"

    id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.UUID, primary_key=True, default=uuid.uuid4
    )

    name: so.Mapped[str] = so.mapped_column(sa.String(50), nullable=False, unique=True)

    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now()
    )

    updated_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now()
    )
