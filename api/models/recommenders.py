import enum
from typing import ForwardRef

import sqlalchemy as sa
import sqlalchemy.orm as so

from api.database import db


class RecommenderType(enum.Enum):
    INDIVIDUAL = "individual"
    NEWSPAPER = "newspaper"
    ORGANISATION = "organisation"


class Recommender(db.Model):
    id: so.Mapped[int] = so.mapped_column(sa.Integer, primary_key=True)
    name: so.Mapped[str] = so.mapped_column(sa.String(100), nullable=False)
    url: so.Mapped[str] = so.mapped_column(sa.String(255))

    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=db.func.now()
    )
    updated_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=db.func.now(), onupdate=db.func.now()
    )
    recommender_type: so.Mapped[str] = so.mapped_column(
        sa.Enum(RecommenderType), nullable=False
    )

    books: so.Mapped[list[ForwardRef("Book")]] = so.relationship(
        "Book", back_populates="recommended_by"
    )
