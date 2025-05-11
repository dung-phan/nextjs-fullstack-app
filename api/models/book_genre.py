import uuid

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db


class BookGenre(db.Model):
    __tablename__ = "book_genre"

    book_id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.ForeignKey("book.id"), primary_key=True
    )

    genre_id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.ForeignKey("genre.id"), primary_key=True
    )
