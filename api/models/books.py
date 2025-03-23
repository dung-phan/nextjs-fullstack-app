import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db


class Book(db.Model):
    id: so.Mapped[uuid.UUID] = so.mapped_column(sa.UUID, primary_key=True, default=uuid.uuid4)
    title: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, nullable=False)
    author: so.Mapped[str] = so.mapped_column(sa.String(120), index=True, nullable=False)
    genre: so.Mapped[str] = so.mapped_column(sa.String(50), nullable=False)
    rating: so.Mapped[float] = so.mapped_column(sa.Float, nullable=False)
    total_copies: so.Mapped[int] = so.mapped_column(sa.Integer, nullable=False)
    available_copies: so.Mapped[int] = so.mapped_column(sa.Integer, nullable=False)
    description: so.Mapped[str] = so.mapped_column(sa.Text, nullable=False)
    cover: so.Mapped[str] = so.mapped_column(sa.String(260), nullable=True)
    video: so.Mapped[str] = so.mapped_column(sa.String(260), nullable=True)
    summary: so.Mapped[str] = so.mapped_column(sa.Text, nullable=False)
    is_loaned: so.Mapped[bool] = so.mapped_column(sa.Boolean, nullable=False)

    __table_args__ = (
        sa.CheckConstraint("rating >= 0 AND rating <= 5", name="check_rating_range"),
        sa.CheckConstraint("total_copies >= 0", name="check_total_copies"),
        sa.CheckConstraint("available_copies >= 0", name="check_available_copies"),
    )
