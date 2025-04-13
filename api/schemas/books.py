from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from api.database import db
from api.models.books import Book
from api.schemas.recommenders import RecommenderSchema


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session

    cover = fields.String(required=False, allow_none=True)
    recommended_by = fields.Nested(RecommenderSchema, dump_only=True)

    recommended_by_id = fields.Int(required=False, allow_none=True)
