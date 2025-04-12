import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db
from api.models.recommenders import Recommender


class Book(db.Model):
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

    # Relationships
    recommended_by_id: so.Mapped[int] = so.mapped_column(
        sa.ForeignKey("recommender.id"), nullable=True
    )
    recommended_by: so.Mapped["Recommender"] = so.relationship(
        "Recommender", back_populates="books"
    )
