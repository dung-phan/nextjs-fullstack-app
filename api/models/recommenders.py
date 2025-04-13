import enum
import uuid
from typing import ForwardRef

import sqlalchemy as sa
import sqlalchemy.orm as so
from sqlalchemy.dialects import postgresql

from api.database import db
from api.models import BookRecommender


class RecommenderType(enum.Enum):
    INDIVIDUAL = "individual"
    NEWSPAPER = "newspaper"
    ORGANISATION = "organisation"


BookRef = ForwardRef("Book")


class Recommender(db.Model):
    __tablename__ = "recommenders"

    id: so.Mapped[uuid.UUID] = so.mapped_column(
        sa.UUID, primary_key=True, default=uuid.uuid4
    )
    name: so.Mapped[str] = so.mapped_column(sa.String(100), nullable=False)

    created_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=db.func.now()
    )
    updated_at: so.Mapped[sa.DateTime] = so.mapped_column(
        sa.DateTime, server_default=db.func.now(), onupdate=db.func.now()
    )
    recommender_type: so.Mapped[RecommenderType] = so.mapped_column(
        postgresql.ENUM(RecommenderType)
    )

    recommendations: so.Mapped[list["BookRecommender"]] = so.relationship(
        back_populates="recommender",
        cascade="all, delete-orphan",
    )
