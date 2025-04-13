import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db


class BookRecommender(db.Model):
    __tablename__ = "book_recommender"

    book_id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.ForeignKey("books.id"), primary_key=True
    )

    recommender_id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.ForeignKey("recommenders.id"), primary_key=True
    )

    url: so.Mapped[str] = so.mapped_column(sa.String(255), nullable=True)
    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now()
    )

    updated_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now()
    )
    book: so.Mapped["Book"] = so.relationship(back_populates="recommendations")
    recommender: so.Mapped["Recommender"] = so.relationship("Recommender")
