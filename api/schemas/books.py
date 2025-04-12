from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from api.database import db
from api.models.books import Book


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        load_instance = True
        sqla_session = db.session

    cover = fields.String(required=False, allow_none=True)
