from api.database import db
from api.models import Recommender, Book, BookRecommender


def add_book(data):
    book = Book(
        title=data.title,
        author=data.author,
        genre=data.genre,
        description=data.description,
        publisher=data.publisher,
        published_date=data.published_date,
        cover=data.cover,
        ISBN=data.ISBN,
    )

    db.session.add(book)

    if hasattr(data, "recommendations"):
        for recommendation_data in data.recommendations:
            recommender = Recommender.query.get(recommendation_data.recommender_id)

            if not recommender:
                raise ValueError(
                    f"Recommender with ID {recommendation_data.recommender_id} not found."
                )

            book_recommender = BookRecommender(
                book=book,
                recommender=recommender,
                url=recommendation_data.url,
            )
            db.session.add(book_recommender)

    db.session.commit()
    return book
