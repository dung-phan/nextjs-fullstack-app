from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

from api.database import db
from api.models.recommenders import Recommender, RecommenderType


class RecommenderSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Recommender
        load_instance = True
        sqla_session = db.session

    recommender_type = fields.Enum(RecommenderType, by_value=True)

    books = fields.List(fields.Nested("BookSchema"), dump_only=True)
