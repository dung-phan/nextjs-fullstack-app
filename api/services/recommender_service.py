from api.database import db
from api.models.recommenders import Recommender


def add_recommender(data):
    recommender = Recommender(
        name=data.name,
        url=data.url,
        recommender_type=data.recommender_type,
    )

    with db.session() as session:
        session.add(recommender)
        session.commit()
        session.refresh(recommender)

    return recommender
