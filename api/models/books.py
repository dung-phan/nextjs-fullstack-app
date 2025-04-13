import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db
from api.models import BookRecommender


class Book(db.Model):
    __tablename__ = "books"

    id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.UUID, primary_key=True, default=uuid.uuid4
    )
    title: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, nullable=False)
    author: so.Mapped[str] = so.mapped_column(
        sa.String(120), index=True, nullable=False
    )
    genre: so.Mapped[str] = so.mapped_column(sa.String(50), nullable=False)
    description: so.Mapped[str] = so.mapped_column(sa.Text, nullable=False)
    cover: so.Mapped[str] = so.mapped_column(sa.String(260), nullable=True)
    published_date: so.Mapped[sa.DateTime] = so.mapped_column(sa.DateTime, index=True)
    publisher: so.Mapped[str] = so.mapped_column(sa.String(100), nullable=False)
    ISBN: so.Mapped[str] = so.mapped_column(sa.String(20), unique=True, nullable=False)
    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now()
    )
    updated_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now()
    )

    recommendations: so.Mapped[BookRecommender] = so.relationship(
        back_populates="book",
        cascade="all, delete-orphan",
    )
