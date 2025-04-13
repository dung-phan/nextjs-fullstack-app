from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from api.database import db
from api.models import Book
from api.schemas.book_recommender import BookRecommenderSchema


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        include_relationships = True

        sqla_session = db.session

    cover = fields.String(required=False, allow_none=True)
    recommendations = fields.List(
        fields.Nested(BookRecommenderSchema), load_only=True
    )  # For handling the incoming data
