import uuid

from api.database import db
from api.models import Recommender


def get_recommender_by_id(recommender_id: uuid.UUID) -> Recommender:
    recommender = Recommender.query.get(recommender_id)

    if not recommender:
        raise ValueError(f"Recommender with ID {recommender_id} not found.")

    return recommender


def add_recommender(data):
    recommender = Recommender(
        name=data.name,
        url=data.url,
        recommender_type=data.recommender_type,
    )

    db.sessionadd(recommender)
    db.session.commit()

    return recommender
