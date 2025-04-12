from marshmallow import Schema
from marshmallow import fields

from api.database import db
from api.models.recommenders import Recommender, RecommenderType


class RecommendationSchema(Schema):
    class Meta:
        model = Recommender
        load_instance = True
        sqla_session = db.session

    recommender_type = fields.Enum(RecommenderType, by_value=True)
