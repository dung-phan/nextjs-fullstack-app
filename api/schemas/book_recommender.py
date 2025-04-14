from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, auto_field

from api.database import db
from api.models import BookRecommender
from api.schemas.recommenders import RecommenderSchema


class BookRecommenderSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = BookRecommender
        load_instance = True
        sqla_session = db.session

    recommender_id = auto_field()
    recommender = fields.Nested(RecommenderSchema)
    book_id = auto_field()
    url = fields.String(required=False)
