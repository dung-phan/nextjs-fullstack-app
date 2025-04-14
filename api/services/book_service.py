from api.database import db
from api.models import Book, BookRecommender
from api.services.recommender_service import get_recommender_by_id


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
            recommender = get_recommender_by_id(recommendation_data["recommender_id"])

            book_recommender = BookRecommender(
                book=book,
                recommender=recommender,
                url=recommendation_data.url,
            )
            db.session.add(book_recommender)

    db.session.commit()
    return book


def get_book_recommendations(book_id: str):
    book_recommendations = (
        db.session.query(BookRecommender).filter_by(book_id=book_id).all()
    )

    return book_recommendations
